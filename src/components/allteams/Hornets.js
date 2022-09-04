import logo from '../../assets/img/hornets.png';
import './HornetsTeamStyle.css';

const players = [
  {id: 1, name: 'Miles Bridges', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628970.png' , jerseyNumber: '0',  position: 'F', country: 'USA'},
  {id: 2, name: 'LaMelo Ball', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png' , jerseyNumber: '2',  position: 'G', country: 'USA'},
  {id: 3, name: 'Terry Rozier', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626179.png' , jerseyNumber: '3',  position: 'G', country: 'USA'},
  {id: 4, name: 'Gordon Hayward', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202330.png' , jerseyNumber: '20',  position: 'F', country: 'USA'},
  {id: 5, name: 'Kelly Oubre Jr.', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626162.png' , jerseyNumber: '12',  position: 'F-G', country: 'USA'},
  {id: 6, name: 'P.J. Washington', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629023.png' , jerseyNumber: '8',  position: 'F-C', country: 'USA'},
  {id: 7, name: 'Montrezl Harrell', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626149.png' , jerseyNumber: '11',  position: 'F', country: 'USA'},
  {id: 8, name: 'Cody Martin', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628998.png' , jerseyNumber: '24',  position: 'F-C', country: 'USA'},
  {id: 9, name: 'Mason Plumlee', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203486.png' , jerseyNumber: '4',  position: 'G', country: 'USA'},
  {id: 10, name: 'Isaiah Thomas', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202738.png' , jerseyNumber: '6',  position: 'F-C', country: 'USA'},
  {id: 11, name: 'James Bouknight', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630547.png' , jerseyNumber: '5',  position: 'G', country: 'USA'},
  {id: 12, name: 'Nick Richards', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630208.png' , jerseyNumber: '14',  position: 'C', country: 'JAM'},
  {id: 13, name: 'JT Thor', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630550.png' , jerseyNumber: '21',  position: 'F', country: 'USA'},
  {id: 14, name: 'Kai Jones', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630539.png' , jerseyNumber: '23',  position: 'C-F', country: 'BAH'}
  
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
    <li className="hornets-players">
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


function Hornets() {
    return (
      <div className="App">
      <br></br><br></br><br></br><br></br>

      {/* banner containing team name, logo and basic info */}
      <div className="banner-teams-wrapper">
        <div className="banner-teams-hornets">
          <span>
            <div className="left-side">
              <h1 className="team-name"> 
                Charlotte 
                <br/> 
                Hornets. 
              </h1>
                <div className="team-info">
                  <h4>Location:</h4><h4 style={{fontWeight: 'normal'}}>Charlotte, North Carolina</h4>
                  <h4>Team Names:</h4><h4 style={{fontWeight: 'normal'}}>Charlotte Bobcats, Charlotte Hornets</h4>
                  <h4>Seasons:</h4><h4 style={{fontWeight: 'normal'}}> 32; 1988-89 to 2021-22</h4>
                  <h4>Championships:</h4><h4 style={{fontWeight: 'normal'}}> 0 </h4>
                </div>
            </div>
          </span>
          <span className="team-logo-span">
            <img src={logo} className="team-logo-teams" alt="Charlotte Hornets Logo"></img>
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
        The Charlotte Hornets are an American professional basketball team based in Charlotte, North Carolina. The Hornets compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division, and play their home games at the Spectrum Center. The Charlotte Hornets are mainly owned by Basketball Hall of Famer Michael Jordan, who acquired a controlling interest in the team in 2010. The Charlotte Hornets franchise was established in 1988 as an expansion team owned by George Shinn. In 2002, Shinn relinquished his original franchise and acquired a new franchise in New Orleans. Although Shinn was controversially permitted to relocate his basketball organization to that city, an agreement was eventually reached in which Charlotte was permitted to retain the history and records of the team spanning from 1988 to 2002. After suspending operations for two seasons the Charlotte franchise, rebranded at the time as the Charlotte Bobcats, was reactivated under new ownership in the 2004–05 NBA season. In 2013, the Bobcats announced that they would change their name to the Charlotte Hornets once again for the 2014–15 season.
        </h3>
      </div>

    </div>
    );
  }
  
  export default Hornets;