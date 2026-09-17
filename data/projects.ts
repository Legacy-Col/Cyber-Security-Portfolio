// ── ADD A NEW PROJECT ──────────────────────────────────────────────
// Copy the block below, fill it in, and push it into the `projects`
// array. Nothing else needs to change — home, /projects, and the
// individual project page all read from this file.
//
// {
//   slug: "short-url-safe-id",       // becomes /projects/short-url-safe-id
//   title: "Human readable title",
//   category: "SOC",                 // "SOC" | "CTI" | "Pentest" | "Cloud"
//   status: "Complete",              // "Complete" | "In Progress" | "Planned"
//   date: "2026-08",                 // YYYY-MM, used for sorting
//   summary: "One sentence, shows in the list view.",
//   stack: ["Splunk", "Sysmon"],     // tools/tech used
//   objective: "What you set out to do.",
//   methodology: "What you actually did, step by step, in prose.",
//   findings: "What you found / built / detected.",
//   retro: "What you'd do differently next time.",
//   links: [{ label: "GitHub repo", url: "https://github.com/..." }],
// }
// ────────────────────────────────────────────────────────────────────

export type ProjectCategory = "SOC" | "CTI" | "Pentest" | "Cloud";
export type ProjectStatus = "Complete" | "In Progress" | "Planned";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  date: string; // YYYY-MM
  summary: string;
  stack: string[];
  objective: string;
  methodology: string;
  findings: string;
  retro: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
   slug: "short-url-safe-id",       
   title: "Malware Analysis",
   category: "SOC",                 
   status: "Complete",              
   date: "2026-06",                 
   summary: "This Project made me understand how to read and analyse malware.",
   stack: ["Powershell", "YARA", "Virustotal", "Malware Bazzar"],     
   objective: "What you set out to .",
   methodology: "I downloaded the malware from Malware Bazzar and then wrote a Yara rule to analyse it",
   findings: "I .",
   retro: "What you'd do differently next time.",
   links: [{ label: "GitHub repo", url: "https://github.com/Legacy-Col/soc-analyst-journey/tree/collins/Malware%20Analysis" }],
 },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsSorted(): Project[]
{
  return [...projects].sort((a, b) => (a.date < b.date ? 1 : -1));
}