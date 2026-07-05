"use client";

import { useEffect, useRef, useState } from "react";

type Stroke = {
  size: number;
  erase: boolean;
  points: { x: number; y: number }[];
};

const INK = "#22201d";
const PAGE_BG = "#f2efec";

/* Minimal line icons, drawn to match the reference toolbar. */
const icon = "h-4 w-4";
const IconGrip = () => (
  <svg viewBox="0 0 16 16" className={icon} fill="currentColor" aria-hidden>
    {[3, 8, 13].flatMap((y) =>
      [5, 11].map((x) => <circle key={`${x}${y}`} cx={x} cy={y} r="1.2" />)
    )}
  </svg>
);
const IconPencil = () => (
  <svg viewBox="0 0 16 16" className={icon} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
    <path d="M3 13 L3.6 10.4 L11 3 L13 5 L5.6 12.4 Z" strokeLinejoin="round" />
    <path d="M10 4 L12 6" />
  </svg>
);
const IconEraser = () => (
  <svg viewBox="0 0 16 16" className={icon} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
    <path d="M6 13 L2.5 9.5 a1.4 1.4 0 0 1 0-2 L8 2 L14 8 L9 13 Z" strokeLinejoin="round" />
    <path d="M5.5 6.5 L9.5 10.5" />
  </svg>
);
const IconUndo = () => (
  <svg viewBox="0 0 16 16" className={icon} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
    <path d="M5 3 L2 6 L5 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 6 H10 a4 4 0 0 1 0 8 H6" strokeLinecap="round" />
  </svg>
);
const IconRedo = () => (
  <svg viewBox="0 0 16 16" className={icon} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
    <path d="M11 3 L14 6 L11 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 6 H6 a4 4 0 0 0 0 8 H10" strokeLinecap="round" />
  </svg>
);
const IconClear = () => (
  <svg viewBox="0 0 16 16" className={icon} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
    <path d="M4 4 L12 12 M12 4 L4 12" strokeLinecap="round" />
  </svg>
);
const IconSend = () => (
  <svg viewBox="0 0 16 16" className={icon} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
    <path d="M8 10 V2.5 M5 5 L8 2 L11 5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 9.5 V13 H13 V9.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconHelp = () => (
  <svg viewBox="0 0 16 16" className={icon} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
    <circle cx="8" cy="8" r="6.3" />
    <path d="M6.2 6.2 a1.8 1.8 0 1 1 2.6 1.7 c-.5.3-.8.6-.8 1.2" strokeLinecap="round" />
    <circle cx="8" cy="11.4" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

/**
 * Full-page drawing surface in the style of designatyale.com: the page
 * itself is the canvas, controlled from a small floating toolbar that can
 * be dragged around by its grip. Page content sits above the canvas with
 * pointer-events disabled except on links/buttons, so visitors can doodle
 * everywhere while the site stays clickable.
 */
export function DoodleLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const redoRef = useRef<Stroke[]>([]);
  const drawingRef = useRef(false);

  const [erasing, setErasing] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [toolbarPos, setToolbarPos] = useState<{ x: number; y: number } | null>(null);
  const dragRef = useRef<{ dx: number; dy: number } | null>(null);
  const [, setVersion] = useState(0);

  const repaint = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    for (const stroke of strokesRef.current) {
      ctx.globalCompositeOperation = stroke.erase ? "destination-out" : "source-over";
      ctx.strokeStyle = INK;
      ctx.lineWidth = stroke.size;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const pts = stroke.points;
      if (pts.length < 2) {
        if (!stroke.erase) {
          ctx.beginPath();
          ctx.arc(pts[0].x, pts[0].y, stroke.size / 2, 0, Math.PI * 2);
          ctx.fillStyle = INK;
          ctx.fill();
        }
        continue;
      }
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length - 1; i++) {
        const midX = (pts[i].x + pts[i + 1].x) / 2;
        const midY = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, midX, midY);
      }
      ctx.stroke();
    }
    ctx.globalCompositeOperation = "source-over";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas?.parentElement) return;
    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.getContext("2d")?.scale(dpr, dpr);
      repaint();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement);
    return () => observer.disconnect();
  }, []);

  const pointFromEvent = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drawingRef.current = true;
    redoRef.current = [];
    strokesRef.current.push({
      size: erasing ? 26 : 3,
      erase: erasing,
      points: [pointFromEvent(e)],
    });
    repaint();
    setVersion((v) => v + 1);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return;
    strokesRef.current[strokesRef.current.length - 1].points.push(pointFromEvent(e));
    repaint();
  };

  const stopDrawing = () => {
    drawingRef.current = false;
  };

  const undo = () => {
    const s = strokesRef.current.pop();
    if (s) redoRef.current.push(s);
    repaint();
    setVersion((v) => v + 1);
  };

  const redo = () => {
    const s = redoRef.current.pop();
    if (s) strokesRef.current.push(s);
    repaint();
    setVersion((v) => v + 1);
  };

  const clear = () => {
    strokesRef.current = [];
    redoRef.current = [];
    repaint();
    setVersion((v) => v + 1);
  };

  const send = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const out = document.createElement("canvas");
    out.width = canvas.width;
    out.height = canvas.height;
    const ctx = out.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = PAGE_BG;
    ctx.fillRect(0, 0, out.width, out.height);
    ctx.drawImage(canvas, 0, 0);
    const a = document.createElement("a");
    a.href = out.toDataURL("image/png");
    a.download = "doodle-for-arjita.png";
    a.click();
    window.location.href =
      "mailto:arjitavolunteering@gmail.com?subject=a%20doodle%20for%20you!&body=(attach%20the%20doodle%20that%20just%20downloaded%20--%20thank%20you!)";
  };

  /* Toolbar dragging via the grip. */
  const onGripDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    const pill = e.currentTarget.parentElement!.getBoundingClientRect();
    dragRef.current = { dx: e.clientX - pill.left, dy: e.clientY - pill.top };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onGripMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragRef.current) return;
    setToolbarPos({
      x: Math.max(8, Math.min(e.clientX - dragRef.current.dx, window.innerWidth - 300)),
      y: Math.max(8, Math.min(e.clientY - dragRef.current.dy, window.innerHeight - 60)),
    });
  };
  const onGripUp = () => {
    dragRef.current = null;
  };

  const hasStrokes = strokesRef.current.length > 0;
  const hasRedo = redoRef.current.length > 0;

  const tool =
    "pointer-events-auto flex h-8 w-8 items-center justify-center rounded text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-ink/70";

  return (
    <>
      {/* the page-wide drawing surface */}
      <canvas
        ref={canvasRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrawing}
        onPointerCancel={stopDrawing}
        aria-label="the whole page is a drawing board — doodle anywhere"
        className="absolute inset-0 z-[5] h-full w-full touch-none"
        style={{ cursor: erasing ? "cell" : "crosshair" }}
      />

      {/* floating toolbar */}
      <div
        className="fixed z-30 flex flex-col items-center gap-1.5"
        style={
          toolbarPos
            ? { left: toolbarPos.x, top: toolbarPos.y }
            : { right: "1.5rem", top: "1rem" }
        }
      >
        <p className="pointer-events-none font-sans text-[13px] text-ink/80">
          send me a doodle!
        </p>

        <div className="relative flex items-center gap-0.5 rounded-lg border border-ink/15 bg-white/90 px-1.5 py-1 shadow-[0_2px_10px_rgba(34,32,29,0.12)] backdrop-blur-sm">
          <button
            onPointerDown={onGripDown}
            onPointerMove={onGripMove}
            onPointerUp={onGripUp}
            onPointerCancel={onGripUp}
            aria-label="drag to move the toolbar"
            className={`${tool} cursor-grab touch-none active:cursor-grabbing`}
          >
            <IconGrip />
          </button>

          <span aria-hidden className="mx-0.5 h-5 w-px bg-ink/10" />

          <button
            onClick={() => setErasing(false)}
            aria-label="pencil"
            aria-pressed={!erasing}
            className={`${tool} relative ${!erasing ? "text-ink" : ""}`}
          >
            <IconPencil />
            {!erasing && (
              <span aria-hidden className="absolute bottom-0.5 left-2 right-2 h-[2px] rounded bg-ink" />
            )}
          </button>
          <button
            onClick={() => setErasing(true)}
            aria-label="eraser"
            aria-pressed={erasing}
            className={`${tool} relative ${erasing ? "text-ink" : ""}`}
          >
            <IconEraser />
            {erasing && (
              <span aria-hidden className="absolute bottom-0.5 left-2 right-2 h-[2px] rounded bg-ink" />
            )}
          </button>
          <button onClick={undo} disabled={!hasStrokes} aria-label="undo" className={tool}>
            <IconUndo />
          </button>
          <button onClick={redo} disabled={!hasRedo} aria-label="redo" className={tool}>
            <IconRedo />
          </button>
          <button onClick={clear} disabled={!hasStrokes} aria-label="clear the page" className={tool}>
            <IconClear />
          </button>
          <button onClick={send} disabled={!hasStrokes} aria-label="mail your doodle to arjita" className={tool}>
            <IconSend />
          </button>
          <button
            onClick={() => setHelpOpen((h) => !h)}
            aria-label="help"
            aria-expanded={helpOpen}
            className={tool}
          >
            <IconHelp />
          </button>

          {helpOpen && (
            <div className="absolute right-0 top-11 w-56 rounded-lg border border-ink/15 bg-white/95 p-3 text-left shadow-[0_2px_10px_rgba(34,32,29,0.12)]">
              <p className="font-sans text-xs leading-relaxed text-ink/75">
                the whole page is a drawing board — doodle anywhere! when
                you&apos;re done, hit the send button to mail it to me. ✧
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
