import { tv } from "tailwind-variants";
import Image from "next/image";
import Button from "@/components/common/button";
import { Asterisk, CheckCircle2 } from "lucide-react";
import CustomLink from "@/components/common/customLink";

type Feature = {
  heading: string;
  description: string;
  bullets: string[];
};

const complianceFeature: Feature = {
  heading: "Fully compliant with regulatory requirements",
  description:
    "The governance of risk management with regulatory is achieved by our risk management framework. N7 is fully integrated to work with digital banking solutions to streamline procedures.",
  bullets: [
    "Pre-Integrated Security System",
    "Fully Compliant Anti-Regulatory Requirements",
    "Digitally Connected Core",
  ],
};

const legacyFeature: Feature = {
  heading: "No legacy IT systems",
  description:
    "Our Digital Banking solution and multipotent approach help financial institutions take advantage of digital technologies while remaining aligned for trust and regulatory compliance.",
  bullets: [
    "Adaptive & Intelligent API Architecture",
    "Architected User Experience",
    "Cloud-native With lower TCO",
  ],
};

const branchFeature: Feature = {
  heading: "No traditional branches",
  description:
    "Our Digital Banking solution-to-box provides while adjusting and optimising some local data for a seamless checkout type Experience.",
  bullets: [
    "Anomalous & Paperless Banking",
    "Digital transformation capability",
    "Customers, Institutions and Transfer",
  ],
};

type TickerItem =
  | { type: "brand"; content: string }
  | { type: "text"; before: string; emoji: string; after: string };

const tickerItems: TickerItem[] = [
  { type: "text", before: "Say ", emoji: "👋", after: " to the new way of banking" },
  { type: "brand", content: "CB7" },
  { type: "text", before: "Say ", emoji: "👋", after: " to the new way of banking" },
  { type: "brand", content: "N7" },
];

const tickerStyles = tv({
  slots: {
    tickerWrapper: [
      "w-full overflow-hidden",
      "bg-white border-y border-white/5",
      "py-4",
    ],
    tickerTrack: "flex items-center animate-ticker",
    tickerItem: "flex items-center shrink-0",
    tickerStar: "mx-6 shrink-0 text-zinc-500",
    tickerText: "text-3xl font-medium text-black whitespace-nowrap",
    tickerBrand: "text-3xl font-medium text-brand whitespace-nowrap",
    tickerEmoji: "inline-block animate-bye",
  },
});

const styles = tv({
  slots: {
    section: [
      "w-full container mx-auto flex flex-col gap-24",
      "px-4 py-16 sm:px-8 md:px-14",
      "bg-slate-50",
    ],

    row1: ["grid grid-cols-1 lg:grid-cols-3", "items-center gap-12"],

    row2: ["grid grid-cols-1 lg:grid-cols-2", "items-center gap-12"],

    mainContent: "flex flex-col items-start gap-6",

    mainHeading: [
      "text-4xl font-normal leading-tight text-slate-900",
      "lg:text-5xl",
    ],

    mainDesc: "text-sm leading-6 text-slate-600 max-w-xs",

    phoneCol: "flex items-center justify-center",

    featureContent: "flex flex-col gap-4",

    featureHeading: [
      "text-xl font-medium leading-snug text-slate-900",
      "lg:text-2xl",
    ],

    featureDesc: "text-sm leading-6 text-slate-600",

    bulletList: "flex flex-col gap-3 mt-2",

    bulletItem: "flex items-start gap-2.5 text-sm leading-6 text-slate-700",

    checkIcon: "mt-0.5 shrink-0 text-blue-500",

    outerWrapper: [
      "w-full container mx-auto",
      "flex flex-col gap-24 bg-slate-50",
    ],

    phoneImage: "rounded-3xl h-auto",
  },
});

function FeatureBlock({
  feature,
  styles: s,
}: {
  feature: Feature;
  styles: ReturnType<typeof styles>;
}) {
  return (
    <div className={s.featureContent()}>
      <h3 className={s.featureHeading()}>{feature.heading}</h3>
      <p className={s.featureDesc()}>{feature.description}</p>
      <ul className={s.bulletList()}>
        {feature.bullets.map((bullet) => (
          <li key={bullet} className={s.bulletItem()}>
            <CheckCircle2 size={18} className={s.checkIcon()} />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MobileFeaturesSection() {
  const s = styles();

  const {
    tickerWrapper,
    tickerTrack,
    tickerItem,
    tickerStar,
    tickerText,
    tickerBrand,
    tickerEmoji,
  } = tickerStyles();

  return (
    <div className={s.outerWrapper()}>
      <div className={tickerWrapper()}>
        <div className={tickerTrack()}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className={tickerItem()}>
              <Asterisk size={16} className={tickerStar()} />
              {item.type === "brand" ? (
                <span className={tickerBrand()}>{item.content}</span>
              ) : (
                <span className={tickerText()}>
                  {item.before}
                  <span className={tickerEmoji()}>{item.emoji}</span>
                  {item.after}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={s.section()}>
        <div className={s.row1()}>
          <div className={s.mainContent()}>
            <h2 className={s.mainHeading()}>Digital banking out-of-the-box</h2>
            <p className={s.mainDesc()}>
              N7 helps your financial institution improve the client experience,
              automate and optimise procedures.
            </p>
            <Button>REQUEST DEMO</Button>
            <CustomLink />
          </div>

          <div className={s.phoneCol()}>
            <Image
              src="/phone-screen1.jpg"
              alt="Digital banking app screen"
              width={260}
              height={520}
              className={s.phoneImage()}
            />
          </div>

          <FeatureBlock feature={complianceFeature} styles={s} />
        </div>

        <div className={s.row2()}>
          <FeatureBlock feature={legacyFeature} styles={s} />

          <div className={s.phoneCol()}>
            <Image
              src="/phone-screen2.jpg"
              alt="No legacy IT systems"
              width={260}
              height={520}
              className={s.phoneImage()}
            />
          </div>
        </div>

        <div className={s.row2()}>
          <div className={s.phoneCol()}>
            <Image
              src="/phone-screen3.jpg"
              alt="No traditional branches"
              width={260}
              height={520}
              className={s.phoneImage()}
            />
          </div>

          <FeatureBlock feature={branchFeature} styles={s} />
        </div>
      </div>
    </div>
  );
}
