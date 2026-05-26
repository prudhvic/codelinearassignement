import Image from "next/image";
import { tv } from "tailwind-variants";
import Button from "@/components/common/Button";

const styles = tv({
  slots: {
    container: [
      "my-4 mx-auto w-full",
      "px-4 py-8 sm:px-8 md:px-14 md:py-14",
    ],

    section: [
      "grid grid-cols-1 justify-between",
      "w-full mx-auto",
      "lg:grid-cols-2",
    ],

    leftContent: "flex max-w-3xl flex-col",

    heading: [
      "text-3xl font-medium text-white",
      "sm:text-4xl md:text-5xl lg:text-6xl",
    ],

    description: [
      "mt-4 sm:mt-8 max-w-md text-sm leading-5",
      "text-zinc-400 font-medium",
    ],

    buttonGroup: "mt-8 sm:mt-12 flex flex-col gap-3 sm:flex-row sm:gap-5",

    imageWrapper: "relative flex items-center justify-center mt-10 lg:mt-0",

    glow: [
      "absolute h-full w-full",
      "rounded-full bg-blue-700",
      "opacity-20 blur-3xl",
    ],

    image: "relative rounded-hero object-cover",

    activityCard: [
      "hidden sm:block absolute left-0 top-1/2",
      "border-4 border-gray-400 rounded-2xl",
    ],

    balanceCard: [
      "hidden sm:block absolute right-0 bottom-1/3",
      "border-4 border-gray-400 rounded-2xl",
    ],

    trustedSection: "pt-2.5 mt-6 sm:mt-8",

    trustedHeading: "text-sm font-medium mb-4 text-hero-light",

    trustedList: "flex flex-wrap gap-3 list-none",

    trustedItem: [
      "flex items-center gap-1",
      "ml-1 text-sm text-slate-500",
    ],
  },
});

export default function HeroSection() {
  const {
    container,
    section,
    leftContent,
    heading,
    description,
    buttonGroup,
    imageWrapper,
    glow,
    image,
    activityCard,
    balanceCard,
    trustedSection,
    trustedHeading,
    trustedList,
    trustedItem,
  } = styles();

  return (
    <div className={container()}>
      <section className={section()}>
        <div className={leftContent()}>
          <h2 className={heading()}>The new foundation of modern banking</h2>

          <p className={description()}>
            We drive innovation and growth, provide seamless customer experience
            and operational excellence
          </p>

          <div className={buttonGroup()}>
            <Button size="sm">REQUEST DEMO</Button>
            <Button variant="outline" size="sm">CONTACT US</Button>
          </div>
        </div>

        <div className={imageWrapper()}>
          <div className={glow()} />
          <Image
            src="/hero-image.jpg"
            alt="Hero Image"
            width={400}
            height={400}
            className={image()}
            priority
          />
          <Image
            alt="Activity card"
            src="/activity-card.jpg"
            width={200}
            height={200}
            className={activityCard()}
          />
          <Image
            alt="Balance card"
            src="/balance-card.jpg"
            width={200}
            height={200}
            className={balanceCard()}
          />
        </div>
      </section>

      <section className={trustedSection()}>
        <h2 className={trustedHeading()}>Trusted By</h2>
        <ul className={trustedList()}>
          <li className={trustedItem()}>
            <Image src="/icons/shells.svg" alt="shell" width={18} height={18} />
            SHELLS
          </li>
          <li className={trustedItem()}>
            <Image src="/icons/smart-finder.svg" width={18} height={18} alt="smart finder" />
            SmartFinder
          </li>
          <li className={trustedItem()}>
            <Image src="/icons/zoomerr.svg" width={18} height={18} alt="zommer" />
            Zoomerr
          </li>
          <li className={trustedItem()}>
            <Image src="/icons/art-venue.svg" width={18} height={18} alt="artvenue" />
            ArtVenue
          </li>
          <li className={trustedItem()}>
            <Image src="/icons/kontrastr.svg" width={18} height={18} alt="Kontrastr" />
            Kontrastr
          </li>
          <li className={trustedItem()}>
            <Image src="/icons/waves-marathon.svg" width={18} height={18} alt="waves" />
            wavesmarathon
          </li>
        </ul>
      </section>
    </div>
  );
}
