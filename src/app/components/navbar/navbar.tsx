/** @format */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      label: "Início",
      link: "/"
    },
    {
      label: "Lojas",
      link: "/lojas"
    },
    {
      label: "Produtos",
      link: "/produtos"
    },
    {
      label: "Nossa história",
      link: "/historia"
    },
    {
      label: "Sobre nós",
      link: "/sobre"
    },
  ];

  return (
    <header className="flex justify-center">
      <nav className="flex container fixed mx-auto bg-destaque rounded-none 
      sm:rounded-b-xl shadow-2xl z-50 justify-between sm:px-14 px-4 items-center py-1">
        {/* Logo para Desktop */}
        <Link href={"/"} className="flex justify-start items-center text-3xl gap-2">
          <Image src="./logo.png" alt="logo" className="w-14 h-14 mb-5 block" />
          <h1 className="sm:flex hidden">King Coffee</h1>
        </Link>
        {/* Links de Navegação e Ícone do Menu para Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="text-texto font-medium duration-500 hover:text-primaria"
              href={d.link}
            >
              {d.label}
            </Link>
          ))}
          <section className="flex items-center gap-4">
            {/* cart icon */}
            <AiOutlineShoppingCart className="text-2xl" />
            {/* avtar img */}
          </section>
        </div>

        {/* Logo e Ícone do Menu para Mobile */}
        <section className="lg:hidden flex items-center gap-4 ml-auto">
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer"
          />
        </section>

        {/* Sidebar do Menu Mobile */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-texto bg-destaque justify-between 
          flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <div className="flex flex-col gap-8">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-0 mb-8 text-3xl cursor-pointer self-end"
              />

              {navlinks.map((d, i) => (
                <Link key={i} className="font-bold" href={d.link}>
                  {d.label}

                </Link>

              ))}
            </div>
            <div className="">
              <section className="flex flex-col items-start mb-10 gap-10">
                {/* cart icon */}
                <AiOutlineShoppingCart className="text-3xl" />
                {/* avtar img */}
              </section>
              <h1 className="mb-5 text-xl">redes sociais:</h1>
              <div className="flex mb-20 text-3xl justify-between">
                <RiTwitterXFill className="hover:text-slate-700 duration-500" />
                <FaInstagram className="hover:text-fuchsia-500 duration-500" />
                <FaFacebookF className="hover:text-blue-500 duration-500" />
              </div>
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
}
