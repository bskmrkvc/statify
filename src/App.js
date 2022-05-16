
import {
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from '../src/components/home/Home';
import Teams from '../src/components/teams/Teams';
import Search from '../src/components/search/Search';
import Leaders from '../src/components/leaders/Leaders';
import About from '../src/components/about/About';
import Error from '../src/components/error/Error';
import Footer from '../src/components/footer/Footer';
import Hawks from '../src/components/allteams/Hawks';
import Celtics from '../src/components/allteams/Celtics';
import Nets from '../src/components/allteams/Nets';
import Hornets from '../src/components/allteams/Hornets';
import Bulls from '../src/components/allteams/Bulls';
import Cavs from '../src/components/allteams/Cavs';
import Mavs from '../src/components/allteams/Mavs';
import Nuggets from '../src/components/allteams/Nuggets';
import Pistons from '../src/components/allteams/Pistons';
import Warriors from '../src/components/allteams/Warriors';
import Rockets from '../src/components/allteams/Rockets';
import Pacers from '../src/components/allteams/Pacers';
import Clippers from '../src/components/allteams/Clippers';
import Lakers from '../src/components/allteams/Lakers';
import Grizzlies from '../src/components/allteams/Grizzlies';
import Heat from '../src/components/allteams/Heat';
import Bucks from '../src/components/allteams/Bucks';
import Wolves from '../src/components/allteams/Wolves';
import Pelicans from '../src/components/allteams/Pelicans';
import Knicks from '../src/components/allteams/Knicks';
import Thunder from '../src/components/allteams/Thunder';
import Magic from '../src/components/allteams/Magic';
import Philly from '../src/components/allteams/Philly';
import Suns from '../src/components/allteams/Suns';
import Blazers from '../src/components/allteams/Blazers';
import Kings from '../src/components/allteams/Kings';
import Spurs from '../src/components/allteams/Spurs';
import Raptors from '../src/components/allteams/Raptors';
import Jazz from '../src/components/allteams/Jazz';
import Wizzards from '../src/components/allteams/Wizzards';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* react router implementation */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/teams" element={<Teams />}/>
        <Route path="/leaders" element={<Leaders />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/atlanta-hawks" element={<Hawks />}/>
        <Route path="/boston-celtics" element={<Celtics />}/>
        <Route path="/brooklyn-nets" element={<Nets />}/>
        <Route path="/charlotte-hornets" element={<Hornets />}/>
        <Route path="/chicago-bulls" element={<Bulls />}/>
        <Route path="/cleveland-cavaliers" element={<Cavs />}/>
        <Route path="/dallas-mavericks" element={<Mavs />}/>
        <Route path="/denver-nuggets" element={<Nuggets />}/>
        <Route path="/detroit-pistons" element={<Pistons />}/>
        <Route path="/golden-state-warriors" element={<Warriors />}/>
        <Route path="/houston-rockets" element={<Rockets />}/>
        <Route path="/indiana-pacers" element={<Pacers />}/>
        <Route path="/los-angeles-clippers" element={<Clippers />}/>
        <Route path="/los-angeles-lakers" element={<Lakers />}/>
        <Route path="/memphis-grizzlies" element={<Grizzlies />}/>
        <Route path="/miami-heat" element={<Heat />}/>
        <Route path="/milwaukee-bucks" element={<Bucks />}/>
        <Route path="/minnesota-timberwolves" element={<Wolves />}/>
        <Route path="/new-orleans-pelicans" element={<Pelicans />}/>
        <Route path="/new-york-knicks" element={<Knicks />}/>
        <Route path="/oklahoma-thunder" element={<Thunder />}/>
        <Route path="/orlando-magic" element={<Magic />}/>
        <Route path="/philladelphia-76ers" element={<Philly />}/>
        <Route path="/phoenix-suns" element={<Suns />}/>
        <Route path="//portland-trailblazers" element={<Blazers />}/>
        <Route path="/sacramento-kings" element={<Kings />}/>
        <Route path="/san-antonio-spurs" element={<Spurs />}/>
        <Route path="/toronto-raptors" element={<Raptors />}/>
        <Route path="/utah-jazz" element={<Jazz />}/>
        <Route path="/washington-wizzards" element={<Wizzards />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
