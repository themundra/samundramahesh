import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Samundra Mahesh",
    short_name: "Samundra",
    description:
      "Website & app design, creative services, and founder of Drone Hospital Nepal.",
    start_url: "/",
    display: "standalone",
    background_color: "#070b12",
    theme_color: "#070b12",
    icons: [
      {
        src: "/images/samahesh.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
