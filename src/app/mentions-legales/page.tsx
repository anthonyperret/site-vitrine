import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales et politique de confidentialité du site farga.me — éditeur, hébergement, propriété intellectuelle et RGPD.",
};

export default function MentionsLegales() {

  return (
    <div>
        <section className="bg-fonderie">
            <div className="px-100 py-40">
                <SectionHeader eyebrow="" title="Mentions" highlight="légales." />

                <div className="w-full mt-15 text-ivoire font-dm-sans">
                    <h2 className="font-bebas-neue text-3xl mb-3">Éditeur du site</h2>
                    <p>Le site farga.me est édité par Anthony Perret, micro-entrepreneur, exerçant sous le nom commercial Farga.</p>

                    <p>Adresse : 22 rue Maurice Ravel, 65000 Tarbes, France</p>
                    <p>SIRET : en cours d&apos;attribution</p>
                    <p>Contact : contact@farga.me</p>
                    
                    <hr className="text-ivoire/33 my-5" />

                    <h2 className="font-bebas-neue text-3xl mb-3">Hébergement</h2>
                    <p>Le site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis — vercel.com</p>

                    <hr className="text-ivoire/33 my-5" />

                    <h2 className="font-bebas-neue text-3xl mb-3">Propriété intellectuelle</h2>
                    <p>L&apos;ensemble des contenus présents sur farga.me (textes, visuels, logo, nom commercial) sont la propriété exclusive d&apos;Anthony Perret / Farga ou font l&apos;objet d&apos;une autorisation d&apos;utilisation. La marque Farga est déposée. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable écrite est interdite.</p>

                    <hr className="text-ivoire/33 my-5" />

                    <h2 className="font-bebas-neue text-3xl mb-3">Responsabilité</h2>
                    <p>Anthony Perret s&apos;efforce de maintenir les informations publiées sur farga.me à jour et exactes, mais ne peut garantir l&apos;exhaustivité ou l&apos;absence d&apos;erreur. La responsabilité de l&apos;éditeur ne saurait être engagée en cas d&apos;erreur ou d&apos;omission dans le contenu du site.</p>
                </div>
            </div>
        </section>

        <section id="politique-de-confidentialite" className="bg-acier scroll-mt-15">
            <div className="px-100 py-30">
                <SectionHeader eyebrow="" title="Politique de" highlight="confidentialité." />

                <div className="w-full mt-15 text-ivoire font-dm-sans">
                    <h2 className="font-bebas-neue text-3xl mb-3">Responsable du traitement</h2>
                    <p>Anthony Perret, micro-entrepreneur exerçant sous le nom commercial Farga</p>
                    <p>22 rue Maurice Ravel, 65000 Tarbes, France</p>
                    <p>contact@farga.me</p>

                    <hr className="text-ivoire/33 my-5" />

                    <h2 className="font-bebas-neue text-3xl mb-3">Données collectées</h2>
                    <p>Dans le cadre d&apos;une demande de devis, les données suivantes sont collectées : nom, prénom et adresse e-mail. Aucune autre donnée n&apos;est collectée via le site.</p>

                    <hr className="text-ivoire/33 my-5" />

                    <h2 className="font-bebas-neue text-3xl mb-3">Finalités et base légale</h2>
                    <p>Vos données sont utilisées pour deux finalités :</p>
                    <ul className="ml-5">
                        <li className="list-disc">Traiter votre demande de devis et vous apporter une réponse (base légale : mesures précontractuelles, art. 6.1.b du RGPD).</li>
                        <li className="list-disc">Vous adresser ultérieurement des communications commerciales sur les services de Farga (base légale : intérêt légitime, art. 6.1.f du RGPD).</li>
                    </ul>

                    <hr className="text-ivoire/33 my-5" />

                    <h2 className="font-bebas-neue text-3xl mb-3">Durée de conservation</h2>
                    <p>Vos données sont conservées 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.</p>

                    <hr className="text-ivoire/33 my-5" />

                    <h2 className="font-bebas-neue text-3xl mb-3">Vos droits</h2>
                    <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition, de limitation et de portabilité sur vos données. Pour exercer l&apos;un de ces droits, envoyez un e-mail à contact@farga.me. Une réponse vous sera apportée dans un délai de 30 jours.</p>
                    <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL sur cnil.fr.</p>

                    <hr className="text-ivoire/33 my-5" />

                    <h2 className="font-bebas-neue text-3xl mb-3">Analytics</h2>
                    <p>Le site utilise Vercel Analytics pour mesurer son audience. Cet outil collecte des données anonymisées et agrégées (pages visitées, navigateur, pays) sans déposer de cookie de traçage. Aucun consentement préalable n&apos;est requis.</p>

                </div>
            </div>
        </section>
    </div>
  );
}
