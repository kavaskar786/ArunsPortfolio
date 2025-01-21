export const ProfileIcons = ({
  logo,
  alt,
  link,
}: {
  logo: string;
  alt?: string;
  link: string;
}) => {
  return (
    <a href={link}>
      <div className=" flex items-center justify-center text-primary bg-foreground h-10 w-10 rounded-full">
        <img src={logo} alt={alt} className="" />
      </div>
    </a>
  );
};
