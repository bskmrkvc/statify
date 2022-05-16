import Hero from './Hero';
import '../home/HomeStyles.css';
import jokic from '../../assets/img/jokic-home.png';
import drose from '../../assets/img/drose-home.png';
import group from '../../assets/img/home-first2.png'

function Home() {
  return (
    <div className="App">
      <br/><br/><br/><br/><br/>
      <Hero/>
      <div className="home-first-section">
        <img src={group} alt="Group drawing" className="group-home"></img><br/><br/>
        <h2 className="first-section-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
      </div><br/><br/>
      <div className="home-second-section">
        <span><img src={drose} alt="Derrick Rose" className="drose-home"></img></span><br></br>
        <span><h2 className="second-section-right">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2></span>
      </div>
      <br/><br/>
      <div className="home-third-section">
        <span><h2 className="third-section-left">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2></span><br></br>
        <span><img src={jokic} alt="Nikola Jokic" className="jokic-home"></img></span>
      </div>
      <br/><br/><br/><br/>
    </div>
  );
}

export default Home;