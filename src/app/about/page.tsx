import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "About - Hot Dang",
  description:
    "Amber Films is a creative studio devoted to the art of cinematic storytelling.",
};

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "120+", label: "Films Delivered" },
  { value: "16", label: "Industry Awards" },
];

const awards = [
  {
    label: "Featured in",
    value: "The Lane, Bridal Musings, Milkshake Studio Blog",
  },
  {
    label: "Best Cinematography",
    value: "Indie Visual Awards",
  },
  {
    label: "Top 10 Creative Studios",
    value: "Frame & Focus Journal",
  },
  {
    label: "Gold Winner",
    value: "International Wedding Film Awards",
  },
  {
    label: "Official Selection",
    value: "ShortCuts Film Festival",
  },
  {
    label: "Vimeo Staff Pick",
    value: "Golden Hour",
  },
];

const clients = [
  {
    name: "Aesop",
    logo: "/media/about/client-aesop.svg",
    width: 43,
    height: 48,
  },
  {
    name: "Vogue Australia",
    logo: "/media/about/client-vogue-australia.svg",
    width: 41,
    height: 29,
  },
  {
    name: "The Lane",
    logo: "/media/about/client-the-lane.svg",
    width: 78,
    height: 30,
  },
  {
    name: "Assembly Label",
    logo: "/media/about/client-assembly-label.svg",
    width: 53,
    height: 45,
  },
  {
    name: "Mecca Cosmetica",
    logo: "/media/about/client-mecca-cosmetica.svg",
    width: 60,
    height: 40,
  },
  {
    name: "Scanlan Theodore",
    logo: "/media/about/client-scanlan-theodore.svg",
    width: 176,
    height: 40,
  },
  {
    name: "Bassike",
    logo: "/media/about/client-bassike.svg",
    width: 40,
    height: 28,
  },
  {
    name: "Cereal Magazine",
    logo: "/media/about/client-cereal-magazine.svg",
    width: 169,
    height: 40,
  },
  {
    name: "The Calile Hotel",
    logo: "/media/about/client-the-calile-hotel.svg",
    width: 81,
    height: 81,
  },
  {
    name: "La Lune Bridal",
    logo: "/media/about/client-la-lune-bridal.svg",
    width: 78,
    height: 32,
  },
  {
    name: "The Wedding Harvest",
    logo: "/media/about/client-the-wedding-harvest.svg",
    width: 80,
    height: 80,
  },
  {
    name: "White Magazine",
    logo: "/media/about/client-white-magazine.svg",
    width: 50,
    height: 39,
  },
];

const team = [
  {
    name: "Clara Wynn",
    role: "Founder & Creative Director",
    image: "/media/about/clara-wynn.png",
    width: 1200,
    height: 904,
  },
  {
    name: "Julian Reed",
    role: "Director of Photography",
    image: "/media/about/julian-reed.png",
    width: 1200,
    height: 693,
  },
  {
    name: "Mila Chen",
    role: "Editor & Post-Production Lead",
    image: "/media/about/mila-chen.png",
    width: 1200,
    height: 1200,
  },
  {
    name: "Theo Archer",
    role: "Producer & Client Experience",
    image: "/media/about/theo-archer.jpg",
    width: 673,
    height: 1200,
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />

      <section className="about-hero-copy">
        <h1>
          Amber Films is a creative studio devoted to the art of cinematic
          storytelling. With a signature style that blends warmth, elegance,
          and emotion, we craft timeless visual narratives that resonate deeply.
        </h1>
      </section>

      <section className="about-hero-image" aria-label="Studio scene">
        <Image
          src="/media/about/studio-hands.jpg"
          alt=""
          width={1920}
          height={1280}
          priority
        />
      </section>

      <section className="about-story-block">
        <div className="about-story-copy">
          <p className="about-section-label">Our Story</p>
          <h2>
            Amber was born from a love of beautiful visuals and honest
            storytelling.
          </h2>
          <p>
            What began as a side project with a camera, a curious eye, and a
            deep appreciation for good light has grown into a creative studio
            trusted by brands, couples, and storytellers alike. Along the way,
            we&rsquo;ve learned that what truly matters isn&rsquo;t just how
            things look, it&rsquo;s how they feel.
          </p>
          <div className="about-stats" aria-label="Studio statistics">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-story-image">
          <Image
            src="/media/about/studio-camera.jpg"
            alt=""
            width={2792}
            height={1861}
          />
        </div>
      </section>

      <section className="about-recognition">
        <div className="about-awards">
          <div className="about-section-heading">
            <h2>Awards &amp; Recognitions</h2>
            <p>
              We&rsquo;re honored to have our work recognized by some of the
              industry&rsquo;s leading platforms and communities.
            </p>
          </div>
          <div className="about-awards-list">
            {awards.map((award) => (
              <a href="https://www.awwwards.com/" key={award.label}>
                <span>{award.label}</span>
                <strong>{award.value}</strong>
              </a>
            ))}
          </div>
        </div>
        <div className="about-clients">
          <div className="about-section-heading">
            <h2>Selected Clients</h2>
            <p>
              We&rsquo;ve had the privilege of working with an inspiring range of
              clients who value storytelling as much as we do.
            </p>
          </div>
          <div className="about-client-list">
            {clients.map((client) => (
              <a href="https://thaer.shop" key={client.name}>
                <span>{client.name}</span>
                <Image
                  src={client.logo}
                  alt=""
                  width={client.width}
                  height={client.height}
                  loading="eager"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="about-section-heading">
          <h2>Meet our team</h2>
          <p>
            Behind every frame at Amber is a team of storytellers, artists, and
            visual thinkers who care deeply about the craft of filmmaking.
          </p>
        </div>
        <div className="about-team-grid">
          {team.map((member) => (
            <article key={member.name}>
              <div className="about-team-image">
                <Image
                  src={member.image}
                  alt=""
                  width={member.width}
                  height={member.height}
                  loading="eager"
                />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
