"use client";

import { useEffect, useRef, useState } from "react";

type Stroke = {
  color: string;
  size: number;
  erase: boolean;
  points: { x: number; y: number }[];
};

const palette = [
  { name: "ink", value: "#22201d" },
  { name: "mocha", value: "#8a7362" },
  { name: "rose", value: "#c98b96" },
];

// The homepage drawing board from Arjita's reference: pen, eraser, undo,
// redo, clear, and a way to send the result to her. Strokes are kept as
// data (not pixels) so undo/redo replays are lossless at any resolution.
export function DoodleWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const redoRef = useRef<Stroke[]>([]);
  const drawingRef = useRef(false);

  const [color, setColor] = useState(palette[0].value);
  const [erasing, setErasing] = useState(false);
  // Bumped to force re-render so button disabled-states stay accurate.
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
      ctx.globalCompositeOperation = stroke.erase
        ? "destination-out"
        : "source-over";
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.size;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const pts = stroke.points;
      if (pts.length < 2) {
        ctx.beginPath();
        ctx.arc(pts[0].x, pts[0].y, stroke.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = stroke.color;
        if (!stroke.erase) ctx.fill();
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

  // Size the bitmap to the element * devicePixelRatio so lines stay crisp.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      ctx?.scale(dpr, dpr);
      repaint();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
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
      color,
      size: erasing ? 22 : 3.5,
      erase: erasing,
      points: [pointFromEvent(e)],
    });
    repaint();
    setVersion((v) => v + 1);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return;
    const current = strokesRef.current[strokesRef.current.length - 1];
    current.points.push(pointFromEvent(e));
    repaint();
  };

  const onPointerUp = () => {
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

  // Export against the paper color so downloads aren't transparent PNGs.
  const exportPng = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const out = document.createElement("canvas");
    out.width = canvas.width;
    out.height = canvas.height;
    const ctx = out.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = "#fdfbf7";
    ctx.fillRect(0, 0, out.width, out.height);
    ctx.drawImage(canvas, 0, 0);
    return out.toDataURL("image/png");
  };

  const download = () => {
    const url = exportPng();
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.download = "doodle-for-arjita.png";
    a.click();
  };

  const send = () => {
    // Until the EmailJS account exists, sending = download + open a
    // pre-addressed email so the visitor can attach it themselves.
    download();
    window.location.href =
      "mailto:arjitavolunteering@gmail.com?subject=a%20doodle%20for%20you!&body=(attach%20the%20doodle%20that%20just%20downloaded%20--%20thank%20you!)";
  };

  const hasStrokes = strokesRef.current.length > 0;
  const hasRedo = redoRef.current.length > 0;

  const toolButton =
    "font-mono rounded border border-ink/20 px-2 py-1 text-[11px] uppercase tracking-wide text-ink/70 transition-colors hover:border-mocha hover:text-mocha disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink/20 disabled:hover:text-ink/70";

  return (
    <div className="relative -rotate-1 rounded-sm border border-ink/20 bg-paper p-4 shadow-[3px_4px_0_rgba(34,32,29,0.08)]">
      <span
        aria-hidden
        className="washi absolute -top-3 right-10 h-6 w-20 rotate-3 bg-rose-dust/70"
      />

      <p className="font-picnic text-2xl">send me a doodle!</p>

      <canvas
        ref={canvasRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        aria-label="drawing board — draw a doodle with your mouse or finger"
        className="mt-3 h-56 w-full cursor-crosshair touch-none rounded-sm border border-ink/15 bg-[#fdfbf7]"
      />

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {palette.map((c) => (
          <button
            key={c.name}
            onClick={() => {
              setColor(c.value);
              setErasing(false);
            }}
            aria-label={`draw in ${c.name}`}
            aria-pressed={!erasing && color === c.value}
            style={{ backgroundColor: c.value }}
            className={`h-6 w-6 rounded-full border-2 transition-transform hover:scale-110 ${
              !erasing && color === c.value
                ? "border-ink scale-110"
                : "border-ink/20"
            }`}
          />
        ))}
        <button
          onClick={() => setErasing((e) => !e)}
          aria-pressed={erasing}
          className={`${toolButton} ${erasing ? "border-mocha bg-mocha/15 text-mocha" : ""}`}
        >
          eraser
        </button>
        <span aria-hidden className="mx-1 h-5 w-px bg-ink/15" />
        <button onClick={undo} disabled={!hasStrokes} className={toolButton}>
          undo
        </button>
        <button onClick={redo} disabled={!hasRedo} className={toolButton}>
          redo
        </button>
        <button onClick={clear} disabled={!hasStrokes} className={toolButton}>
          clear
        </button>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={send}
          disabled={!hasStrokes}
          className="font-nav rounded-full border border-ink bg-ink px-5 py-2 text-sm lowercase text-paper transition-colors hover:border-mocha hover:bg-mocha disabled:cursor-not-allowed disabled:opacity-40"
        >
          mail it to me ✉
        </button>
        <button
          onClick={download}
          disabled={!hasStrokes}
          className="font-mono text-[11px] uppercase tracking-wide text-ink/50 transition-colors hover:text-mocha disabled:cursor-not-allowed disabled:opacity-40"
        >
          just download ↓
        </button>
      </div>
    </div>
  );
}
