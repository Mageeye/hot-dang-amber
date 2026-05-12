import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectMediaFrame } from "@/components/project-media";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const filters = ["All", "Films/TV", "Commercial", "Stills"];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <SiteHeader />

      <section className="projects-heading">
        <h1>Projects</h1>
        <div className="project-filters" aria-label="Project filters">
          {filters.map((filter, index) => (
            <span className={index === 0 ? "is-active" : ""} key={filter}>
              {filter}
            </span>
          ))}
        </div>
      </section>

      <section className="projects-grid" aria-label="Projects">
        {projects.map((project) => (
          <Link
            className="project-card"
            href={`/projects/${project.slug}`}
            key={project.slug}
          >
            <div className="project-card-media">
              <ProjectMediaFrame
                media={project.previewMedia}
                sizes="(max-width: 760px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
            </div>
            <div className="project-card-meta">
              <h2>{project.title}</h2>
              <p>{project.category}</p>
            </div>
          </Link>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
