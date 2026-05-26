import Image from "next/image";
import { tv } from "tailwind-variants";

const hero = tv({
    slots: {
        section: `
      grid grid-cols-1 items-center justify-between
       w-full 
    lg:grid-cols-2
    `,

        leftContent: `
      flex max-w-3xl flex-col
      
    `,

        heading: `
      text-5xl font-medium 
      text-white
      md:text-6xl
      lg:text-7xl
    `,

        description: `
      mt-8 max-w-xl
      text-lg leading-8
      text-zinc-400
    `,

        buttonGroup: `
      mt-12 flex flex-col gap-5
      sm:flex-row
    `,

        primaryButton: `
      rounded-2xl bg-blue-600
      px-12 py-5
      text-sm font-medium uppercase
      text-white transition-colors
      hover:bg-white hover:text-blue-600
    `,

        secondaryButton: `
      rounded-2xl border border-white
      px-12 py-5
      text-sm font-medium uppercase
      text-white transition-colors
      hover:bg-white hover:text-black
    `,

        imageWrapper: `
      relative flex items-center justify-center
    `,

        glow: `
      absolute h-full w-full
      rounded-full bg-blue-700
      opacity-20 blur-3xl
    `,

        image: `
      relative rounded-[3rem]
      object-cover
    `,
    },
});

export default function HeroSection() {
    const {
        section,
        leftContent,
        heading,
        description,
        buttonGroup,
        primaryButton,
        secondaryButton,
        imageWrapper,
        glow,
        image,
    } = hero();

    return (
        <div className="container">
            <section className={section()}>

                <div className={leftContent()}>
                    <h2 className={heading()}>
                        The new foundation
                        of modern banking
                    </h2>

                    <p className={description()}>
                        We drive innovation and growth, provide seamless
                        customer experience and operational excellence
                    </p>

                    <div className={buttonGroup()}>
                        <button className={primaryButton()}>
                            REQUEST DEMO
                        </button>

                        <button className={secondaryButton()}>
                            CONTACT US
                        </button>
                    </div>
                </div>

                <div className={imageWrapper()}>
                    <div className={glow()} />

                    <Image
                        src="/heroImage.jpg"
                        alt="Hero Image"
                        width={400}
                        height={400}
                        className={image()}
                        priority
                    />
                </div>
            </section>
            <section className="pt-2.5">
                <h2>Trusted By</h2>
                <ul className="flex gap-4 list-disc ">
                    <li className="ml-1 text-sm text-slate-500">SHELLS</li>
                    <li className="ml-1 text-sm text-slate-500">SmartFinder</li>
                    <li className="ml-1 text-sm text-slate-500">Zoomerr</li>
                    <li className="ml-1 text-sm text-slate-500">ArtVenue</li>
                    <li className="ml-1 text-sm text-slate-500">Kontrastr</li>
                    <li className="ml-1 text-sm text-slate-500">wavesmarathon</li>
                </ul>
            </section>
        </div>
    );
}