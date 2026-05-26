import { tv, type VariantProps } from "tailwind-variants";
import type { ButtonHTMLAttributes } from "react";

const button = tv({
  base: "rounded-2xl font-medium uppercase transition-colors text-xs",
  variants: {
    variant: {
      primary: [
        "bg-blue-600 text-white",
        "hover:bg-white hover:text-blue-600",
      ],
      outline: [
        "border border-white text-white",
        "hover:bg-white hover:text-blue-600",
      ],
      ghost: [
        "border border-white/20 w-full text-center",
        "text-white/60 tracking-widest",
        "hover:border-white/50 hover:bg-white hover:text-blue-600",
      ],
    },
    size: {
      sm: "px-8 py-3",
      md: "px-10 py-4",
      lg: "px-12 py-5 text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

type ButtonProps = VariantProps<typeof button> & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
