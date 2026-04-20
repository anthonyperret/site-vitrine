import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="h-screen bg-cyan-500 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-7xl font-bold uppercase mb-6 text-white">Title H1</h1>
          <p className="text-center text-lg w-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc est, laoreet a nisl ac, feugiat sagittis.</p>

          <div className="absolute bottom-30">
            <Link href="/services">
              <button className="border-2 border-white text-white px-6 py-2 rounded-full min-w-60 hover:text-cyan-500 hover:bg-white hover:cursor-pointer">
                Découvrez nos services
              </button>
            </Link>
          </div>
          
        </div>
        
      </section>
      <section className="h-screen bg-red-500"></section>
      <section className="h-screen bg-green-500"></section>
    </div>
  );
}
