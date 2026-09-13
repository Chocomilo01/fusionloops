import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FusionLoop | Engineering Sustainable Futures" },
      {
        name: "description",
        content:
          "Integrated renewable energy, water treatment, circular economy and project delivery solutions for resilient infrastructure.",
      },
      { property: "og:title", content: "FusionLoop | Engineering Sustainable Futures" },
      {
        property: "og:description",
        content:
          "Integrated renewable energy, water treatment, circular economy and project delivery solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
