import { ProjectCategory } from "@/data/projects";

const categoryColor: Record<ProjectCategory, string> = {
  SOC: "text-signal border-signal/40",
  CTI: "text-amber border-amber/40",
  Pentest: "text-[#E86A4F] border-[#E86A4F]/40",
  Cloud: "text-[#7FBF7F] border-[#7FBF7F]/40",
};

export default function CategoryTag({
  category,
}: {
  category: ProjectCategory;
}) {
  return (
    <span
      className={`inline-block rounded-sm border px-1.5 py-0.5 font-mono text-[11px] leading-none ${categoryColor[category]}`}
    >
      {category}
    </span>
  );
}