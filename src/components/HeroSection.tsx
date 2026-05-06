import Button from "./Button";

export default function HeroSection() {
  return(
    <section className="h-screen bg-fonderie relative overflow-hidden flex flex-col justify-center">

      <span
        className="hidden lg:inline md:inline absolute lg:top-40 md:top-60 left-1/2 -translate-x-1/2 select-none font-bebas-neue text-[40vw] leading-none"
        style={{ color: "transparent", WebkitTextStroke: "1px var(--ivoire)", opacity: 0.07 }}
        aria-hidden="true"
      >
        FARGA
      </span>



      <div className="flex justify-center px-5">

        <div className="flex flex-col gap-3">


          <p className="animate-fade-up text-sm text-cuivre tagline" style={{ animationDelay: "0.1s" }}>
            Agence web — sud-ouest
          </p>

          <h1 className="animate-fade-up text-ivoire lg:w-4xl md:w-2xl" style={{   animationDelay: "0.2s" }}>
            Forgez votre présence
            <span className="accent"> en ligne.</span>
          </h1>

          <p className="animate-fade-up lg:w-4xl md:w-2xl text-ivoire/66 text-md" style={{ animationDelay: "0.3s" }}>
            Sites vitrine, e-commerce, applications — conçus sur mesure pour les artisans, commerçants et indépendants qui veulent enfin exister là où leurs clients les cherchent.
          </p>
          
          <div className="animate-fade-up flex lg:flex-row md:flex-row flex-col lg:gap-5 gap-3 mt-5" style={{ animationDelay: "0.4s" }}>
            <Button type="primary" label="Découvrir les services" path="/services"></Button>
            <Button type="secondary" label="Voir les réalisations" path="/realisations"></Button>
          </div>

        </div>

      </div>
      
    </section>
  )
}