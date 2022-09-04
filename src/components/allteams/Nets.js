import logo from '../../assets/img/nets.png';
import './NetsTeamStyle.css';


const players = [
  {id: 1, name: 'Kevin Durant', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png' , jerseyNumber: '7',  position: 'F', country: 'USA'},
  {id: 2, name: 'Kyrie Irving', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png' , jerseyNumber: '11',  position: 'G', country: 'USA'},
  {id: 3, name: 'Ben Simmons', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627732.png' , jerseyNumber: '10',  position: 'G-F', country: 'AUS'},
  {id: 4, name: 'Seth Curry', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203552.png' , jerseyNumber: '30',  position: 'G', country: 'USA'},
  {id: 5, name: 'Joe Harris', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203925.png' , jerseyNumber: '12',  position: 'G-F', country: 'USA'},
  {id: 6, name: 'Patty Mills', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201988.png' , jerseyNumber: '8',  position: 'G', country: 'AUS'},
  {id: 7, name: 'LaMarcus Aldridge', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/200746.png' , jerseyNumber: '21',  position: 'C-F', country: 'USA'},
  {id: 8, name: 'Bruce Brown', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628971.png' , jerseyNumber: '1',  position: 'G-F', country: 'USA'},
  {id: 9, name: 'Goran Dragic', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201609.png' , jerseyNumber: '9',  position: 'G', country: 'SLO'},
  {id: 10, name: 'Nicolas Claxton', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629651.png' , jerseyNumber: '33',  position: 'F-C', country: 'USA'},
  {id: 11, name: 'Andre Drummond', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203083.png' , jerseyNumber: '0',  position: 'C', country: 'USA'},
  {id: 12, name: 'Cam Thomas', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630560.png' , jerseyNumber: '24',  position: 'G', country: 'USA'},
  {id: 13, name: 'Kessler Eswards', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630556.png' , jerseyNumber: '14',  position: 'F', country: 'USA'},
  {id: 14, name: 'Blake Griffin', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201933.png' , jerseyNumber: '2',  position: 'F', country: 'USA'},
  {id: 14, name: "Day'Ron Sharpe", logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630549.png' , jerseyNumber: '20',  position: 'F', country: 'USA'}
  
];


function Player(props) {
  const name = (
    props.players.name
);

  const logoURL = (
    props.players.logoURL
);

  const position = (
      props.players.position
  );   
  
  const jerseyNumber = (
    props.players.jerseyNumber
  );
  
  const country = (
    props.players.country
  );
  
  return (
    <li className="nets-players">
      <div className="top">{name}</div>
      <img src={ logoURL } alt={name} className="player-picture"></img>
      <div className="bottom">
        <span>
          <h4 style={{fontWeight: 'normal'}}>{position}</h4>
        </span>
        <span>
          <h4>{jerseyNumber}</h4>
        </span>
        <span>
          <h4 style={{fontWeight: 'normal'}}>{country}</h4>
        </span>
      </div>
    </li>
  );
}



function Nets() {
    return (
      <div className="App">
      <br></br><br></br><br></br><br></br>

      {/* banner containing team name, logo and basic info */}
      <div className="banner-teams-wrapper">
        <div className="banner-teams-nets">
          <span>
            <div className="left-side">
              <h1 className="team-name"> 
                Brooklyn 
                <br/> 
                Nets. 
              </h1>
                <div className="team-info">
                  <h4>Location:</h4><h4 style={{fontWeight: 'normal'}}>Brooklyn, New York</h4>
                  <h4>Team Names:</h4><h4 style={{fontWeight: 'normal'}}>Brooklyn Nets, New Jersey Nets, New York Nets, New Jersey Americans</h4>
                  <h4>Seasons:</h4><h4 style={{fontWeight: 'normal'}}>55 (46 NBA & 9 ABA); 1967-68 to 2021-22</h4>
                  <h4>Championships:</h4><h4 style={{fontWeight: 'normal'}}>2 (0 NBA & 2 ABA)</h4>
                </div>
            </div>
          </span>
          <span className="team-logo-span">
            <img src={logo} className="team-logo-teams" alt="Brooklyn Nets Logo"></img>
          </span>
        </div>
      </div>
      

      {/* roster */}
      <div className="teams-hawks-roster">
        <h1 style = {{textAlign: 'center', marginTop: '4rem'}}>ROSTER</h1>
        <div className="teams-players-container">
          <div className="container-players">
            <ul>
              <Player players={players[0]}/>
              <Player players={players[1]}/>
              <Player players={players[2]}/>
              <Player players={players[3]}/>
              <Player players={players[4]}/>
              <Player players={players[5]}/>
              <Player players={players[6]}/>
              <Player players={players[7]}/>
              <Player players={players[8]}/>
              <Player players={players[9]}/>
              <Player players={players[10]}/>
              <Player players={players[11]}/>
              <Player players={players[12]}/>
              <Player players={players[13]}/>

            </ul>
          </div>
        </div>
      </div>

      {/* about section */}
      <div>
        <h1 style={{textAlign: 'center'}}>About</h1>
        <h3 className="about-text">
        The Brooklyn Nets are an American professional basketball team based in the New York City borough of Brooklyn. The Nets compete in the National Basketball Association (NBA) as a member of the Atlantic Division of the Eastern Conference. The team plays its home games at Barclays Center. They are one of two NBA teams located in New York City; the other is the New York Knicks. The club was established in 1967 as a charter franchise of the NBA's rival league, the American Basketball Association (ABA). They played in New Jersey as the New Jersey Americans during their first season, before relocating to Long Island, New York, in 1968 and changing their name to the New York Nets. During this time, the Nets won two ABA championships (in 1974 and 1976). In 1976, the ABA merged with the NBA, and the Nets were absorbed into the NBA along with three other ABA teams (the San Antonio Spurs, Indiana Pacers, and Denver Nuggets), all of whom remain in the league to this day.
        </h3>
      </div>

    </div>
    );
  }
  
  export default Nets;