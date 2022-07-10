import './index.css';

const PortfolioButton = ({title, classDiv = '', url}) => {
  return (
    <a className={`border-4 py-1.5 px-3 rounded hover:underline text-sky-500 border-sky-500 dark:text-green-400 dark:border-green-400 ${classDiv}`} href={url ? url : "mailto:piero.pilco.js@gmail.com?subject=Hi%20Piero%2C%20I%20wanna%20work%20with%20you"} role="button">{title}</a>
  );
}

export default PortfolioButton;