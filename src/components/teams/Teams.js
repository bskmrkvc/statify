import './TeamsStyles.css'
import {Link} from 'react-router-dom'
import hawks from '../../assets/img/hawks.png';
import celtics from '../../assets/img/celtics.png';
import nets from '../../assets/img/nets.png';
import hornets from '../../assets/img/hornets.png';
import bulls from '../../assets/img/bulls.png';
import cavs from '../../assets/img/cavs.png';
import mavs from '../../assets/img/mavs.png';
import nuggets from '../../assets/img/nuggets.png';
import pistons from '../../assets/img/pistons.png';
import warriors from '../../assets/img/warriors.png';
import rockets from '../../assets/img/rockets.png';
import pacers from '../../assets/img/pacers.png';
import clippers from '../../assets/img/clippers.png';
import lakers from '../../assets/img/lakers.png';
import grizzlies from '../../assets/img/grizzlies.png';
import heat from '../../assets/img/heat.png';
import bucks from '../../assets/img/bucks.png';
import wolves from '../../assets/img/wolves.png';
import pelicans from '../../assets/img/pelicans.png';
import knicks from '../../assets/img/knicks.png';
import thunder from '../../assets/img/thunder.png';
import magic from '../../assets/img/magic.png';
import philly from '../../assets/img/76ers.png';
import suns from '../../assets/img/suns.png';
import blazers from '../../assets/img/blazers.png';
import kings from '../../assets/img/kings.png';
import spurs from '../../assets/img/spurs.png';
import raptors from '../../assets/img/raptors.png';
import jazz from '../../assets/img/jazz.png';
import wizzards from '../../assets/img/wizzards.png';

function Teams() {
  return (
    <div className="App">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1 className="banner">Teams</h1>
        <br></br>

        <div className="container">
          <ul className="teams">
            <Link to="/atlanta-hawks">
              <a href='/'>
                <li className="hawks">
                  <div className="bottom">Atlanta Hawks</div>
                  <img src={hawks} alt="Atlanta Hawks" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/boston-celtics">
              <a href="/">
                <li className="celtics">
                  <div className="bottom">Boston Celtics</div>
                  <img src={celtics} alt="Boston Celtics" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/brooklyn-nets">
              <a href="/">
                <li className="nets">
                  <div className="bottom">Brooklyn Nets</div>
                  <img src={nets} alt="Brooklyn Netss" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/charlotte-hornets">
              <a href="/">
                <li className="hornets">
                  <div className="bottom">Charlotte Hornets</div>
                  <img src={hornets} alt="Charlotte Hornets" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/chicago-bulls">
              <a href="/">  
                <li className="bulls">
                  <div className="bottom">Chicago Bulls</div>
                  <img src={bulls} alt="Chicago Bulls" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/cleveland-cavaliers">
              <a href="/">
                <li className="cavs">
                  <div className="bottom-2line">Cleveland Cavaliers</div>
                  <img src={cavs} alt="Cleveland Cavaliers" className="team-logo-2line"></img>
                </li>
              </a>
            </Link>
            <Link to="/dallas-mavericks">
              <a href="/">
                <li className="mavs">
                  <div className="bottom">Dallas Mavericks</div>
                  <img src={mavs} alt="Dallas Mavericks" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/denver-nuggets">
              <a href="/">
                <li className="nuggets">
                  <div className="bottom">Denver Nuggets</div>
                  <img src={nuggets} alt="Denver Nuggets" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/detroit-pistons">
              <a href="/">
                <li className="pistons">
                  <div className="bottom">Detroit Pistons</div>
                  <img src={pistons} alt="Detroit Pistons" className="team-logo"></img>
                </li>
              </a>  
            </Link>
            <Link to="/golden-state-warriors">
              <a href="/">
                <li className="warriors">
                  <div className="bottom-2line">Golden State Warriors</div>
                  <img src={warriors} alt="Golden State Warriors" className="team-logo-2line"></img>
                </li>
              </a>
            </Link>
            <Link to="/houston-rockets">
              <a href="/">
                <li className="rockets">
                  <div className="bottom">Houston Rockets</div>
                  <img src={rockets} alt="Houston Rockets" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/indiana-pacers">
              <a href="/">
                <li className="pacers">
                  <div className="bottom">Indiana Pacers</div>
                  <img src={pacers} alt="Indiana Pacers" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/los-angeles-clippers">
              <a href="/">
                <li className="clippers">
                  <div className="bottom-2line">Los Angelles Clippers</div>
                  <img src={clippers} alt="Los Angelles Clippers" className="team-logo-2line"></img>
                </li>
              </a>
            </Link>
            <Link to="/los-angeles-lakers">
              <a href="/">
                <li className="lakers">
                  <div className="bottom">Los Angeles Lakers</div>
                  <img src={lakers} alt="Los Angeles Lakers" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/memphis-grizzlies">
              <a href="/">
                <li className="grizzlies">
                  <div className="bottom">Memphis Grizzlies</div>
                  <img src={grizzlies} alt="Memphis Grizzlies" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/miami-heat">
              <a href="/">
                <li className="heat">
                  <div className="bottom">Miami Heat</div>
                  <img src={heat} alt="Miami Heat" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/milwaukee-bucks">
              <a href="/">
                <li className="bucks">
                  <div className="bottom">Milwaukee Bucks</div>
                  <img src={bucks} alt="Milwaukee Bucks" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/minnesota-timberwolves">
              <a href="/">
                <li className="wolves">
                  <div className="bottom-2line">Minnesota Timberwolves</div>
                  <img src={wolves} alt="Minnesota Timberwolves" className="team-logo-2line"></img>
                </li>
              </a>
            </Link>
            <Link to="/new-orleans-pelicans">
              <a href="/">
                <li className="pelicans">
                  <div className="bottom-2line">New Orleans Pelicans</div>
                  <img src={pelicans} alt="New Orleans Pelicans" className="team-logo-2line"></img>
                </li>
              </a>
            </Link>
            <Link to="/new-york-knicks">
              <a href="/">
                <li className="knicks">
                  <div className="bottom">New York Knicks</div>
                  <img src={knicks} alt="New York Knicks" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/oklahoma-thunder">
              <a href="/">
                <li className="thunder">
                  <div className="bottom">Oklahoma Thunder</div>
                  <img src={thunder} alt="Oklahoma Thunder" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/orlando-magic">
              <a href="/">
                <li className="magic">
                  <div className="bottom">Orlando Magic</div>
                  <img src={magic} alt="Orlando Magic" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/philladelphia-76ers">
              <a href="/">
                <li className="philly">
                  <div className="bottom">Philladelphia 76ers</div>
                  <img src={philly} alt="Philladelphia 76ers" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/phoenix-suns">
              <a href="/">
                <li className="suns">
                  <div className="bottom">Phoenix Suns</div>
                  <img src={suns} alt="Phoenix Suns" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/portland-trailblazers">
              <a href="/">
                <li className="blazers">
                  <div className="bottom-2line">Portland Trailblazers</div>
                  <img src={blazers} alt="Portland Trailblazers" className="team-logo-2line"></img>
                </li>
              </a>
            </Link>
            <Link to="/sacramento-kings">
              <a href="/">
                <li className="kings">
                  <div className="bottom">Sacramento Kings</div>
                  <img src={kings} alt="Sacramento Kings" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/san-antonio-spurs">
              <a href="/">
                <li className="spurs">
                  <div className="bottom">San Antonio Spurs</div>
                  <img src={spurs} alt="San Antonio Spurs" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/toronto-raptors">
              <a href="/">
                <li className="raptors">
                  <div className="bottom">Toronto Raptors</div>
                  <img src={raptors} alt="Toronto Raptors" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/utah-jazz">
              <a href="/">
                <li className="jazz">
                  <div className="bottom">Utah Jazz</div>
                  <img src={jazz} alt="Utah Jazz" className="team-logo"></img>
                </li>
              </a>
            </Link>
            <Link to="/washington-wizzards">
              <a href="/">
                <li className="wizzards">
                  <div className="bottom-2line">Washington Wizzards</div>
                  <img src={wizzards} alt="Washington Wizzards" className="team-logo-2line"></img>
                </li>
              </a>
            </Link>
          </ul>

        </div>
    </div>
  );
}

export default Teams;