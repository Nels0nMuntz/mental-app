"use client";

import { BaseButton } from "@/shared/ui";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/primitives/ui/sheet";
import { Menu } from "lucide-react";
import { PropsWithChildren } from "react";
import ChoosePsychotherapistButton from "../choose-psychotherapist-button/choose-psychotherapist-button";
import Link from "next/link";

interface Props extends PropsWithChildren {}

export default function MobileMenu({ children }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <BaseButton variant='ghost' size='icon' className='flex-shrink-0 ml-2.5'>
          <Menu className='h-7 w-7' />
        </BaseButton>
      </SheetTrigger>
      <SheetContent>
        {/* <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </SheetDescription>
        </SheetHeader> */}
        <div className='flex flex-col items-center gap-y-8 mt-8'>
          <nav>
            <ul className='flex flex-col items-center text-sm gap-y-4'>
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
          <ChoosePsychotherapistButton />
        </div>
      </SheetContent>
    </Sheet>
  );
}
