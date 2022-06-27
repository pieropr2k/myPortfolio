import SocialMediaIcon from '../../molecules/SocialMediaIcon/SocialMediaIcon'
import './SocialMediaBar.css'

const SocialMedia = [
  { name: "Twitter", link: "https://twitter.com/ppr2k" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/piero-pilco-reynoso-585848128/" },
  { name: "Github", link: "https://github.com/pieropr2k" },
  { name: "Youtube", link: "https://www.youtube.com/channel/UCzS8zk0tj_-KAi7ljZZ85cw" }
]

const SocialMediaBar = () => {
  return (
    <div className="hidden md:flex container-icons fixed top-0 left-10 flex-col">
      {SocialMedia.map(el => <SocialMediaIcon key={el.name} name={el.name} link={el.link}/>)}
      <div className="line bg-gray-800 dark:bg-gray-300"></div>
    </div>
  )
}

export default SocialMediaBar