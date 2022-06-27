import './index.css';
import SocialMediaLogo from '../../atoms/SocialMediaLogo';

const ServiceInfo = (props) => {
  const { serviceName } = props;
  return (
    <div className='flex flex-col my-8 mx-8'>
      <SocialMediaLogo socialMediaName={serviceName} classDiv={'text-4xl'}/>
      <h3 className='self-center mt-2 text-lg font-semibold'>{serviceName}</h3>
      <p className='self-center mt-2'>{props.children}</p>
    </div>
  );
}

export default ServiceInfo;