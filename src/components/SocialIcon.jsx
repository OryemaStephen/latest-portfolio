import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLink,
  FaSquareXTwitter,
  FaRegFilePdf,
} from "react-icons/fa6";

const icons = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaSquareXTwitter,
  cv: FaRegFilePdf,
};

const SocialIcon = ({ name, className = "" }) => {
  const Icon = icons[name] ?? FaLink;
  return <Icon aria-hidden="true" className={className} />;
};

export default SocialIcon;
