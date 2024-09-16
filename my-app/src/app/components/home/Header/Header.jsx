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
  Input,
} from "@nextui-org/react";

import { useState } from "react";

import TheraLogo from "./TheraLogo";
import SearchIcon from "./SearchIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // items do dropdown (menu aberto no mobile)
  const menuItems = ["Quem nós somos", "Linguagens", "Ferramentas", "API"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered isBlurred={false}
      maxWidth={"2xl"}
      className="lg:px-20"
    >
      <NavbarContent justify="start" className="cursor-pointer">
        <NavbarBrand>
          <TheraLogo size={42} />
          <p className="text-2xl 2xl:ml-2">Thera Academy</p>
        </NavbarBrand>

        { /* Menu para mobile */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-gray-500 hover:text-black"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      { /* Navbar para desktop */}
      <NavbarContent className="hidden lg:flex gap-5 2xl:mr-[480px]" justify="center">
        <NavbarItem>
          <Link className="text-gray-500 hover:text-black" href="#">
            Quem nós somos
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-gray-500 hover:text-black" href="#">
            Linguagens
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-gray-500 hover:text-black" href="#">
            Ferramentas
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-gray-500 hover:text-black" href="#">
            API
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="items-center hidden lg:inline-flex " justify="end">
        <Input
          classNames={{
            base: "max-w-full lg:max-w-[10rem] xl:max-w-[16rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Faça a sua pesquisa..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
    </Navbar>
  );
}
