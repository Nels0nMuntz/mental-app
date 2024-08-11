import { Header } from "@/widgets/header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header variant='private' />
      {children}
    </>
  );
}
