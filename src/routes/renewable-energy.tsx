import { createFileRoute } from "@tanstack/react-router";
import RenewableEnergy from "@/pages/RenewableEnergy";

export const Route = createFileRoute("/renewable-energy")({
  head: () => ({
    meta: [
      { title: "Renewable Energy & Net Zero | FusionLoop" },
      {
        name: "description",
        content:
          "Solar and hybrid power systems, containerized plants, EMS/PCS integration and carbon neutrality programmes.",
      },
      { property: "og:title", content: "Renewable Energy & Net Zero | FusionLoop" },
      {
        property: "og:description",
        content: "Solar and hybrid power systems, containerized plants and carbon neutrality programmes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RenewableEnergy,
});
