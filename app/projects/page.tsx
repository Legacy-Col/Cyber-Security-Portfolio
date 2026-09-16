import { getProjectsSorted } from "@/data/projects";
import ProjectRow from "@/components/ProjectRow";

export const metadata = {
  title: "Projects — Kaizen",
};

export default function ProjectsPage() {
  const projects = getProjectsSorted();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-ink">Projects</h1>
      <p className="mt-2 max-w-content text-muted">
        SOC, CTI, cloud, and offensive-security work — each entry links to a
        full writeup: objective, methodology, findings, and retro.
      </p>

      <div className="mt-10">
        {projects.length === 0 ? (
          <p className="border-t border-border py-8 text-muted">
            Nothing published yet — new entries appear here as soon as
            they&apos;re added to data/projects.ts.
          </p>
        ) : (
          projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))
        )}
      </div>
    </div>
  );
}