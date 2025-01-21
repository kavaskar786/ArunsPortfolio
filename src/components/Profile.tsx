import profileImage from "../assets/images/ProfileImage.png";
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
    <div className="flex items-center justify-center gap-2 flex-col">
      <img
        src={profileImage}
        alt="Profile Image"
        className="rounded-full w-20 h-w-20"
      />
      <h1 className="text-[2rem] text-foreground">Velusamy S</h1>
      <p className="text-foreground">UI/UX DESIGNER</p>
      <div className="flex items-center justify-center gap-2 mt-2">
        {profileIconContent.map(({ logo, alt, link }, index) => (
          <div key={index}>
            <ProfileIcons logo={logo} alt={alt} link={link} />
          </div>
        ))}
      </div>
    </div>
  );
};
