import { CardComps } from "./common/CardComps";
import { CardDataType } from "./utils/types";
import image from "../assets/images/HeroImageCard.png";
import image2 from "../assets/icons/LinkedInIcon.svg";
import { ProfileIcons } from "./common/ProfileIcons";

export const DesignSolution = () => {
  const cardData: CardDataType[] = [
    {
      image: image,
      title: "Optical Industry",
      tags: ["SaaS", "E-commerce", "WebSite", "Mobile Application"],
      buttonText: "Link 🚀",
      className: "",
      buttonLink: "",
    },
    {
      image: image,
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
        <h1 className="text-xl font-semibold text-foreground">
          Design Solution
        </h1>
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
