import React from "react";
import Link from "next/link";
import { UserRound } from "lucide-react";

export default function SignInButton() {
  return (
    <Link
      href='/sign-in'
      className='flex items-center gap-x-2 px-4 py-3 sm:px-5 sm:py-4 text-green text-sm font-bold rounded-xl bg-swamp lg:bg-transparent transition-all duration-150 focus-visible:bg-swamp focus-visible:shadow-signin-button hover:bg-swamp hover:shadow-signin-button active:shadow-none active:bg-green active:text-white flex-shrink-0'
    >
      <UserRound className='stroke-current' />
      <span>Sign in</span>
    </Link>
  );
}
