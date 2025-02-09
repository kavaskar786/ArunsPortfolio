import { ProfileIcons } from "./common/ProfileIcons";
import linkedInCardImage from "../assets/images/LinkedInCardImage.png";
import dribbleCardImage from "../assets/images/DribbleCardImage.png";
import behanceCardImage from "../assets/images/BehanceCardImage.png";
import image2 from "../assets/icons/LinkedInIcon.svg";
import { CardDataType } from "./utils/types";
import { CardComps } from "./common/CardComps";
import { Carousel, CarouselContent } from "./ui/carousel";

export const MySocials = () => {
  const cardData: CardDataType[] = [
    {
      image: linkedInCardImage,
      title: "Linked In",
      tags: ["UI/UX", "Motion graphic design"],
      buttonText: "Connect",
      className: "bg-[#008CC9] text-white",
      buttonLink: "https://www.linkedin.com/in/velusamy-s-090149283/",
    },
    {
      image: dribbleCardImage,
      title: "Optical Industry",
      tags: ["SaaS", "E-commerce", "WebSite", "Mobile Application"],
      buttonText: "Follow",
      className: "bg-[#F4427E] text-white",
      buttonLink: "https://dribbble.com/jnwick1807",
    },
    {
      image: behanceCardImage,
      title: "Optical Industry",
      tags: ["SaaS", "E-commerce", "WebSite", "Mobile Application"],
      buttonText: "Follow",
      className: "bg-[#004BD0] text-white",
      buttonLink: "https://www.behance.net/velusamy2000",
    },
  ];
  return (
    <div className="mb-14 ml-2 flex flex-col justify-start gap-4 md:ml-0">
      <div className="flex items-center gap-2">
        <ProfileIcons logo={image2} alt="link img need to here" link="" />
        <h1 className="text-xl font-semibold text-foreground">My Socials</h1>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-[95vw] md:ml-0 md:max-w-[100%]"
      >
        <CarouselContent className="ml-1 flex items-center justify-start gap-4">
          {cardData.map((card, index) => (
            <div key={index}>
              <CardComps cardData={card} isWhiteBgButton />
            </div>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
