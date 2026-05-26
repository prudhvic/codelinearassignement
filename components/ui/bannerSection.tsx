import { tv } from "tailwind-variants";
import Button from "@/components/common/Button";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CustomLink from "../common/CustomLink";

const features = [
  "Customer-On Boarding",
  "CRM Activities",
  "Managing deposits and withdrawals",
  "Configuring New Banking Products",
  "Transaction management",
  "Loan disbursal and Loan management",
  "Interest Calculation",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const styles = tv({
  slots: {
    section: [
      "w-full grid grid-cols-1 lg:grid-cols-2",
      "items-center gap-12",
      "px-4 py-10 sm:px-8 md:px-14",
    ],

    leftContent: "flex flex-col items-start gap-6",

    heading: [
      "text-4xl font-normal leading-tight",
      "text-white",
      "lg:text-5xl xl:text-6xl",
    ],

    description: "text-sm leading-6 text-zinc-400 max-w-sm",

    imageWrapper: "relative",

    glow: [
      "absolute inset-0 rounded-2xl",
      "bg-cyan-500/10 blur-2xl",
      "-z-10 scale-110",
    ],

    imageContainer: [
      "relative rounded-2xl overflow-hidden",
      "border border-cyan-500/40",
    ],

    image: "w-full h-auto",

    featureWrapper: "flex flex-col gap-4",

    kycSection: [
      "w-full grid grid-cols-1 lg:grid-cols-2",
      "items-center gap-12",
      "px-4 py-10 sm:px-8 md:px-14",
    ],

    kycImageWrapper: "relative order-last lg:order-first",

    kycHeading: [
      "text-3xl font-normal leading-snug",
      "text-white",
      "lg:text-4xl xl:text-5xl",
    ],

    featureSubtitle: "text-base font-semibold text-white",

    featureGrid: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4",

    featureItem: "flex items-start gap-2.5 text-sm leading-6 text-zinc-300",

    checkIcon: "mt-0.5 shrink-0 text-blue-500",
  },
});

export default function BannerSection() {
  const {
    section,
    leftContent,
    heading,
    description,
    imageWrapper,
    glow,
    imageContainer,
    image,
    featureWrapper,
    kycSection,
    kycImageWrapper,
    kycHeading,
    featureSubtitle,
    featureGrid,
    featureItem,
    checkIcon,
  } = styles();

  return (
    <div>
      <section className={section()}>
        <div className={leftContent()}>
          <h3 className={heading()}>A complete cloud-based core banking.</h3>

          <p className={description()}>
            Faster time to market with our cloud-based core banking services
          </p>

          <Button size="md">REQUEST DEMO</Button>

          <CustomLink  />
        </div>

        <div className={imageWrapper()}>
          <div className={glow()} />
          <div className={imageContainer()}>
            <Image
              src="/aml-dashboard.jpg"
              width={600}
              height={380}
              alt="AML Dashboard"
              className={image()}
            />
          </div>
        </div>
      </section>

      <section className={kycSection()}>
        <div className={kycImageWrapper()}>
          <div className={glow()} />
          <div className={imageContainer()}>
            <Image
              src="/kyc-dashboard.jpg"
              width={620}
              height={400}
              alt="KYC Dashboard"
              className={image()}
            />
          </div>
        </div>

        <div className={leftContent()}>
          <h3 className={kycHeading()}>
            Run a more efficient, flexible, and digitally connected corebanking
            system
          </h3>

          <div className={featureWrapper()}>
            <p className={featureSubtitle()}>What you will get:</p>

            <ul className={featureGrid()}>
              {features.map((feat) => (
                <li key={feat} className={featureItem()}>
                  <CheckCircle2 size={18} className={checkIcon()} />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
