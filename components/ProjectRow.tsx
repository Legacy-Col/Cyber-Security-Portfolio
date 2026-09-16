import Link from "next/link";
import { Project } from "@/data/projects";
import CategoryTag from "@/components/CategoryTag";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-2 border-b border-border py-5 transition-colors hover:bg-panel sm:flex-row sm:items-center sm:gap-6 sm:px-4 sm:-mx-4"
    >
      <span className="font-mono text-xs text-muted sm:w-20 sm:flex-none">
        {project.date}
      </span>
      <span className="sm:w-24 sm:flex-none">
        <CategoryTag category={project.category} />
      </span>
      <span className="flex-1">
        <span className="block text-ink group-hover:text-signal">
          {project.title}
        </span>
        <span className="mt-0.5 block text-sm text-muted">
          {project.summary}
        </span>
      </span>
      <span className="font-mono text-xs text-muted sm:w-28 sm:flex-none sm:text-right">
        {project.status}
      </span>
    </Link>
  );
}