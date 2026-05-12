import Link from "next/link";

export default async function ProjectPlaceholder({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return (
    <main className="placeholder-page">
      <Link href="/" className="placeholder-brand">
        Hot Dang
      </Link>
      <section>
        <p>Project</p>
        <h1>{title}</h1>
      </section>
    </main>
  );
}
