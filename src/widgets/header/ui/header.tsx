import React from "react";
import Link from "next/link";
import { Logo } from "@/shared/ui";
import GoBackButton from "./go-back-button/go-back-button";
import SignInButton from "./signin-button/signin-button";
import ChoosePsychotherapistButton from "./choose-psychotherapist-button/choose-psychotherapist-button";
import MobileMenu from "./mobile-menu/mobile-menu";

interface Props {
  simplified?: boolean;
}

export default function Header({ simplified }: Props) {
  return (
    <header className='bg-white border-b border-solid border-laurel'>
      <div className='container'>
        <div className='min-h-20 sm:min-h-[100px] flex items-center'>
          <div className='flex-shrink-0'>
            <Logo responsive />
          </div>
          <div className='flex-grow flex justify-end items-center'>
            {simplified ? (
              <GoBackButton />
            ) : (
              <>
                <div className='items-center hidden lg:flex'>
                  <nav>
                    <ul className='flex flex-col items-center text-sm lg:flex-row'>
                      <li>
                        <Link href='/about' className='px-5 py-4'>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href='our-specialists' className='px-5 py-4'>
                          Our Experts
                        </Link>
                      </li>
                      <li>
                        <Link href='for-specialists' className='px-5 py-4'>
                          For Specialists
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <div className='flex flex-col items-center gap-x-2.5 lg:flex-row lg:ml-16'>
                    <SignInButton />
                    <ChoosePsychotherapistButton />
                  </div>
                </div>
                <div className='flex items-center gap-x-2.5 lg:hidden'>
                  <SignInButton />
                  <MobileMenu />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
