import Image from "next/image";
import { tv } from "tailwind-variants";

const hero = tv({
    slots: {
        section: `
      grid grid-cols-1 items-center justify-between
       w-full px-4 lg:px-16
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
      hover:bg-blue-700
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
        <section className={section()}>

            {/* Left Content */}
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

            {/* Right Image */}
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
    );
}