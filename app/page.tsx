import Link from "next/link";
import { getProjectsSorted } from "@/data/projects";
import ProjectRow from "@/components/ProjectRow";
import Hero from "@/components/Hero";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";


export default function HomePage() {
  const featured = getProjectsSorted().slice(0, 3);

  return (
    <>
     {/* Hero */}
      <section className="border-b border-border">
        <Hero />
      </section>

      {/* Featured projects */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-sm font-medium text-muted">
              Recent projects
            </h2>
            <Link
              href="/projects"
              className="font-mono text-xs text-signal hover:underline"
            >
              view all
            </Link>
          </div>
          <div>
            {featured.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-4 text-sm font-medium text-muted">About</h2>
          <div className="max-w-content space-y-4 text-ink">
            <p>
              Write 2-3 sentences here about your path into security — keep
              it in your own words rather than a generic bio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-4 text-sm font-medium text-muted">Contact</h2>
          <p className="max-w-content text-ink">
            Open to Junior SOC Analyst roles and conversations about
            detection engineering, CTI, or lab builds.
          </p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-signal">
            <a
              href="mailto:nwosucollins35@gmail.com"
              className="flex items-center gap-1.5 hover:underline"
            >
              <Mail size={14} /> email
            </a>
            <a
              href="https://github.com/Legacy-Col"
              className="flex items-center gap-1.5 hover:underline"
            >
              <GithubIcon size={14} /> github
            </a>
            <a href="https://www.linkedin.com/in/chukwu-collins-a19476287" className="flex items-center gap-1.5 hover:underline">
              <LinkedinIcon size={14} /> linkedin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}