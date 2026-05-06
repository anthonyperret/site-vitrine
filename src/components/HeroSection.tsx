import Button from "./Button";

export default function HeroSection() {
  return(
    <section className="h-screen lg:py-0 py-10 pt-40 bg-fonderie relative overflow-hidden">

      <span
        className="hidden lg:inline md:inline absolute top-38 left-1/2 -translate-x-1/2 select-none font-bebas-neue text-[40vw] leading-none"
        style={{ color: "transparent", WebkitTextStroke: "1px var(--ivoire)", opacity: 0.07 }}
        aria-hidden="true"
      >
        FARGA
      </span>



      <div className="flex flex-col lg:gap-5 md:gap-5 gap-3 relative z-10 w-full h-full justify-center lg:items-center md:items-center px-5 lg:px-0 md:px-0">

        <div>
          <p className="animate-fade-up text-sm text-cuivre tagline mb-4" style={{ animationDelay: "0.1s" }}>
            Agence web — sud-ouest
          </p>

          <h1 className="lg:block md:block hidden animate-fade-up mb-6 text-white lg:w-4xl md:w-2xl" style={{ animationDelay: "0.2s" }}>
            Forgez votre présence
            <span className="text-cuivre"> en ligne.</span>
          </h1>

          <h1 className="lg:hidden md:hidden animate-fade-up mb-6 text-white" style={{ animationDelay: "0.2s" }}>
            Forgez votre présence<br/>
            <span className="text-cuivre">
              en ligne.
            </span>
          </h1>

        </div>

        <div>
          <p className="animate-fade-up lg:w-4xl md:w-2xl text-ivoire/66" style={{ animationDelay: "0.3s" }}>
            Sites vitrine, e-commerce, applications — conçus sur mesure pour les artisans, commerçants et indépendants qui veulent enfin exister là où leurs clients les cherchent.
          </p>
          <div className="animate-fade-up flex lg:flex-row md:flex-row flex-col gap-5 mt-10" style={{ animationDelay: "0.4s" }}>
            <Button type="primary" label="Découvrir les services" path="/services"></Button>
            <Button type="secondary" label="Voir les réalisations" path="/realisations"></Button>
          </div>
        </div>
      </div>
      
    </section>
  )
}