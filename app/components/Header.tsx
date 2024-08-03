"use client";
import logo from "@/public/assets/images/logoHeader.svg";
import Image from "next/image";
import Link from "next/link";
import hamburger from "@/public/assets/svgs/hamburger.svg";
import { useState } from "react";

function Header() {
  const [dropdown, setDropDown] = useState(false);
  return (
    <div className="bg-white px-4 md:px-8 lg:px-28 py-3 md:py-5">
      <div className=" flex justify-between items-center ">
        <div>
          <Link href="/">
            <Image src={logo} alt="bamibuildit" />
          </Link>
        </div>

        <div className="hidden md:block">
          <div className=" md:flex justify-between items-center gap-x-8">
            <div>
              <Link
                href="/"
                className=" text-bb-gray-900 font-medium text-base"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                href="/about"
                className=" text-bb-gray-900 font-medium text-base"
              >
                About us
              </Link>
            </div>
            <div>
              <Link
                href="/contact"
                className=" text-white font-medium text-base rounded-lg	bg-bb-primary-600 border-solid border-bb-primary-600 border py-3 px-5 shadow-1xl"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={hamburger}
          alt="hamburger"
          className="md:hidden cursor-pointer"
          onClick={() => setDropDown(!dropdown)}
        />
      </div>
      <div
        className={` md:hidden ${
          dropdown
            ? "max-h-[200px] overflow-visible"
            : "max-h-0 overflow-hidden"
        } transition-all`}
      >
        <div className=" ">
          <div className=" flex justify-center py-4">
            <Link
              href="/"
              className=" text-bb-gray-900 font-medium text-base w-full text-center"
            >
              Home
            </Link>
          </div>
          <div className=" flex justify-center py-4">
            <Link
              href="/about"
              className=" text-bb-gray-900 font-medium text-base w-full text-center"
            >
              About us
            </Link>
          </div>
          <div className=" flex justify-center">
            <Link href="/contact" className="  w-full">
              <div className=" text-white font-medium text-base rounded-lg	bg-bb-primary-600 border-solid border-bb-primary-600 border py-3 px-5 shadow-1xl w-fit mx-auto">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
