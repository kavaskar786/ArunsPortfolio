import { ProfileIcons } from "./common/ProfileIcons";
import linkedInImage from "../assets/images/LinkedInCardImage.png";
import image2 from "../assets/icons/LinkedInIcon.svg";
import { CardDataType } from "./utils/types";
import { CardComps } from "./common/CardComps";

export const MySocials = () => {
  const cardData: CardDataType[] = [
    {
      image: linkedInImage,
      title: "Linked In",
      tags: ["SaaS", "E-commerce", "WebSite", "Mobile Application"],
      buttonText: "Link 🚀",
      className: "",
      buttonLink: "",
    },
    {
      image: linkedInImage,
      title: "Optical Industry",
      tags: ["SaaS", "E-commerce", "WebSite", "Mobile Application"],
      buttonText: "Link 🚀",
      className: "",
      buttonLink: "",
    },
    {
      image: linkedInImage,
      title: "Optical Industry",
      tags: ["SaaS", "E-commerce", "WebSite", "Mobile Application"],
      buttonText: "Link 🚀",
      className: "",
      buttonLink: "",
    },
  ];
  return (
    <div className="flex flex-col justify-start gap-4">
      <div className="flex items-center gap-2">
        <ProfileIcons logo={image2} alt="link img need to here" link="" />
        <h1 className="text-xl font-semibold text-foreground">My Socials</h1>
      </div>
      <div className="flex items-center justify-start gap-4">
        {cardData.map((card, index) => (
          <div key={index}>
            <CardComps cardData={card} />
          </div>
        ))}
      </div>
    </div>
  );
};
