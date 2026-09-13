import { createFileRoute } from "@tanstack/react-router";
import FlareGas from "@/pages/FlareGas";

export const Route = createFileRoute("/flare-gas")({
  head: () => ({
    meta: [
      { title: "Flare Gas Monetization | FusionLoop" },
      {
        name: "description",
        content:
          "Modular waste-to-wealth flare gas recovery converting associated gas into LPG, CNG and on-site power with a zero CAPEX model.",
      },
      { property: "og:title", content: "Flare Gas Monetization | FusionLoop" },
      {
        property: "og:description",
        content: "Modular flare gas recovery turning wasted gas into LPG, CNG and on-site power.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FlareGas,
});
