"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenu,
  Link,
  Button,
} from "@nextui-org/react";

import { useState } from "react";
import { TheraLogo } from "./TheraLogo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // items do dropdown (menu aberto no mobile)
  const menuItems = ["Quem nós somos", "Linguagens", "Ferramentas", "API"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered isBlurred={false}
    >
      <NavbarContent>
        <NavbarBrand>
          <TheraLogo size={42} />
          <p className="text-2xl">Thera Academy</p>
        </NavbarBrand>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-gray-800"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
