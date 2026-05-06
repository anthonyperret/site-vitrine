"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { ref, visible } = useScrollReveal(0.15);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={visible ? "animate-fade-up" : "opacity-0"}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <div className="flex gap-5">
          <div className="w-[50%]">
            <label htmlFor="name" className="text-ivoire/33 tagline font-dm-sans text-xs">Prénom & Nom</label>
            <input required type="text" name="name" id="name" placeholder="Jean Dupont" className="mt-1 bg-acier text-ivoire w-full px-3 py-2 rounded-xs outline-none font-dm-sans text-xs border border-ivoire/33 focus:border-cuivre"/>
          </div>
          <div className="w-[50%]">
            <label htmlFor="email" className="text-ivoire/33 tagline font-dm-sans text-xs">Email</label>
            <input required type="email" name="email" id="email" placeholder="jean@exemple.fr" className="mt-1 bg-acier text-ivoire w-full px-3 py-2 rounded-xs outline-none font-dm-sans text-xs border border-ivoire/33 focus:border-cuivre"/>
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className="text-ivoire/33 tagline font-dm-sans text-xs">Type de projet</label>
          <select required name="projectType" id="projectType" className="w-full mt-1 bg-acier text-ivoire px-3 py-2 rounded-xs outline-none font-dm-sans text-xs border border-ivoire/33 focus:border-cuivre">
            <option value="">Sélectionnez...</option>
            <option value="Site one-page">Site one-page</option>
            <option value="Site vitrine">Site vitrine</option>
            <option value="Site e-commerce">Site e-commerce</option>
            <option value="Application web / mobile">Solution métier</option>
            <option value="Autre / Je ne sais pas encore">Autre / Je ne sais pas encore</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="text-ivoire/33 tagline font-dm-sans text-xs">Votre message</label>
          <textarea required name="message" id="message" placeholder="Décrivez votre activité et ce que vous recherchez..." className="w-full h-38 mt-1 bg-acier text-ivoire px-3 py-2 rounded-xs outline-none font-dm-sans text-xs border border-ivoire/33 focus:border-cuivre"></textarea>
        </div>

        <button disabled={status === "loading"} className="cursor-pointer bg-cuivre text-ivoire px-6 py-3 rounded-sm font-dm-sans disabled:opacity-50">
          {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>

        {status === "success" && <p className="font-dm-sans text-xs text-green-400">Message envoyé, je reviens vers vous rapidement !</p>}
        {status === "error" && <p className="font-dm-sans text-xs text-red-400">Une erreur est survenue, réessayez ou contactez-moi directement.</p>}

      </form>
    </div>
  );
}
