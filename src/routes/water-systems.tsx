import { createFileRoute } from "@tanstack/react-router";
import WaterSystems from "@/pages/WaterSystems";

export const Route = createFileRoute("/water-systems")({
  head: () => ({
    meta: [
      { title: "Wastewater & Circular Economy | FusionLoop" },
      {
        name: "description",
        content:
          "Advanced wastewater treatment, resource recovery, leak detection and greywater lifecycle optimisation.",
      },
      { property: "og:title", content: "Wastewater & Circular Economy | FusionLoop" },
      {
        property: "og:description",
        content: "Advanced wastewater treatment, resource recovery and intelligent monitoring.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WaterSystems,
});
