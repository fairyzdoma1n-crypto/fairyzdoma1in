import { redirect } from "next/navigation";

// The portfolio lives inside the bag now.
export default function ProjectsPage() {
  redirect("/bag");
}
