import React from "react";
import { Logo } from "@/shared/ui";
import MobileMenu from "../mobile-menu/mobile-menu";
import Navigation from "../navigation/navigation";

interface Props {
  variant: HeaderVariants;
  slots: {
    signin?: React.ReactNode;
    profile?: React.ReactNode;
    choosePsychotherapist?: React.ReactNode;
    goBack?: React.ReactNode;
    notifications?: React.ReactNode;
  };
}

export default function Layout({ variant, slots }: Props) {
  const renderAuthHeader = () => (
    <div className='flex-grow flex justify-end items-center'>
      {slots.goBack}
      <div className='flex items-center gap-x-2.5 lg:hidden'>
        {slots.signin}
        <MobileMenu />
      </div>
    </div>
  );
  const renderPublicHeader = () => (
    <div className='flex-grow flex justify-end items-center'>
      <div className='items-center hidden lg:flex'>
        <Navigation />
        <div className='flex flex-col items-center gap-x-2.5 lg:flex-row lg:ml-16'>
          {slots.signin}
          {slots.choosePsychotherapist}
        </div>
      </div>
      <div className='flex items-center gap-x-2.5 lg:hidden'>
        {slots.signin}
        <MobileMenu />
      </div>
    </div>
  );
  const renderPrivateHeader = () => (
    <div className='flex-grow flex justify-end items-center'>
      <div className='items-center hidden lg:flex'>
        <Navigation />
        <div className='flex flex-col items-center gap-x-2.5 lg:flex-row lg:ml-16'>
          {slots.profile}
        </div>
      </div>
      <div className='flex items-center gap-x-2.5 lg:hidden'>
        {slots.notifications}
        {slots.profile}
        <MobileMenu />
      </div>
    </div>
  );
  const renderHeader = () => {
    switch (variant) {
      case "auth":
        return renderAuthHeader();
      case "public":
        return renderPublicHeader();
      case "private":
        return renderPrivateHeader();
      default:
        return null;
    }
  };
  return (
    <header className='bg-white border-b border-solid border-laurel'>
      <div className='container'>
        <div className='min-h-20 sm:min-h-[100px] flex items-center'>
          <div className='flex-shrink-0'>
            <Logo responsive />
          </div>
          {renderHeader()}
        </div>
      </div>
    </header>
  );
}
