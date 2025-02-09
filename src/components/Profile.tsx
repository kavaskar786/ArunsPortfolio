import profileImage from "../assets/images/image.png";
import linkedInIcon from "../assets/icons/LinkedInIcon.svg";
import dribbleIcon from "../assets/icons/DribbleIcon.svg";
import behanceIcon from "../assets/icons/BehanceIcon.svg";
import { ProfileIcons } from "./common/ProfileIcons";

export const Profile = () => {
  const profileIconContent = [
    {
      logo: linkedInIcon,
      alt: "LinkedIn Logo",
      link: "https://www.linkedin.com/in/velusamy-s-090149283/",
    },
    {
      logo: dribbleIcon,
      alt: "Dribble Logo",
      link: "https://dribbble.com/jnwick1807",
    },
    {
      logo: behanceIcon,
      alt: "Behance Logo",
      link: "https://www.behance.net/velusamy2000",
    },
  ];
  return (
    <div className="mt-14 flex flex-col items-center justify-center gap-2 md:items-start md:justify-start">
      <img
        src={profileImage}
        alt="Profile Image"
        className="h-[120px] w-[120px] rounded-full"
      />
      <h1 className="text-[2rem] text-foreground">Velusamy S</h1>
      <p className="text-foreground">UI/UX DESIGNER</p>
      <div className="mt-2 flex items-center gap-2">
        {profileIconContent.map(({ logo, alt, link }, index) => (
          <div key={index}>
            <ProfileIcons logo={logo} alt={alt} link={link} isBg />
          </div>
        ))}
      </div>
    </div>
  );
};
