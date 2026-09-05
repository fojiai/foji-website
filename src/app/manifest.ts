import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Foji",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#FF2D2D",
    lang: "pt-BR",
    icons: [
      { src: "/favicon_foji.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
