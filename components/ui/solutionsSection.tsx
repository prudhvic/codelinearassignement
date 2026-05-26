import { tv } from "tailwind-variants";
import Image from "next/image";
import CustomLink from "@/components/common/customLink";
import Button from "@/components/common/button";

type Solution = {
  imageUrl: string;
  title: string;
  badge?: string;
  description: string;
};

const solutions: Solution[] = [
  {
    imageUrl: "/icons/solutions/core-banking.svg",
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    imageUrl: "/icons/solutions/digital-banking.svg",
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    imageUrl: "/icons/solutions/open-banking.svg",
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    imageUrl: "/icons/solutions/loan-origination.svg",
    title: "Loan Origination System",
    badge: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
  {
    imageUrl: "/icons/solutions/loan-management.svg",
    title: "Loan Management System",
    badge: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
];

const styles = tv({
  slots: {
    section: [
      "w-full flex flex-col lg:flex-row",
      "items-start gap-12",
      "px-4 py-10 sm:px-8 md:px-14",
    ],

    header: [
      "flex flex-col items-start gap-6",
      "w-full lg:w-md lg:shrink-0 lg:pt-2",
    ],

    sectionHeading: "text-2xl font-medium text-white sm:text-3xl",

    grid: ["flex-1 grid grid-cols-1 sm:grid-cols-2"],

    card: ["flex flex-col gap-4 p-6 w-full lgw-2xs "],

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
