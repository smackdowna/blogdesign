const TermsOfService = () => {
  const termsContent = [
    {
      heading: "Welcome to Wizsip!",
      description: [
        "These terms and conditions outline the rules and regulations for the use of Wizsip's Website, located at.",
        "By accessing this website, we assume you accept these terms and conditions. Do not continue to use Wizsip if you do not agree to take all of the terms and conditions stated on this page.",
      ],
    },
    {
      heading: "Cookies",
      description: [
        "The website uses cookies to help personalize your online experience. By accessing Wizsip, you agree to use the required cookies.",
        "A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.",
        "We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional cookies. There are some required cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.",
      ],
    },
    {
      heading: "License",
      description: [
        "Unless otherwise stated, Wizsip and/or its licensors own the intellectual property rights for all material on Wizsip. All intellectual property rights are reserved. You may access this from Wizsip for your own personal use subject to restrictions set in these terms and conditions.",
      ],
    },
    {
      heading: "You must not :",
      description: [
        "Copy or republish material from Wizsip",
        "Sell, rent, or sub-license material from Wizsip",
        "Reproduce, duplicate or copy material from Wizsip",
        "Redistribute content from Wizsip",
        "This Agreement shall commence on the date hereof.",
        "Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website.",
        "Wizsip does not filter, edit, publish or review comments before their presence on the website.",
        "Comments do not reflect the views and opinions of Wizsip, its agents, and/or affiliates.",
        "Comments reflect the views and opinions of the person who posts their views and opinions.",
        "To the extent permitted by applicable laws, Wizsip shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.",
        "Wizsip reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or cause a breach of these Terms and Conditions.",
      ],
    },
    {
      heading: "You warrant and represent that:",
      description: [
        "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so.",
        "The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party.",
        "The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy.",
        "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
        "You hereby grant Wizsip non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.",
      ],
    },
    {
      heading: "Hyperlinking to our Content",
      description: [
        "The following organizations may link to our website without prior written approval:",
        "Government agencies",
        "Search engines",
        "News organizations",
        "Online directory distributors may link to our website in the same manner as they hyperlink to the Websites of other listed businesses;",
        "System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.",
        "These organizations may link to our home page, to publications, or to other Website information as long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.",
        "We may consider and approve other link requests from the following types of organizations:",
        "commonly-known consumer and/or business information sources;",
        "dot.com community sites;",
        "associations or other groups representing charities;",
        "online directory distributors;",
        "internet portals;",
        "accounting, law, and consulting firms; and",
        "educational institutions and trade associations.",
        "We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates for the absence of Wizsip; and (d) the link is in the context of general resource information.",
        "These organizations may link to our home page as long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.",
        "If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Wizsip. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.",
      ],
    },
    {
      heading:
        "Approved organizations may hyperlink to our website as follows:",
      description: [
        "By use of our corporate name;",
        "By use of the uniform resource locator being linked to;",
        "Using any other description of our website being linked to that makes sense within the context and format of content on the linking party's site.",
        "No use of Wizsip's logo or other artwork will be allowed for linking absent a trademark license agreement.",
      ],
    },
    {
      heading: "Content Liability",
      description: [
        "We shall not be held responsible for any content that appears on your website. You agree to protect and defend us against all claims that are raised on your website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.",
      ],
    },
    {
      heading: "Reservation of Rights:",
      description: [
        "We reserve the right to request that you remove all links or any particular link to our website. You agree to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our website, you agree to be bound to and follow these linking terms and conditions.",
      ],
    },
    {
      heading: "Removal of links from our website:",
      description: [
        "If you find any link on our website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obliged to do so or to respond to you directly.",
        "We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.",
      ],
    },
    {
      heading: "Disclaimer",
      description: [
        "To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.",
        "Nothing in this disclaimer will:",
        "limit or exclude our or your liability for death or personal injury;",
        "limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
        "limit any of our or your liabilities in any way that is not permitted under applicable law;",
        "exclude any of our or your liabilities that may not be excluded under applicable law.",
        "The limitations and prohibitions of liability set forth in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.",
        "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.",
      ],
    },
  ];
  return (
    <div className="">
      {termsContent.map((section, index) => (
        <div key={index} className="mb-8">
        {section.heading && (
          <h2 className="text-neutral-10 font-Inter text-xl md:text-[26px] font-bold mb-4">
            {section.heading}
          </h2>
        )}
        <div className="flex flex-col gap-3">
          {section.description.map((desc, index) => (
            <p key={index} className="text-neutral-500 font-medium leading-6">
              {desc}
            </p>
          ))}
        </div>
      </div>
        
      ))}
    </div>
  );
};

export default TermsOfService;
