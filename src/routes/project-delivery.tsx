import { createFileRoute } from "@tanstack/react-router";
import ProjectDelivery from "@/pages/ProjectDelivery";

export const Route = createFileRoute("/project-delivery")({
  head: () => ({
    meta: [
      { title: "Project Management Excellence | FusionLoop" },
      {
        name: "description",
        content:
          "End-to-end project delivery from feasibility through commissioning for energy and water infrastructure.",
      },
      { property: "og:title", content: "Project Management Excellence | FusionLoop" },
      {
        property: "og:description",
        content: "End-to-end delivery from feasibility through commissioning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectDelivery,
});
