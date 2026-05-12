export type ProjectCredit = {
  label: string;
  value: string;
};

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
  width?: number;
  height?: number;
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
  heroMedia: ProjectMedia;
  previewMedia: ProjectMedia;
  gallery: ProjectMedia[];
};

const videoMedia = (src: string, objectPosition: string): ProjectMedia => ({
  type: "video",
  src,
  objectPosition,
});

const crocsJuicyBase = "/media/crocs-x-juicy/";

const crocsJuicyImage = (
  fileName: string,
  width: number,
  height: number,
  alt: string,
  objectPosition = "50% 50%",
  mobileObjectPosition?: string,
): ProjectMedia => ({
  type: "image",
  src: `${crocsJuicyBase}${fileName}`,
  alt,
  width,
  height,
  objectPosition,
  mobileObjectPosition,
});

const crocsJuicyGallery: ProjectMedia[] = [
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alana_2203_Extended.jpg",
    3000,
    1388,
    "Crocs X Juicy campaign image with Alana",
    "50% 46%",
    "78% 48%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Duo_1590.jpg",
    3000,
    2000,
    "Crocs X Juicy duo campaign still",
    "50% 42%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Product_2593.jpg",
    2000,
    3000,
    "Crocs X Juicy product campaign still",
    "50% 52%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alana_1973.jpg",
    2000,
    3000,
    "Crocs X Juicy Alana portrait campaign still",
    "50% 34%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alicia_0893.jpg",
    2000,
    3000,
    "Crocs X Juicy Alicia campaign portrait",
    "50% 34%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Duo_1638.jpg",
    3000,
    2000,
    "Crocs X Juicy duo campaign image",
    "50% 44%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alicia_0288.jpg",
    2000,
    3000,
    "Crocs X Juicy Alicia portrait still",
    "50% 35%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Product_2999.jpg",
    3000,
    2000,
    "Crocs X Juicy product detail still",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alana_2149.jpg",
    2000,
    3000,
    "Crocs X Juicy portrait campaign still",
    "50% 28%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alicia_0392.jpg",
    2001,
    3000,
    "Crocs X Juicy Alicia editorial still",
    "50% 34%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Duo_1822.jpg",
    3000,
    2001,
    "Crocs X Juicy duo lifestyle campaign still",
    "50% 42%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Product_2617.jpg",
    2000,
    3000,
    "Crocs X Juicy product portrait still",
    "50% 52%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alana_2203.jpg",
    3000,
    2000,
    "Crocs X Juicy Alana landscape still",
    "50% 45%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alicia_0548.jpg",
    2000,
    3000,
    "Crocs X Juicy Alicia campaign still",
    "50% 31%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Duo_1100.jpg",
    2000,
    3000,
    "Crocs X Juicy duo portrait still",
    "50% 34%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Product_2624.jpg",
    2000,
    3000,
    "Crocs X Juicy product detail portrait",
    "50% 52%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alana_2293.jpg",
    2000,
    3000,
    "Crocs X Juicy Alana campaign portrait",
    "50% 35%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alicia_0685.jpg",
    2000,
    3000,
    "Crocs X Juicy Alicia pink campaign still",
    "50% 32%",
  ),
  crocsJuicyImage(
    "2025_01_22_CrocsxJuicy_Alana_2383.jpg",
    2000,
    3000,
    "Crocs X Juicy Alana product portrait",
    "50% 34%",
  ),
];

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
    heroMedia: videoMedia("/media/of-earth.mp4", "50% 48%"),
    previewMedia: videoMedia("/media/of-earth.mp4", "50% 48%"),
    gallery: [
      videoMedia("/media/of-earth.mp4", "50% 48%"),
      videoMedia("/media/of-earth.mp4", "50% 48%"),
      videoMedia("/media/of-earth.mp4", "50% 48%"),
      videoMedia("/media/of-earth.mp4", "50% 48%"),
    ],
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
    heroMedia: videoMedia("/media/after-the-quiet.mp4", "50% 50%"),
    previewMedia: videoMedia("/media/after-the-quiet.mp4", "50% 50%"),
    gallery: [
      videoMedia("/media/after-the-quiet.mp4", "50% 50%"),
      videoMedia("/media/after-the-quiet.mp4", "50% 50%"),
      videoMedia("/media/after-the-quiet.mp4", "50% 50%"),
      videoMedia("/media/after-the-quiet.mp4", "50% 50%"),
    ],
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
    heroMedia: videoMedia("/media/echoes-of-us.mp4", "50% 45%"),
    previewMedia: videoMedia("/media/echoes-of-us.mp4", "50% 45%"),
    gallery: [
      videoMedia("/media/echoes-of-us.mp4", "50% 45%"),
      videoMedia("/media/echoes-of-us.mp4", "50% 45%"),
      videoMedia("/media/echoes-of-us.mp4", "50% 45%"),
      videoMedia("/media/echoes-of-us.mp4", "50% 45%"),
    ],
  },
  {
    title: "Crocs X Juicy",
    slug: "crocs-x-juicy",
    year: "2025",
    category: "Stills",
    detailCategory: "Commercial",
    client: "Crocs X Juicy",
    overviewTitle:
      "A candy-colored stills campaign built around texture, attitude, and shine.",
    overview:
      "Shot with a glossy editorial sensibility, this campaign frames talent, product, and styling as one saturated world. The images move between crisp product detail and playful portraiture, giving the collaboration a bright, collectible visual language.",
    credits: [
      { label: "Creative Production", value: "Hot Dang" },
      { label: "Photography", value: "Hot Dang" },
      { label: "Post-Production", value: "Hot Dang" },
      { label: "Client", value: "Crocs X Juicy" },
    ],
    heroMedia: {
      type: "image",
      src: `${crocsJuicyBase}2025_01_22_CrocsxJuicy_Alana_2203.jpg`,
      alt: "Crocs X Juicy hero campaign still",
      objectPosition: "50% 47%",
      mobileObjectPosition: "78% 48%",
      width: 3000,
      height: 2000,
    },
    previewMedia: {
      type: "image",
      src: `${crocsJuicyBase}2025_01_22_CrocsxJuicy_Duo_1590.jpg`,
      alt: "Crocs X Juicy project preview",
      objectPosition: "50% 42%",
      width: 3000,
      height: 2000,
    },
    gallery: crocsJuicyGallery,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getMoreProjects(slug: string) {
  return projects.filter((project) => project.slug !== slug);
}
