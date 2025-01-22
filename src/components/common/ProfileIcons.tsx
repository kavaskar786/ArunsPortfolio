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
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-primary">
        <img src={logo} alt={alt} className="h-5 w-5" />
      </div>
    </a>
  );
};
