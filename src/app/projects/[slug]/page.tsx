import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMoreProjects, getProject, projects } from "@/data/projects";
import { ProjectMasonryGallery } from "@/components/project-masonry-gallery";
import { ProjectMediaFrame } from "@/components/project-media";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} - Hot Dang`,
    description: project.overviewTitle,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const moreProjects = getMoreProjects(project.slug);

  return (
    <main className="project-detail-page">
      <SiteHeader />

      <section className="project-hero-detail" aria-label={project.title}>
        <ProjectMediaFrame
          media={project.heroMedia}
          controls={project.heroMedia.type === "video"}
          priority
        />
      </section>

      <section className="project-detail-meta" aria-label="Project metadata">
        <p>
          <span>Title</span>
          <strong>{project.title}</strong>
        </p>
        <p>
          <span>Category</span>
          <strong>{project.detailCategory}</strong>
        </p>
        <p>
          <span>Client</span>
          <strong>{project.client}</strong>
        </p>
        <p>
          <span>Year</span>
          <strong>{project.year}</strong>
        </p>
      </section>

      <section className="project-overview-block">
        <div className="project-overview-copy">
          <p className="eyebrow">Overview</p>
          <h1>{project.overviewTitle}</h1>
          <p>{project.overview}</p>
        </div>
        <div className="project-credits">
          <p className="eyebrow">Credits</p>
          <dl>
            {project.credits.map((credit) => (
              <div key={credit.label}>
                <dt>{credit.label}</dt>
                <dd>{credit.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ProjectMasonryGallery media={project.gallery} title={project.title} />

      <section className="more-projects">
        <h2>More Projects</h2>
        <div className="more-project-grid">
          {moreProjects.map((related) => (
            <Link
              className="project-card"
              href={`/projects/${related.slug}`}
              key={related.slug}
            >
              <div className="project-card-media">
                <ProjectMediaFrame
                  media={related.previewMedia}
                  sizes="(max-width: 760px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <div className="project-card-meta">
                <h3>{related.title}</h3>
                <p>{related.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
