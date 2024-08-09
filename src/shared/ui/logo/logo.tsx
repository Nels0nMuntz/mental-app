import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import logosm from "../../assets/logo-sm.svg";

interface Props {
  responsive?: boolean;
}

export default function Logo({ responsive }: Props) {
  return (
    <Link href='/'>
      {responsive ? (
        <>
          <Image className='hidden lg:block' src={logo} width={156} height={40} alt='logo' />
          <Image className='lg:hidden' src={logosm} width={64} height={46} alt='logo' />
        </>
      ) : (
        <Image src={logo} width={156} height={40} alt='logo' />
      )}
    </Link>
  );
}
