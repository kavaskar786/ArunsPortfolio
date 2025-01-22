import { CardComps } from "../common/CardComps";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { CardDataType } from "../utils/types";
import image from "../../assets/images/HeroImageCard.png";
import { Card, CardContent } from "../ui/card";

export const CarouselComp = () => {
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
    <div>
      <Carousel className="w-full max-w-sm">
        <CarouselContent className="-ml-1">
          {cardData.map((card, index) => (
            <CarouselItem
              key={index}
              className="h-[41.5vh] w-[32.5vh] overflow-hidden rounded-3xl bg-white pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <span className="text-2xl font-semibold">
                      <div key={index}>
                        <CardComps cardData={card} />
                      </div>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white" />
        <CarouselNext className="text-white" />
      </Carousel>
    </div>
  );
};
