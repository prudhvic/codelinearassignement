import { tv } from "tailwind-variants";
import Button from "@/components/common/button";

const styles = tv({
  slots: {
    wrapper: [
      "relative w-full overflow-hidden",
      "grid grid-cols-1 lg:grid-cols-2",
      "items-center min-h-80",
      "px-4 py-16 sm:px-8 md:px-14",
      "rounded-3xl border border-white/10",
      "bg-white/5",
      "p-8 lg:p-12",
    ],

    watermarkLeft: [
      "watermark-char",
      "absolute left-5 inset-y-0",
      "flex items-center",
      "-z-10",
    ],

    watermarkRight: [
      "watermark-char",
      "absolute right-0 inset-y-0",
      "flex items-center",
      "-z-10",
    ],

    card: ["relative z-10", "flex flex-col gap-5"],

    heading: [
      "text-3xl font-normal leading-tight text-white",
      "lg:text-4xl xl:text-5xl",
    ],

    description: "text-sm leading-6 text-zinc-400 max-w-lg",

    rightCol: [
      "relative z-10",
      "flex flex-wrap items-center justify-center gap-4",
      "pt-10 lg:pt-0",
      "lg:border-l lg:border-white/10 lg:pl-14",
    ],

    outerWrapper: "px-14 w-full",
  },
});

export default function FeatureSection({ isWaterMark = true }) {
  const {
    wrapper,
    watermarkLeft,
    watermarkRight,
    card,
    heading,
    description,
    rightCol,
    outerWrapper,
  } = styles();

  return (
    <div className={outerWrapper()}>
      <section className={wrapper()}>
        {isWaterMark && (
          <>
            <span className={watermarkLeft()} aria-hidden="true">
              C
            </span>
            <span className={watermarkRight()} aria-hidden="true">
              B7
            </span>
          </>
        )}

        <div className={card()}>
          <h2 className={heading()}>
            Take the full advantage of going paper-less now.
          </h2>
          <p className={description()}>
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        <div className={rightCol()}>
          <Button variant="outline" className="whitespace-nowrap">CONTACT US</Button>
          <Button className="whitespace-nowrap">REQUEST DEMO</Button>
        </div>
      </section>
    </div>
  );
}
