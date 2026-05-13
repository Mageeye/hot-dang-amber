import type { Metadata } from "next";
import { ContactInquiryForm } from "@/components/contact-inquiry-form";
import { RollingLink, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Contact - Hot Dang",
  description:
    "Reach out to Hot Dang to begin a cinematic brand, commercial, documentary, wedding, or editorial project.",
};

const contactDetails = [
  {
    label: "Email",
    value: "hello@amberfilms.studio",
    href: "mailto:hello@amberfilms.studio",
  },
  {
    label: "Phone",
    value: "+1 (123) 456-7890",
    href: "tel:+11234567890",
  },
  {
    label: "Location",
    value: "8427 Melrose Avenue, Suite 205 Los Angeles, CA 90069 USA",
    href: "https://www.google.com/maps/search/?api=1&query=8427+Melrose+Avenue+Suite+205+Los+Angeles+CA+90069",
    cta: "Get Directions",
  },
];

const socials = [
  { label: "Twitter/X", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Vimeo", href: "https://vimeo.com" },
];

const faqs = [
  {
    question: "What types of projects do you specialize in?",
    answer:
      "We specialize in cinematic storytelling across brand films, commercials, documentaries, weddings, fashion editorials, and fine art projects. Every film is crafted with a focus on emotional depth, visual beauty, and intentionality.",
  },
  {
    question: "Where are you based, and do you travel for projects?",
    answer:
      "We are based in Los Angeles, California, and proudly work with clients worldwide. Whether your story unfolds in the city, the mountains, or across oceans, we are available for destination projects both near and far.",
  },
  {
    question: "How do we start a project with Amber Films?",
    answer:
      "Start by reaching out through our Contact Page or email us directly. We will schedule a consultation to understand your vision, discuss your project's needs, and explore how we can best bring your story to life.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Turnaround times vary depending on the project's scope and complexity. On average, you can expect delivery within 6-10 weeks for full-length films and 3-6 weeks for shorter projects. We will always provide a clear timeline at the beginning of your project.",
  },
  {
    question: "Do you offer creative direction or help with concept development?",
    answer:
      "Yes. We often collaborate with clients from the very first idea, offering moodboards, storyboarding, visual treatments, and creative strategy to ensure the final film feels cohesive and true to your vision.",
  },
  {
    question: "Can we request a specific visual style or mood?",
    answer:
      "Absolutely. While our signature aesthetic leans toward warm, cinematic, and emotive visuals, we love tailoring each project's look and feel to reflect your unique story. Together, we'll craft a mood and tone that feels authentic to you.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our projects are quoted based on the scope, creative needs, and production requirements. After an initial consultation, we provide a custom proposal outlining the investment, timelines, and deliverables. We believe in transparency, quality, and honoring the value of your story.",
  },
  {
    question: "Do you work with brands and individuals alike?",
    answer:
      "Yes. We work with a diverse range of clients, from global brands and creative agencies to independent artists, couples, and dreamers. If you have a story to tell, we would be honored to help you tell it.",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader />

      <section className="contact-hero" aria-labelledby="contact-title">
        <p>Let&apos;s Create Something Timeless.</p>
        <h1 id="contact-title">Let&apos;s Talk</h1>
      </section>

      <section className="contact-info-grid" aria-label="Contact details">
        {contactDetails.map((detail) => (
          <article className="contact-info-item" key={detail.label}>
            <h2>{detail.label}</h2>
            {detail.cta ? (
              <>
                <RollingLink href={detail.href}>{detail.cta}</RollingLink>
                <p>{detail.value}</p>
              </>
            ) : (
              <RollingLink href={detail.href}>{detail.value}</RollingLink>
            )}
          </article>
        ))}

        <article className="contact-info-item contact-socials">
          <h2>Follow us</h2>
          <div>
            {socials.map((social) => (
              <RollingLink href={social.href} key={social.label}>
                {social.label}
              </RollingLink>
            ))}
          </div>
        </article>
      </section>

      <section className="contact-reach-out">
        <div className="contact-reach-copy">
          <p className="eyebrow">Reach out</p>
          <p>
            Whether you&apos;re dreaming up a new project, seeking a creative
            collaborator, or simply curious about our work. We would love to
            hear from you.
          </p>
        </div>

        <ContactInquiryForm />
      </section>

      <section className="contact-faqs" aria-labelledby="faq-title">
        <div className="contact-faq-heading">
          <p className="eyebrow" id="faq-title">
            FAQs
          </p>
          <p>
            Here you&apos;ll find answers to some of the things we are asked
            most often, from how we work to what inspires us.
          </p>
        </div>

        <div className="contact-faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                <span>{faq.question}</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
