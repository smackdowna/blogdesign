import { ReactNode } from "react";
import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import "../../app/globals.css";
import Container from "@/Components/Container/Container";
import CompanyLinksSidebar from './../../Components/CompanyLinkPages/CompanyLinksSidebar/CompanyLinksSidebar';
import CompanyLinkHero from "@/Components/CompanyLinkPages/CompanyLinksSidebar/CompanyLinkHero/CompanyLinkHero";

const CompanyPagesLayout = ({ children }: { children: ReactNode }) => {
 
  return (
    <div>
      <Navbar />
        <CompanyLinkHero/>
      <Container>
      <div className="flex flex-col lg:flex-row gap-14 mt-8 lg:mt-[50px]">
      <CompanyLinksSidebar/>
      <div className="w-full lg:w-[70%]">{children}

      </div>
      </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CompanyPagesLayout;
