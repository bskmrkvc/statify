import logo from '../../assets/img/bulls.png';
import './BullsTeamStyle.css';

const players = [
  {id: 1, name: 'DeMar DeRozan', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png' , jerseyNumber: '11',  position: 'G-F', country: 'USA'},
  {id: 2, name: 'Zach Lavine', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203897.png' , jerseyNumber: '8',  position: 'G-F', country: 'USA'},
  {id: 3, name: 'Nikola Vucevic', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202696.png' , jerseyNumber: '9',  position: 'C', country: 'MNE'},
  {id: 4, name: 'Lonzo Ball', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628366.png' , jerseyNumber: '2',  position: 'G', country: 'USA'},
  {id: 5, name: 'Coby White', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629632.png' , jerseyNumber: '0',  position: 'G', country: 'USA'},
  {id: 6, name: 'Ayo Dosunmu', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630245.png' , jerseyNumber: '12',  position: 'G', country: 'USA'},
  {id: 7, name: 'Alex Caruso', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627936.png' , jerseyNumber: '6',  position: 'G', country: 'USA'},
  {id: 8, name: 'Patrick Williams', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630172.png' , jerseyNumber: '44',  position: 'F', country: 'USA'},
  {id: 9, name: 'Javonte Green', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629750.png' , jerseyNumber: '24',  position: 'G-F', country: 'USA'},
  {id: 10, name: 'Derrick Jones Jr.', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627884.png' , jerseyNumber: '5',  position: 'F', country: 'USA'},
  {id: 11, name: 'Tristan Thompson', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202684.png' , jerseyNumber: '3',  position: 'C-F', country: 'USA'},
  {id: 12, name: 'Troy Brown Jr.', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628972.png' , jerseyNumber: '7',  position: 'G-F', country: 'USA'},
  {id: 13, name: 'Matt Thomas', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629744.png' , jerseyNumber: '21',  position: 'G', country: 'USA'},
  {id: 14, name: 'Tony Bradley', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628396.png' , jerseyNumber: '13',  position: 'C-F', country: 'USA'},
  {id: 15, name: 'Marko Simonovic', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630250.png' , jerseyNumber: '19',  position: 'C', country: 'MNE'}
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
    <li className="bulls-players">
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


function Bulls() {
    return (
      <div className="App">
      <br></br><br></br><br></br><br></br>

      {/* banner containing team name, logo and basic info */}
      <div className="banner-teams-wrapper">
        <div className="banner-teams-bulls">
          <span>
            <div className="left-side">
              <h1 className="team-name"> 
                Chicago 
                <br/> 
                Bulls. 
              </h1>
                <div className="team-info">
                  <h4>Location:</h4><h4 style={{fontWeight: 'normal'}}>Chicago, Illinois</h4>
                  <h4>Team Names:</h4><h4 style={{fontWeight: 'normal'}}>Chicago Bulls</h4>
                  <h4>Seasons:</h4><h4 style={{fontWeight: 'normal'}}> 56; 1966-67 to 2021-22</h4>
                  <h4>Championships:</h4><h4 style={{fontWeight: 'normal'}}> 6 (1991, 1992, 1993, 1996, 1997, 1998) </h4>
                </div>
            </div>
          </span>
          <span className="team-logo-span">
            <img src={logo} className="team-logo-teams" alt="Chicago Bulls Logo"></img>
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
              <Player players={players[14]}/>
            </ul>
          </div>
        </div>
      </div>

      {/* about section */}
      <div>
        <h1 style={{textAlign: 'center'}}>About</h1>
        <h3 className="about-text">
        The Chicago Bulls are an American professional basketball team based in Chicago. The Bulls compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Central Division. The team was founded on January 16, 1966, and played its first game during the 1966–67 NBA season. The Bulls play their home games at the United Center, an arena on Chicago's West Side.
        The Bulls saw their greatest success during the 1990s when they played a major part in popularizing the NBA worldwide. They are known for having one of the NBA's greatest dynasties, winning six NBA championships between 1991 and 1998 with two three-peats. All six of their championship teams were led by Hall of Famers Michael Jordan, Scottie Pippen, and coach Phil Jackson. The Bulls are the only NBA franchise to win multiple championships while never losing an NBA Finals series in their history.
        </h3>
      </div>

    </div>
    );
  }
  
  export default Bulls;