import { tv } from "tailwind-variants";
import Image from "next/image";
import CustomLink from "@/components/common/CustomLink";
import Button from "@/components/common/Button";
import { solutions } from "@/data/solutions";

const styles = tv({
  slots: {
    section: [
      "w-full flex flex-col lg:flex-row",
      "items-start gap-6 sm:gap-12",
      "px-4 py-8 sm:py-10 sm:px-8 md:px-14",
    ],

    header: [
      "flex flex-col items-start gap-6",
      "w-full lg:w-md lg:shrink-0 lg:pt-2",
    ],

    sectionHeading: "text-2xl font-medium text-white sm:text-3xl",

    grid: ["flex-1 grid grid-cols-1 sm:grid-cols-2"],

    card: "flex flex-col gap-4 p-6 w-full",

    cardTop: "flex items-start justify-between",

    cardIcon: "w-12 h-12",

    badge: "text-xs font-medium uppercase tracking-widest text-zinc-500",

    cardTitle: "text-xl font-medium text-white",

    cardDescription: "flex-1 text-sm leading-6 text-zinc-400",
  },
});

export default function SolutionsSection() {
  const {
    section,
    header,
    sectionHeading,
    grid,
    card,
    cardTop,
    cardIcon,
    badge,
    cardTitle,
    cardDescription,
  } = styles();

  return (
    <section className={section()}>
      <div className={header()}>
        <h2 className={sectionHeading()}>
          All of our solutions are tailor-made to your needs
        </h2>
        <Button variant="outline">REQUEST DEMO</Button>
      </div>

      <div className={grid()}>
        {solutions.map(({ imageUrl, title, badge: badgeText, description }) => (
          <div key={title} className={card()}>
            <div className={cardTop()}>
              <Image
                src={imageUrl}
                alt={title}
                width={48}
                height={48}
                className={cardIcon()}
              />
              {badgeText && <span className={badge()}>{badgeText}</span>}
            </div>

            <h3 className={cardTitle()}>{title}</h3>

            <p className={cardDescription()}>{description}</p>

            <CustomLink />
          </div>
        ))}
      </div>
    </section>
  );
}
