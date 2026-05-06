interface Props {
  eyebrow: string;
  title: string;
  highlight: string;
}

export default function SectionHeader({ eyebrow, title, highlight }: Props) {
  return (
    <div>
      <div className="w-15 h-0.5 bg-cuivre mb-5" />
      {/* <p className="text-sm text-ivoire/66 tagline lg:mb-10 mb-5">
        {eyebrow}
      </p> */}
      <h2 className="text-ivoire">
        {title}<span className="accent"> {highlight}</span>
      </h2>
    </div>
  );
}
