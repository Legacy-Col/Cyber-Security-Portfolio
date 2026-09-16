import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import CategoryTag from "@/components/CategoryTag";
import { ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  return { title: project ? `${project.title} — Kaizen` : "Project not found" };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const sections: { heading: string; body: string }[] = [
    { heading: "Objective", body: project.objective },
    { heading: "Methodology", body: project.methodology },
    { heading: "Findings", body: project.findings },
    { heading: "Retro", body: project.retro },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Link
        href="/projects"
        className="font-mono text-xs text-muted hover:text-signal"
      >
        ← all projects
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CategoryTag category={project.category} />
        <span className="font-mono text-xs text-muted">
          {project.date} · {project.status}
        </span>
      </div>

      <h1 className="mt-3 max-w-content text-3xl font-semibold text-ink">
        {project.title}
      </h1>
      <p className="mt-3 max-w-content text-muted">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tool) => (
          <span
            key={tool}
            className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-muted"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-10 border-t border-border pt-10">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="mb-2 font-mono text-xs uppercase tracking-wide text-amber">
              {section.heading}
            </h2>
            <p className="max-w-content text-ink">{section.body}</p>
          </div>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 font-mono text-sm text-signal">
          {project.links.map((link) => (
  <a
    key={link.url}
    href={link.url}
    className="flex items-center gap-1 hover:underline"
  >
    {link.label} <ArrowUpRight size={14} />
  </a>
))}
        </div>
      )}
    </div>
  );
}