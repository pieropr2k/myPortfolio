import { FaLinkedin, FaYoutube, FaGithub, FaTwitter, FaDatabase } from "react-icons/fa";
import { BsCurrencyBitcoin, BsTranslate, BsBarChartLineFill, BsCodeSlash, BsGlobe, BsBricks, BsPencilFill, BsFillLightbulbFill } from "react-icons/bs";

const SocialMediaLogo = ({ socialMediaName, classDiv = '' }) => {
  switch (socialMediaName) {
    case 'Linkedin':
      return <FaLinkedin className={'self-center ' + classDiv} />
    case 'Twitter':
      return <FaTwitter className={'self-center ' + classDiv} />
    case 'Github':
      return <FaGithub className={'self-center ' + classDiv} />
    case 'Youtube':
      return <FaYoutube className={'self-center ' + classDiv} />
    case 'Backend':
      return <FaDatabase className={'self-center ' + classDiv} />
    case 'Internet':
      return <BsGlobe className={'self-center ' + classDiv} />
    case 'Frontend':
      return <BsBricks className={'self-center ' + classDiv} />
    case 'Extra':
      return <BsCodeSlash className={'self-center ' + classDiv} />
    case 'Bitcoin':
    case 'Finance':
    case 'Finanzas':
      return <BsCurrencyBitcoin className={'self-center ' + classDiv} />
    case 'Translate':
    case 'English':
    case 'Inglés':
      return <BsTranslate className={'self-center ' + classDiv} />
    case 'Math':
    case 'Matemática':
      return <BsBarChartLineFill className={'self-center ' + classDiv} />
    case 'Programming':
    case 'Programación':
      return <BsCodeSlash className={'self-center ' + classDiv} />
    case 'Teaching':
    case 'Pedagogía':
      return <BsFillLightbulbFill className={'self-center ' + classDiv} />
    case 'Design':
    case 'Diseño':
      return <BsPencilFill className={'self-center ' + classDiv} />
    default: return <FaLinkedin />
  }
}

export default SocialMediaLogo