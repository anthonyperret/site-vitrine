import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site en maintenance",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-fonderie flex flex-col justify-center items-center relative overflow-hidden">

      <span
        className="absolute top-38 select-none font-bebas-neue text-[40vw] leading-none pointer-events-none"
        style={{ color: "transparent", WebkitTextStroke: "1px var(--ivoire)", opacity: 0.04 }}
        aria-hidden="true"
      >
        FARGA
      </span>

      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6">

        <p className="text-sm text-cuivre font-dm-sans tagline">
          Site en maintenance
        </p>

        <h1 className="font-bebas-neue text-7xl text-ivoire leading-none">
          On forge<br />
          <span className="text-cuivre">la suite.</span>
        </h1>

        <p className="font-dm-sans text-ivoire/60 max-w-sm text-base">
          Le site est temporairement indisponible le temps de quelques améliorations.
          Il sera de retour très prochainement.
        </p>

        <div className="w-12 h-px bg-cuivre mt-2" />

        <a
          href="mailto:contact@farga.me"
          className="font-dm-sans text-ivoire/50 text-sm hover:text-cuivre transition-colors"
        >
          contact@farga.me
        </a>

      </div>
    </div>
  );
}
