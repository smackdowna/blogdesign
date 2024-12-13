import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./footer.constants";

const Footer = () => {
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
    <Container>
      <div className="border-t border-neutral-70 pt-8 pb-10 font-Inter flex flex-col gap-4 mt-[50px]">
        {/* <div className="flex flex-col lg:flex-row gap-0 md:gap-4 justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 justify-between">
            <p className="text-neutral-90 font-medium leading-6">
              All Rights Reserved
            </p>
            <div className="flex lg:hidden items-center gap-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.path}>
                  <Image src={link.icon} alt="blog-logo" className="size-8" />
                </Link>
              ))}
            </div>
            <div className="flex md:hidden flex-col md:flex-row items-start md:items-center gap-2 md:gap-7">
              {footerLinks.map((link, index) => (
                <p
                  key={index}
                  className="text-neutral-25 font-semibold leading-6"
                >
                  {link.label}
                </p>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-7">
            {footerLinks.map((link, index) => (
              <p
                key={index}
                className="text-neutral-20 font-semibold leading-6"
              >
                {link.label}
              </p>
            ))}
          </div>
        </div> */}

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-0 justify-between">
          <div className="flex flex-wrap items-center gap-5">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-neutral-5 font-medium leading-6 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.path}>
                <Image src={link.icon} alt="blog-logo" className="size-8" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
