import { createFileRoute } from "@tanstack/react-router";
import DrinkingWater from "@/pages/DrinkingWater";

export const Route = createFileRoute("/drinking-water")({
  head: () => ({
    meta: [
      { title: "Drinking Water Management | FusionLoop" },
      {
        name: "description",
        content:
          "Off-grid and modular drinking water treatment plants delivering WHO-compliant water anywhere.",
      },
      { property: "og:title", content: "Drinking Water Management | FusionLoop" },
      {
        property: "og:description",
        content: "Off-grid, portable and modular treatment plants delivering WHO-compliant water.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DrinkingWater,
});
