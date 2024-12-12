"use client"
import Link from 'next/link';
import { usePathname } from "next/navigation";

const CompanyLinksSidebar = () => {
    const pathname = usePathname();
    const footerLinks = [
        {
          label: "About Us",
          path: "/about-us",
        },
        {
          label: "Advertise with Us",
          path: "/advertise-with-us",
        },
        {
          label: "Terms of Service",
          path: "/terms-of-service",
        },
        {
          label: "Privacy Policy",
          path: "/privacy-policy",
        },
      ];
    return (
        <div className="flex flex-col gap-3 bg-primary-70 p-4 rounded-xl w-full lg:w-[30%] h-fit">
        {footerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={` font-medium text-xl font-Inter rounded-lg leading-6 p-4  ${pathname === link.path ? "bg-primary-10 text-white" : "bg-primary-90 text-neutral-5"}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
};

export default CompanyLinksSidebar;