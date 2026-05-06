interface Props {
  title: string;
  highlight: string;
}

export default function SectionHeader({ title, highlight }: Props) {
  return (
    <div>
      <div className="w-15 h-0.5 bg-cuivre mb-5" />
      <h2 className="text-ivoire">
        {title}<span className="accent"> {highlight}</span>
      </h2>
    </div>
  );
}
