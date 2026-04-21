import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="h-screen bg-cyan-500 flex justify-center items-center" style={{
          backgroundImage: "url('/hero-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>

        <div className="absolute inset-0 bg-black/50" />
        <div className="flex flex-col items-center relative z-10">
          <h1 className="text-center text-7xl font-bold uppercase mb-6 text-white font-mogra">Forgez votre réussite</h1>
          <p className="text-center text-lg w-2xl text-white">Votre savoir-faire mérite une vitrine à sa hauteur. Chez Forja, on conçoit des sites web sur-mesure pour les artisans et commerçants qui veulent exister en ligne.</p>
        </div>

        <div className="absolute bottom-30 z-10">
          <Link href="/services">
            <button className="font-pt-sans font-bold border-2 border-white text-white px-6 py-2 rounded-full min-w-60 hover:cursor-pointer">
              Découvrez nos services
            </button>
          </Link>
        </div>
        
      </section>
      <section className="h-screen bg-red-500">

      </section>
      <section className="h-screen bg-green-500"></section>
    </div>
  );
}
