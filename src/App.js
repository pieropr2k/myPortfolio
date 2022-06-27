import './App.css';
import Navbar from './components/Navbar';
import SocialMediaBar from './components/UI/organisms/SocialMediaBar/SocialMediaBar';
import PortfolioContainer from './components/UI/organisms/PorftolioContainer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <SocialMediaBar/>
        <PortfolioContainer/>
      </div>
    </>

  );
}

export default App;
