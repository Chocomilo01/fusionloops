import { Link } from "react-router-dom";
import {
  Flame,
  Fuel,
  Zap,
  Factory,
  Gauge,
  Truck,
  ShieldCheck,
  Leaf,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import flareHero from "@/assets/flare-gas-hero.jpg";

const pillars = [
  {
    num: "01",
    icon: Factory,
    title: "Flare Capture & Treating",
    desc: "Modular recovery units capture low-pressure associated gas from separators, sweetening and conditioning gas to pipeline and fuel specifications.",
  },
  {
    num: "02",
    icon: Fuel,
    title: "LPG & CNG Extraction",
    desc: "Fractionation units strip propane and butane into commercial LPG, while lean gas is compressed into CNG for virtual pipeline logistics.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Gas-to-Wire Electricity",
    desc: "High-efficiency gas generator sets utilise residual gas to produce reliable electricity, offsetting expensive site diesel and powering microgrids.",
  },
];

const pathways = [
  {
    icon: Fuel,
    title: "Liquid Petroleum Gas (LPG)",
    desc: "Extracted propane and butane streams packaged for domestic cooking fuel and industrial heat distribution.",
  },
  {
    icon: Truck,
    title: "Compressed Natural Gas (CNG)",
    desc: "High-pressure methane loaded into mobile tube trailers to serve off-grid industrial energy customers.",
  },
  {
    icon: Zap,
    title: "On-Site Power Generation",
    desc: "Containerized generator sets providing clean electricity to displace expensive field diesel power.",
  },
];

const recovery = [
  { label: "Tri-Product Monetization", value: "95%", width: "95%" },
  { label: "Dedicated On-Site Power", value: "70%", width: "70%" },
  { label: "Single Product LPG Recovery", value: "55%", width: "55%" },
  { label: "Status Quo Routine Flaring", value: "Waste (-100%)", width: "8%" },
];

const timeline = [
  {
    month: "Month 1",
    title: "Gas Audit",
    desc: "Gas compositional analysis, flow rate profiling, and economic modeling.",
  },
  {
    month: "Month 2",
    title: "Design",
    desc: "Modular skid configuration, site layout, and permitting preparation.",
  },
  {
    month: "Month 3",
    title: "Deployment",
    desc: "Transport of prefabricated skids to the wellhead site and tie-in connection.",
  },
  {
    month: "Month 4",
    title: "Operation",
    desc: "Commissioning, power output delivery, and LPG/CNG off-take logistics.",
  },
];

const FlareGas = () => {
  return (
    <Layout>
      <PageHero
        backgroundImage={flareHero}
        title='Eliminating Flare Gas via Modular "Waste-to-Wealth" Monetization'
        subtitle="Converting environmental liability into high-value LPG, CNG, and on-site power generation."
        tags="Institutional Offering Overview"
      />

      {/* Strategic vision */}
      <section className="bg-teal-dark section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Strategic Vision
          </p>
          <h2 className="section-title text-cream mb-6">
            The Flare Monetization Mandate
          </h2>
          <p className="text-cream/70 text-lg">
            Positioning our institution at the forefront of decarbonization,
            asset recovery, and decentralized energy delivery for the global oil
            &amp; gas sector.
          </p>
        </div>
      </section>

      {/* Challenge vs solution */}
      <section className="content-section">
        <div className="container mx-auto">
          <h2 className="section-title text-foreground mb-12 text-center">
            Environmental Liability vs. Commercial Asset
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl bg-card p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="h-6 w-6 text-secondary" />
                <h3 className="font-heading font-bold text-xl">
                  The Flaring Challenge
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Routine gas flaring wastes over 140 billion cubic meters (BCM)
                of natural gas annually worldwide, generating massive carbon
                taxes, regulatory fines, and local atmospheric pollution.
              </p>
              <p className="text-muted-foreground">
                Traditional centralized gas collection requires millions in
                CAPEX and years of pipeline construction, rendering stranded
                wellheads economically unviable.
              </p>
            </div>
            <div className="rounded-xl bg-primary p-8 border border-teal-light/20">
              <div className="flex items-center gap-3 mb-4">
                <Gauge className="h-6 w-6 text-secondary" />
                <h3 className="font-heading font-bold text-xl text-cream">
                  Our Institutional Solution
                </h3>
              </div>
              <p className="text-cream/70 mb-4">
                We deploy modular, rapid-deployment Flare Gas Recovery Units
                (FGRUs) directly at upstream wellheads to capture associated gas
                before flaring occurs.
              </p>
              <p className="text-cream/70">
                By processing raw gas on-site, we extract liquids (LPG),
                compress dry methane (CNG), and fuel gas turbine generators —
                delivering immediate returns on investment for operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core pillars */}
      <section className="bg-teal-dark section-padding">
        <div className="container mx-auto">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-2">
            Core Pillars
          </p>
          <h2 className="section-title text-cream mb-12">
            Capture, Process, Monetize
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.num} className="service-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <p.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <span className="font-heading font-black text-3xl text-cream/20">
                    {p.num}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-cream mb-3">
                  {p.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tri-product pathways */}
      <section className="content-section">
        <div className="container mx-auto">
          <h2 className="section-title text-foreground mb-12 text-center">
            Tri-Product Monetization Pathways
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pathways.map((p) => (
              <div
                key={p.title}
                className="rounded-xl bg-card p-8 border border-border hover:border-secondary/50 transition-colors"
              >
                <p.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-primary section-padding">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="font-heading font-black text-7xl md:text-8xl text-secondary">
              99%
            </p>
            <p className="text-cream/70 font-heading tracking-widest uppercase text-sm mt-2">
              Direct Methane Reduction
            </p>
          </div>
          <div>
            <h2 className="section-title text-cream mb-6">
              Transforming ESG Benchmarks into Revenue
            </h2>
            <div className="space-y-5">
              <div className="flex gap-3">
                <Leaf className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <p className="text-cream/70">
                  <span className="font-semibold text-cream">
                    Zero CAPEX model:
                  </span>{" "}
                  we finance, build, and operate the modular infrastructure,
                  allowing oil field operators to eliminate routine flaring
                  without financial liability.
                </p>
              </div>
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <p className="text-cream/70">
                  <span className="font-semibold text-cream">
                    Regulatory compliance:
                  </span>{" "}
                  assists operators in satisfying World Bank Zero Routine
                  Flaring guidelines while earning tradable carbon offset
                  credits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic efficiency */}
      <section className="content-section">
        <div className="container mx-auto max-w-3xl">
          <h2 className="section-title text-foreground mb-4 text-center">
            Economic Efficiency vs. Traditional Flaring
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Combining LPG extraction, CNG compression, and power generation
            yields up to 95% total economic recovery from flared associated gas
            streams.
          </p>
          <div className="space-y-6">
            {recovery.map((r) => (
              <div key={r.label}>
                <div className="flex justify-between text-sm font-heading font-semibold mb-2">
                  <span>{r.label}</span>
                  <span className="text-secondary">{r.value}</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-secondary"
                    style={{ width: r.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-teal-dark section-padding">
        <div className="container mx-auto">
          <h2 className="section-title text-cream mb-12">
            Modular Project Execution Timeline
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((t) => (
              <div
                key={t.month}
                className="rounded-xl border border-teal-light/20 p-6 hover:border-secondary/40 transition-colors"
              >
                <p className="text-secondary font-heading font-semibold text-xs tracking-widest uppercase mb-2">
                  {t.month}
                </p>
                <h3 className="font-heading font-bold text-lg text-cream mb-2">
                  {t.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="content-section">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="section-title text-foreground mb-8">
            Our Institutional Commitment
          </h2>
          <blockquote className="font-heading text-2xl md:text-3xl leading-snug text-primary">
            “We turn an environmental challenge into clean energy, economic
            prosperity, and actionable decarbonization for energy producers
            worldwide.”
          </blockquote>
          <p className="text-muted-foreground mt-6">
            — Institutional Mission for Zero Flaring
          </p>
          <div className="mt-10">
            <Link
              to="/project-delivery"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading font-semibold text-primary-foreground hover:bg-teal-mid transition-colors"
            >
              See how we deliver projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FlareGas;
