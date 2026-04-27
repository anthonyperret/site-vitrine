"use client";

export default function ContactForm() {

return (
  <div>
    <form action="POST" className="flex flex-col gap-5">

      <div className="flex gap-5">
        <div className="w-[50%]">
          <label htmlFor="" className="text-ivoire/33 uppercase font-dm-sans text-xs">Prénom & Nom</label>
          <input type="text" name="" id="" placeholder="Jean Dupont" className="mt-1 bg-acier text-ivoire w-full px-4 py-2 rounded-xs outline-none font-dm-sans text-xs border border-ivoire/33 focus:border-cuivre"/>
        </div>
        <div className="w-[50%]">
          <label htmlFor="" className="text-ivoire/33 uppercase font-dm-sans text-xs">Email</label>
          <input type="text" name="" id="" placeholder="jean@exemple.fr" className="mt-1 bg-acier text-ivoire w-full px-4 py-2 rounded-xs outline-none font-dm-sans text-xs border border-ivoire/33 focus:border-cuivre"/>
        </div>
      </div>

      <div className="">
        <label htmlFor="" className="text-ivoire/33 uppercase font-dm-sans text-xs">Type de projet</label>
        <select name="" id="" className="w-full mt-1 bg-acier text-ivoire px-4 py-2 rounded-xs outline-none font-dm-sans text-xs border border-ivoire/33 focus:border-cuivre">
          <option value="">Sélectionnez...</option>
          <option value="">Site vitrine</option>
          <option value="">Site one-page</option>
          <option value="">Site e-commerce</option>
          <option value="">Application web / mobile</option>
          <option value="">Autre / Je ne sais pas encore</option>
        </select>
      </div>

      <div>
        <label htmlFor="" className="text-ivoire/33 uppercase font-dm-sans text-xs">Votre message</label>
        <textarea name="" id="" placeholder="Décrivez votre activité et ce que vous recherchez..." className="w-full h-[150px] mt-1 bg-acier text-ivoire px-4 py-2 rounded-xs outline-none font-dm-sans text-xs border border-ivoire/33 focus:border-cuivre"></textarea>
      </div>

      <button className="bg-cuivre text-ivoire px-6 py-3 rounded-sm font-dm-sans">Envoyer ma demande</button>
        
    </form>
  </div>
);
}
