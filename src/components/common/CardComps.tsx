import { Button } from "../ui/button";
import { CardDataType } from "../utils/types";

export const CardComps = ({
  cardData: { className, image, title, tags, buttonText, buttonLink },
  isWhiteBgButton,
}: {
  cardData: CardDataType;
  isWhiteBgButton?: boolean;
}) => {
  console.log(className);
  return (
    <div
      className={`flex h-[43.5vh] w-[32.5vh] flex-col items-center overflow-hidden rounded-3xl md:h-[41.5vh] ${className ? className : "bg-white"} `}
    >
      <div className="m-2 overflow-hidden rounded-2xl">
        <img className="h-[20vh]" src={image} alt={title} />
      </div>
      <div className="ml-4">
        <h1 className="font-medium">{title}</h1>
        <div className="mt-2 h-[9vh]">
          <div className="flex w-[28vh] flex-wrap text-wrap text-sm">
            {typeof tags === "object" ? (
              tags.map((item, index) => <p key={index}>{"#" + item}</p>)
            ) : (
              <p>{tags}</p>
            )}
          </div>
        </div>
        <a href={buttonLink} target="_blank">
          <Button
            className={`-ml-2 flex items-center justify-center rounded-full ${isWhiteBgButton ? "bg-white" : "bg-background"} text-foreground hover:bg-accent`}
          >
            {
              <span
                className={`${isWhiteBgButton ? "text-black" : "text-white"}`}
              >
                {buttonText}
              </span>
            }
          </Button>
        </a>
      </div>
    </div>
  );
};
