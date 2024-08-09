import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib";
import { Button as BaseButton } from "../primitives/ui/button";

const variants = cva("w-full px-6 py-4 rounded-xl font-bold transition-colors duration-150", {
  variants: {
    variant: {
      primary: "bg-green text-white focus-visible:bg-green-dark hover:bg-green-dark",
      secondary: "bg-coral text-white focus-visible:bg-coral-dark hover:bg-coral-dark",
      outline:
        "bg-white text-green border border-solid border-green focus-visible:shadow-outline-button hover:shadow-outline-button active:shadow-none active:bg-green active:text-white",
    },
  },
  compoundVariants: [{ variant: "primary" }],
  defaultVariants: { variant: "primary" },
});

interface Props extends PropsWithChildren, VariantProps<typeof variants> {
  type?: HTMLButtonElement["type"];
  link?: boolean;
  href?: string;
  className?: string;
}

export default function Button({ variant, type = "button", link, href = "", className, children }: Props) {
  const classNames = cn(variants({ variant }), className);
  if (link) {
    return (
      <BaseButton asChild className={classNames}>
        <Link href={href}>{children}</Link>
      </BaseButton>
    );
  }

  return (
    <BaseButton type={type} className={classNames}>
      {children}
    </BaseButton>
  );
}
