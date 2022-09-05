
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
        <Route path="/ATL" element={<Hawks />}/>
        <Route path="/BOS" element={<Celtics />}/>
        <Route path="/BKN" element={<Nets />}/>
        <Route path="/CHA" element={<Hornets />}/>
        <Route path="/CHI" element={<Bulls />}/>
        <Route path="/CLE" element={<Cavs />}/>
        <Route path="/DAL" element={<Mavs />}/>
        <Route path="/DEN" element={<Nuggets />}/>
        <Route path="/DET" element={<Pistons />}/>
        <Route path="/GSW" element={<Warriors />}/>
        <Route path="/HOU" element={<Rockets />}/>
        <Route path="/IND" element={<Pacers />}/>
        <Route path="/LAC" element={<Clippers />}/>
        <Route path="/LAL" element={<Lakers />}/>
        <Route path="/MEM" element={<Grizzlies />}/>
        <Route path="/MIA" element={<Heat />}/>
        <Route path="/MIL" element={<Bucks />}/>
        <Route path="/MIN" element={<Wolves />}/>
        <Route path="/NOP" element={<Pelicans />}/>
        <Route path="/NYK" element={<Knicks />}/>
        <Route path="/OKC" element={<Thunder />}/>
        <Route path="/ORL" element={<Magic />}/>
        <Route path="/PHI" element={<Philly />}/>
        <Route path="/PHX" element={<Suns />}/>
        <Route path="/POR" element={<Blazers />}/>
        <Route path="/SAC" element={<Kings />}/>
        <Route path="/SAS" element={<Spurs />}/>
        <Route path="/TOR" element={<Raptors />}/>
        <Route path="/UTA" element={<Jazz />}/>
        <Route path="/WSH" element={<Wizzards />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
