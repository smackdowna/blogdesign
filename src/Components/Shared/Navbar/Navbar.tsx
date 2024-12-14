"use client";
import { ICONS } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "./navbar.constants";
import "./nav.css";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useEffect, useState } from "react";
import Container from "@/Components/Container/Container";

type TSubCategory = {
  _id: string;
  name: string;
};

type TCategory = {
  _id: string;
  name: string;
  description: string[];
  subCategories: TSubCategory[];
  thumbnail: {
    fileId: string;
    name: string;
    url: string;
    thumbnailUrl: string;
    _id: string;
  };
};

const Navbar = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredCategories, setFilteredCategories] = useState<TCategory[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://blogbackend-theta.vercel.app/api/v1/category"
        );
        const data = await response.json();
        setCategories(data);
        setFilteredCategories(data); // Initialize filtered categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Update filtered categories when search query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      setFilteredCategories(
        categories.filter((category) =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredCategories(categories);
    }
  }, [searchQuery, categories]);

  return (
    <div
      className={`${
        pathname === "/"
          ? "bg-primary-10 text-white"
          : "bg-white text-primary-10"
      } w-full font-Inter`}
    >
      {/*  px-4 md:px-8 xl:px-[150px] */}
      <Container>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-6">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex items-center gap-2 font-bold text-xl leading-[32px]"
        >
          <Image src={ICONS.logo} alt="blog-logo" className="size-20" />
          {/* Blog */}
        </Link>

        {/* Navlinks */}
        <div className="hidden xl:flex items-center gap-4">
          {navlinks.map(({ label, path }, index) => (
            <Link
              key={index}
              href={path}
              className={`${
                pathname === "/" ? "text-white" : "text-black"
              } font-medium leading-6`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-[21px] relative">
          <div className="relative input-nav-flex">
            <Image
              src={pathname === "/" ? ICONS.searchIcon : ICONS.searchIconBlue}
              alt="search-icon"
              className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search"
              className={`${
                pathname === "/"
                  ? "text-white bg-primary-30"
                  : "text-black bg-primary-40"
              } pl-11 max-w-[185px] pr-4 py-2 rounded-lg shadow-custom focus:outline-none`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            />
            {showDropdown && (
              <div className="absolute left-0 top-full w-full bg-white rounded-lg shadow-lg mt-2 z-10 max-h-60 overflow-y-auto">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <Link
                      key={category._id}
                      href={`/category/${category.name}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category.name}
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-2 text-sm text-gray-500">
                    No category found
                  </p>
                )}
              </div>
            )}
          </div>
          <HamburgerMenu />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Navbar;
