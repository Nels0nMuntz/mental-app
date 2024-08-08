import React, { ElementType, PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const typography = cva("font-bold", {
  variants: {
    type: {
      heading1: ["text-6xl"],
      heading2: ["text-5xl"],
      heading3: ["text-[2.5rem]"],
      heading4: ["text-2xl"],
      heading5: ["text-lg"],
      heading6: ["text-base font-normal"],
      body1: ["text-base font-normal"],
      body2: ["text-sm font-normal"],
    },
  },
  compoundVariants: [{ type: "body2" }],
  defaultVariants: {
    type: "body2",
  },
});

interface Props extends PropsWithChildren, VariantProps<typeof typography> {
  component?: ElementType;
  className?: string;
}

export default function Typography({ type, component, className, children }: Props) {
  const Component = component || "p";
  return <Component className={cn(typography({ type }), className)}>{children}</Component>;
}
