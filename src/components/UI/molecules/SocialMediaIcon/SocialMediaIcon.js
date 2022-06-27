import './SocialMediaIcon.css'
import SocialMediaLogo from "../../atoms/SocialMediaLogo";

const SocialMediaIcon = ({name, link}) => {
  return (
    <a className="social-media my-4 text-gray-800 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
      href={link}
      target="_blank"
      rel="noopener noreferrer">
      <SocialMediaLogo key={name} socialMediaName={name}/>
    </a>
  )
}

export default SocialMediaIcon