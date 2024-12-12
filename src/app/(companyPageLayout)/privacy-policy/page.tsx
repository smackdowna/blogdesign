const PrivacyPolicy = () => {
  const privacyPolicyContent = [
    {
      heading: "Wizsip website is a data controller of your personal data.",
      description: [
        "We have adopted this Privacy Policy, which determines how we are processing the information collected by wizsip, We collect information to provide better service to all our users and the information collected in wizsip are used depends on how you use our service and how you We manage your privacy controls.",
        "We take care of your personal data and undertake to guarantee its confidentiality and security.",
      ],
    },
    {
      heading: "Information we collect for our service:",
      description: [
        "When you visit the wizsip, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, which websites or search terms refer you to the Site, and how you interact with the Site. We refer to this automatically-collected information as “Device Information.” Moreover, we may collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.",
      ],
    },
    {
      heading: "Provide better service to all users?",
      description: [
        "Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.",
        "You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website's features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website's features. For example, you won't be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via < contact@wizsip.com>.",
      ],
    },
    {
      heading: "Your Rights:",
      description: [
        "If you are a European resident, you have the following rights related to your personal data:",
        "The right to be informed.",
        "The right of access.",
        "The right to rectification.",
        "The right to erasure.",
        "The right to restrict processing.",
        "The right to data portability.",
        "The right to object.",
        "Rights in relation to automated decision-making and profiling.",
        "If you would like to exercise this right, please contact us through the contact information below.",
        "Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.",
        "Additionally, please note that your information may be transferred outside of Europe, including Canada and the United States.",
      ],
    },
    {
      heading: "Links to other websites :",
      description: [
        "Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.",
      ],
    },
    {
      heading: "Information Security :",
      description: [
        "We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.",
      ],
    },
    {
      heading: "Legal disclosure :",
      description: [
        "We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.",
      ],
    },
    {
      heading: "Changes in Privacy policy",
      description: [
        "We used to review this Privacy Policy regularly and make sure that we process your information in ways that comply with it. We review and change this policy as per users rights, any changes on this policy will notify on the current page. Until then the same privacy policy will be applicable.",
      ],
    },
    {
      heading: "Contact Information :",
      description: [
        "If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to",
      ],
    },
  ];
  return (
    <div className="">
      {privacyPolicyContent.map((section, index) => (
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
      <a href="mailto:contact@wizsip.com" className="text-black leading-6 hover:underline font-bold">
             (contact@wizsip.com)
            </a>
    </div>
  );
};

export default PrivacyPolicy;
