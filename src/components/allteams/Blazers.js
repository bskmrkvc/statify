import logo from '../../assets/img/blazers.png';
import './BlazersTeamStyle.css';


const players = [
  {id: 1, name: 'Damian Lillard', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png' , jerseyNumber: '0',  position: 'G', country: 'USA'},
  {id: 2, name: 'Jerami Grant', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203924.png' , jerseyNumber: '9',  position: 'F', country: 'USA'},
  {id: 3, name: 'Josh Hart', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628404.png' , jerseyNumber: '11',  position: 'G', country: 'USA'},
  {id: 4, name: 'Anfernee Simmons', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629014.png' , jerseyNumber: '1',  position: 'G', country: 'USA'},
  {id: 5, name: 'Jusuf Nurkić', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203994.png' , jerseyNumber: '27',  position: 'C', country: 'BIH'},
  {id: 6, name: 'Nassir Little', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629642.png' , jerseyNumber: '10',  position: 'F-G', country: 'USA'},
  {id: 7, name: 'Keon Johnson', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630553.png' , jerseyNumber: '6',  position: 'G', country: 'USA'},
  {id: 8, name: 'Trendon Watford', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630570.png' , jerseyNumber: '2',  position: 'F', country: 'USA'},
  {id: 9, name: 'Gary Payton II', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627780.png' , jerseyNumber: '00',  position: 'G', country: 'USA'},
  {id: 10, name: 'Justise Winslow', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626159.png' , jerseyNumber: '26',  position: 'F-G', country: 'FRA'},
  {id: 11, name: 'Greg Brown III', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630535.png' , jerseyNumber: '4',  position: 'F', country: 'USA'},
  {id: 12, name: 'Shaedon Sharpe', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631101.png' , jerseyNumber: '17',  position: 'G', country: 'USA'},
  {id: 13, name: 'Drew Eubanks', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629234.png' , jerseyNumber: '24',  position: 'F-C', country: 'USA'},
  {id: 14, name: 'Olivier Sarr', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630846.png' , jerseyNumber: '30',  position: 'C', country: 'FRA'},
  {id: 15, name: 'Jabari Walker', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631133.png' , jerseyNumber: '34',  position: 'F', country: 'USA'}
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
    <li className="blazers-players">
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


function Blazers() {
    return (
      <div className="App">
        <br></br><br></br><br></br><br></br>

        {/* banner containing team name, logo and basic info */}
        <div className="banner-teams-wrapper">
          <div className="banner-teams-blazers">
            <span>
              <div className="left-side">
                <h1 className="team-name"> 
                  Portland
                  <br/> 
                  Trail Blazers. 
                </h1>
                  <div className="team-info">
                    <h4>Location:</h4><h4 style={{fontWeight: 'normal'}}> Portland, Oregon </h4>
                    <h4>Team Names:</h4><h4 style={{fontWeight: 'normal'}}>  Portland Trail Blazers </h4>
                    <h4>Seasons:</h4><h4 style={{fontWeight: 'normal'}}> 53; 1970-71 to 2022-23 </h4>
                    <h4>Championships:</h4><h4 style={{fontWeight: 'normal'}}> 1 </h4>
                  </div>
              </div>
            </span>
            <span className="team-logo-span">
              <img src={logo} className="team-logo-teams" alt="Portland Trail Blazers Logo"></img>
            </span>
          </div>
        </div>
        

        {/* roster */}
        <div className="teams-blazers-roster">
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
          <h3 className="about-text">The Portland Trail Blazers (colloquially known as the Blazers) are an American professional basketball team based in Portland, Oregon. The Trail Blazers compete in the National Basketball Association (NBA) as a member of the league's Western Conference Northwest Division.
          The team played its home games in the Memorial Coliseum before moving to the Moda Center in 1995 (called the Rose Garden until 2013). The franchise entered the league as an expansion team in 1970, and has enjoyed a strong following: from 1977 through 1995, the team sold out 814 consecutive home games, the longest such streak in American major professional sports at the time, and only since surpassed by the Boston Red Sox.
           The Trail Blazers are the only NBA team based in the Pacific Northwest, after the Vancouver Grizzlies relocated to Memphis and became the Memphis Grizzlies in 2001 and the Seattle SuperSonics relocated to Oklahoma City and became the Oklahoma City Thunder in 2008.</h3>
        </div>

      </div>
    );
  }
  
  export default Blazers;