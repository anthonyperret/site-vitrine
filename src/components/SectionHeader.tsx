interface Props {
  eyebrow: string;
  title: string;
  highlight: string;
}

export default function SectionHeader({ eyebrow, title, highlight }: Props) {
  return (
    <div>
      <div className="w-15 h-0.5 bg-cuivre mb-2" />
      <p className="text-sm text-ivoire/66 tagline mb-10">
        {eyebrow}
      </p>
      <h2 className="uppercase text-ivoire text-7xl font-bebas-neue font-bold">
        {title}<span className="text-cuivre"> {highlight}</span>
      </h2>
    </div>
  );
}
