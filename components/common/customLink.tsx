import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tv } from "tailwind-variants";

const styles = tv({
  slots: {
    link: [
      "relative inline-flex self-start items-center gap-1.5",
      "pb-1 group",
      "text-xs font-medium uppercase",
      "text-brand",
    ],
    underline: [
      "absolute bottom-0 left-0",
      "h-px w-1/2 bg-brand",
      "transition-all duration-300 ease-in-out",
      "group-hover:w-full",
    ],
  },
});

export default function CustomLink({
  href = "#",
  text = "LEARN MORE",
  className,
}: {
  href?: string;
  text?: string;
  className?: string;
}) {
  const { link, underline } = styles();

  return (
    <Link href={href} className={`${link()} ${className}`}>
      {text}
      <ArrowRight size={14} />
      <span className={underline()} />
    </Link>
  );
}
