"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const CompanyLinkHero = () => {
  const pathname = usePathname();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (pathname === "/about-us") {
      setTitle("About Us");
    } else if (pathname === "/advertise-with-us") {
      setTitle("Advertise With Us");
    } else if (pathname === "/terms-of-service") {
      setTitle("Terms of Service");
    } else {
      setTitle("Privacy Policy");
    }
  }, [pathname]);

  return (
    <div className="flex items-center justify-center h-[200px] lg:h-[300px] bg-gradient-to-r from-blue-50 to-blue-400 mt-4 md:mt-9 rounded-lg">
      <h1 className="text-neutral-10 font-Inter text-3xl md:text-[40px] xl:text-[56px] font-bold mb-4">
        {title}
      </h1>
    </div>
  );
};

export default CompanyLinkHero;
