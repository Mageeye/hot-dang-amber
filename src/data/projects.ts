export type ProjectCredit = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  slug: string;
  year: string;
  category: string;
  detailCategory: string;
  client: string;
  overviewTitle: string;
  overview: string;
  credits: ProjectCredit[];
  media: string;
  mediaType: "video";
  objectPosition: string;
};

export const projects: Project[] = [
  {
    title: "Of Earth",
    slug: "of-earth",
    year: "2022",
    category: "Commercial",
    detailCategory: "Commercial",
    client: "Terrae Botanicals",
    overviewTitle:
      "Cinematic campaign for a luxury skincare line rooted in nature.",
    overview:
      "Shot at golden hour across mountains and mossy forests, this piece merges slow-motion cinematography with intimate product details, making nature the hero of the frame.",
    credits: [
      { label: "Director", value: "Jo Maren" },
      { label: "Cinematographer", value: "Selene Miro" },
      { label: "Drone Operator", value: "Ezra Vale" },
      { label: "Editor", value: "Neve Olan" },
      { label: "Colorist", value: "Ren Calder" },
      { label: "Producer", value: "Amber Films Collective" },
    ],
    media: "/media/of-earth.mp4",
    mediaType: "video",
    objectPosition: "50% 48%",
  },
  {
    title: "After the Quiet",
    slug: "after-the-quiet",
    year: "2023",
    category: "Short Film",
    detailCategory: "Films/TV",
    client: "Independent",
    overviewTitle:
      "A surreal, symbolic short film exploring post-traumatic growth.",
    overview:
      "Experimental and dreamlike, this film uses abstract visuals, spoken word, and layered sound design to create an immersive emotional landscape. Amber led cinematography and grading for mood and metaphor.",
    credits: [
      { label: "Director", value: "Cas Eron" },
      { label: "Cinematographer", value: "Ori Wynn" },
      { label: "Editor & VFX", value: "Lumen Dray" },
      { label: "Sound Designer", value: "Nico Vahl" },
      { label: "Movement Director", value: "Ayla Rhodes" },
      { label: "Colorist", value: "Ember Faye" },
    ],
    media: "/media/after-the-quiet.mp4",
    mediaType: "video",
    objectPosition: "50% 50%",
  },
  {
    title: "Echoes of Us",
    slug: "echoes-of-us",
    year: "2023",
    category: "Wedding Film",
    detailCategory: "Films/TV",
    client: "Private Couple",
    overviewTitle: "A stylized wedding film with a narrative arc.",
    overview:
      "A love story told like a feature, with poetic framing, voiceover, and an intentional structure that moves like memory. Captured across 3 days, blending analog textures with digital clarity.",
    credits: [
      { label: "Director", value: "Amber Films Collective" },
      { label: "Cinematographer", value: "Milo Tan" },
      { label: "Editor", value: "Harper Cael" },
      { label: "Colorist", value: "Nessa Lane" },
      { label: "Soundtrack Curation", value: "Lark Sync" },
      { label: "Photographer", value: "Sienna Bloom" },
    ],
    media: "/media/echoes-of-us.mp4",
    mediaType: "video",
    objectPosition: "50% 45%",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getMoreProjects(slug: string) {
  return projects.filter((project) => project.slug !== slug);
}
