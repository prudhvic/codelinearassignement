import { tv } from "tailwind-variants";
import { ArrowRight, Plus } from "lucide-react";
import Button from "@/components/common/Button";
import Link from "next/link";
import { articles } from "@/data/insights";

const styles = tv({
  slots: {
    section: [
      "w-full grid grid-cols-1 lg:grid-cols-2",
      "items-start gap-8 sm:gap-12",
      "px-4 py-8 sm:py-16 sm:px-8 md:px-14",
    ],

    leftContent: "flex flex-col items-start gap-8",

    heading: [
      "text-2xl sm:text-3xl font-normal leading-snug text-white",
      "lg:text-4xl max-w-sm",
    ],


    rightCol: "flex flex-col gap-6",

    featuredRow: [
      "grid grid-cols-1 sm:grid-cols-2",
      "border border-white/10 rounded-2xl overflow-hidden",
    ],

    imagePlaceholder: [
      "flex items-center justify-center",
      "bg-blue-950 min-h-48 sm:min-h-64",
    ],

    iconGrid: "grid grid-cols-2 gap-4 sm:gap-6 p-6 sm:p-10",

    featuredContent: [
      "flex flex-col justify-between gap-6",
      "p-6 border-l border-white/10",
    ],

    bottomRow: "grid grid-cols-1 sm:grid-cols-2 gap-6",

    card: [
      "flex flex-col gap-4",
      "p-6 border border-white/10 rounded-2xl",
    ],

    category: "text-xs font-medium uppercase tracking-widest text-brand",

    cardTitle: "text-xl font-normal leading-snug text-white",

    cardMeta: "flex items-center gap-4 text-sm text-zinc-400",


    featuredInner: "flex flex-col gap-3",

    readAllRow: "flex justify-end",

    readAllLink: [
      "inline-flex items-center gap-1.5",
      "text-xs font-medium uppercase",
      "text-brand hover:opacity-80 transition-opacity",
    ],
  },
});

export default function InsightsSection() {
  const {
    section,
    leftContent,
    heading,
    rightCol,
    featuredRow,
    imagePlaceholder,
    iconGrid,
    featuredContent,
    bottomRow,
    card,
    category,
    cardTitle,
    cardMeta,
    featuredInner,
    readAllRow,
    readAllLink,
  } = styles();

  const [featured, ...rest] = articles;

  return (
    <section className={section()}>
      <div className={leftContent()}>
        <h2 className={heading()}>
          Get yourself up-to-speed on all the things happening in fintech
        </h2>
        <Button variant="outline">INSIGHTS</Button>
      </div>

      <div className={rightCol()}>
        <div className={featuredRow()}>
          <div className={imagePlaceholder()}>
            <div className={iconGrid()}>
              {[0, 1, 2, 3].map((i) => (
                <Plus key={i} size={52} strokeWidth={1.5} className="text-brand" />
              ))}
            </div>
          </div>

          <div className={featuredContent()}>
            <div className={featuredInner()}>
              <p className={category()}>{featured.category}</p>
              <h3 className={cardTitle()}>{featured.title}</h3>
              <p className={cardMeta()}>
                <span>{featured.author}</span>
                <span>{featured.date}</span>
              </p>
            </div>
            <Button variant="ghost">READ MORE</Button>
          </div>
        </div>

        <div className={bottomRow()}>
          {rest.map((article, i) => (
            <div key={i} className={card()}>
              <p className={category()}>{article.category}</p>
              <h3 className={cardTitle()}>{article.title}</h3>
              <p className={cardMeta()}>
                <span>{article.author}</span>
                <span>{article.date}</span>
              </p>
              <Button variant="ghost" className="mt-auto">READ MORE</Button>
            </div>
          ))}
        </div>

        <div className={readAllRow()}>
          <Link href="#" className={readAllLink()}>
            READ ALL INSIGHTS
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
