"use client";

import React from "react";
import MobileMenu from "../mobile-menu/mobile-menu";
import { BaseButton } from "@/shared/ui";
import { Menu } from "lucide-react";

export default function MenuButton() {
  return (
    // <MobileMenu>
      <BaseButton variant='ghost' size='icon' className='flex-shrink-0 ml-2.5'>
        <Menu className='h-7 w-7' />
      </BaseButton>
    // </MobileMenu>
  );
}
