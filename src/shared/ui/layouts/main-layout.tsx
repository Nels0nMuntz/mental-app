import React, { PropsWithChildren } from "react";
import { Header } from "@/widgets/header";

interface Props extends PropsWithChildren {
  simplified?: boolean;
}

export default function MainLayout({ simplified, children }: Props) {
  return (
    <>
      <Header simplified={simplified} />
      <main>{children}</main>
    </>
  );
}
