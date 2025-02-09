export const ProfileIcons = ({
  logo,
  alt,
  link,
  isBg,
}: {
  logo: string;
  alt?: string;
  link: string;
  isBg?: boolean;
}) => {
  return (
    <a href={link}>
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${isBg && "bg-foreground text-primary"}`}
      >
        <img
          src={logo}
          alt={alt}
          className={`h-5 w-5 ${!isBg && "h-[40px] w-[40px]"}`}
        />
      </div>
    </a>
  );
};
