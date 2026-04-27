import SectionHeader from "@/components/SectionHeader";

export default function PageAPropos() {
  return (
    <div>
      <section className="bg-fonderie">
        <div className="px-100 py-40 flex">

          <div className="w-[50%] px-10">
            <div className="bg-acier rounded-sm w-full h-175">
            </div>
          </div>

          <div className="w-[50%] px-10 flex flex-col justify-center">
            <SectionHeader eyebrow="Qui je suis" title="Anthony" highlight="Perret." />
            <p className="font-dm-sans text-ivoire/66 mt-10">Basé dans le Sud-Ouest, je travaille en direct avec mes clients — sans intermédiaire, sans grande agence. Chaque projet est traité personnellement, de la première esquisse à la mise en ligne.</p>
            <p className="font-dm-sans text-ivoire/66 mt-5">Mon objectif : vous livrer un site qui ressemble vraiment à votre métier, qui se charge vite, qui fonctionne sur mobile, et qui génère des contacts. Pas un template copié-collé.</p>
          </div>
          
        </div>
      </section>

      <section className="bg-acier">
        <div className="px-100 py-40">
          <SectionHeader eyebrow="Parcours" title="Concepteur &" highlight="développeur." />
          
          <div className="flex flex-col gap-4 font-dm-sans text-ivoire/66 mt-10">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at velit tristique, rhoncus est sed, dictum risus. Aenean ut commodo magna. Aenean molestie tristique tristique. Maecenas accumsan consequat lectus at gravida. Nullam egestas nisi quis odio molestie, quis aliquam metus imperdiet. Etiam eget elementum nunc. Aliquam molestie leo ut posuere tempor. Integer orci velit, fringilla in velit sit amet, tristique imperdiet purus. Etiam vestibulum, felis ac vestibulum tincidunt, quam tortor ultricies neque, vitae pellentesque nulla lorem lacinia elit.</p>
            
            <p>Sed sed nisi ac purus fermentum egestas. Donec et nisl mauris. Curabitur ornare convallis hendrerit. Phasellus pellentesque commodo sollicitudin. Mauris cursus sem eget libero venenatis malesuada. Mauris bibendum pellentesque aliquet. Nullam elementum purus sed vulputate rutrum. Pellentesque et interdum velit. Aenean fermentum pharetra leo, gravida malesuada justo pellentesque luctus. Cras vehicula facilisis lectus in congue.</p>

            <p>Nullam venenatis felis vitae velit scelerisque lacinia. Ut convallis nulla non pretium rhoncus. Sed ut dolor eget turpis porta tempus. In convallis enim neque, convallis finibus tortor tempor vel. Phasellus luctus euismod hendrerit. Integer tincidunt consequat mauris ut tristique. Quisque nec neque consectetur, fermentum nulla eget, vulputate mi. Sed sit amet odio tincidunt, finibus ante sit amet, tincidunt ante. </p>
          </div>
          
        </div>
        
      </section>
    </div>
  )
}