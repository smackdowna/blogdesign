"use client";
import { ICONS } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "./navbar.constants";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname === "/" ? "bg-primary-10" : "bg-white"
      } w-full px-4 md:px-8 xl:px-[150px] font-Inter`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-6">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex items-center gap-2 text-white font-bold text-xl leading-[32px]"
        >
          <Image src={ICONS.logo} alt="blog-logo" className="size-10" />
          Blog
        </Link>

        {/* Navlinks */}
        <div className="hidden xl:flex items-center gap-4">
          {navlinks.map(({ label, path }, index) => (
            <Link
              key={index}
              href={path}
              className="text-white font-medium leading-6"
            >
              {label}
            </Link>
          ))}
        </div>

          <div className="flex items-center gap-[21px]">
          <Image 
    src={ICONS.searchIcon} 
    alt="search-icon" 
    className="size-6 cursor-pointer block md:hidden" 
  />
        <div className="relative hidden md:block">
  <Image 
    src={ICONS.searchIcon} 
    alt="search-icon" 
    className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2" 
  />
  <input 
    type="text" 
    placeholder="Search" 
    className="pl-11 max-w-[185px] pr-4 py-2 bg-primary-30 text-white rounded-lg shadow-custom focus:outline-none"
  />
</div>

<button className="bg-primary-40 rounded-lg px-4 py-2 text-primary-10 font-semibold leading-[22px]">
Subscirbe
</button>

<HamburgerMenu/>
</div>

      </div>
    </div>
  );
};

export default Navbar;
