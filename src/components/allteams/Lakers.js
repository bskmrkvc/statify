import logo from '../../assets/img/lakers.png';
import './LakersTeamStyle.css';


const players = [
  {id: 1, name: 'Darius Garland', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629636.png' , jerseyNumber: '10',  position: 'G', country: 'USA'},
  {id: 2, name: 'John Collins', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628381.png' , jerseyNumber: '20',  position: 'F-C', country: 'USA'},
  {id: 3, name: 'Bogdan Bogdanovic', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203992.png' , jerseyNumber: '13',  position: 'G', country: 'SRB'},
  {id: 4, name: "De'Andre Hunter", logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629631.png' , jerseyNumber: '12',  position: 'F-G', country: 'USA'},
  {id: 5, name: 'Kevin Huerter', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628989.png' , jerseyNumber: '3',  position: 'G-F', country: 'USA'},
  {id: 6, name: 'Clint Capela', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203991.png' , jerseyNumber: '15',  position: 'C', country: 'SUI'},
  {id: 7, name: 'Danilo Gallinari', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201568.png' , jerseyNumber: '8',  position: 'F', country: 'ITA'},
  {id: 8, name: 'Onyeka Okongwu', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630168.png' , jerseyNumber: '17',  position: 'F-C', country: 'USA'},
  {id: 9, name: 'Dellon Wright', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626153.png' , jerseyNumber: '0',  position: 'G', country: 'USA'},
  {id: 10, name: 'Timothé Luwawu-Cabarrot', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627789.png' , jerseyNumber: '7',  position: 'G-F', country: 'FRA'},
  {id: 11, name: 'Lou Williams', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/101150.png' , jerseyNumber: '6',  position: 'G', country: 'USA'},
  {id: 12, name: 'Chaundee Brown Jr.', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630602.png' , jerseyNumber: '38',  position: 'F', country: 'USA'},
  {id: 13, name: 'Gorgui Dieng', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203476.png' , jerseyNumber: '10',  position: 'C', country: 'SEN'},
  {id: 14, name: 'Kevin Knox', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628995.png' , jerseyNumber: '5',  position: 'F', country: 'USA'},
  {id: 15, name: 'Skylar Mays', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630219.png' , jerseyNumber: '4',  position: 'G', country: 'USA'},
  {id: 16, name: 'Jalen Johnson', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630552.png' , jerseyNumber: '1',  position: 'F', country: 'USA'},
  {id: 17, name: 'Sharife Cooper', logoURL: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630536.png' , jerseyNumber: '2',  position: 'G', country: 'USA'}
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
    <li className="lakers-players">
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


function Lakers() {
    return (
      <div className="App">
        <br></br><br></br><br></br><br></br>

        {/* banner containing team name, logo and basic info */}
        <div className="banner-teams-wrapper">
          <div className="banner-teams-lakers">
            <span>
              <div className="left-side">
                <h1 className="team-name"> 
                  Los Angeles
                  <br/> 
                  Lakers. 
                </h1>
                  <div className="team-info">
                    <h4>Location:</h4><h4 style={{fontWeight: 'normal'}}> Los Angeles, California </h4>
                    <h4>Team Names:</h4><h4 style={{fontWeight: 'normal'}}> Los Angeles Lakers, Minneapolis Lakers </h4>
                    <h4>Seasons:</h4><h4 style={{fontWeight: 'normal'}}>  75; 1948-49 to 2022-23 </h4>
                    <h4>Championships:</h4><h4 style={{fontWeight: 'normal'}}>17</h4>
                  </div>
              </div>
            </span>
            <span className="team-logo-span">
              <img src={logo} className="team-logo-teams" alt="Los Angeles Lakers Logo"></img>
            </span>
          </div>
        </div>
        

        {/* roster */}
        <div className="teams-lakers-roster">
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
                <Player players={players[15]}/>
                <Player players={players[16]}/>
              </ul>
            </div>
          </div>
        </div>

        {/* about section */}
        <div>
          <h1 style={{textAlign: 'center'}}>About</h1>
          <h3 className="about-text">The Los Angeles Lakers are an American professional basketball team based in Los Angeles. 
          The Lakers compete in the National Basketball Association (NBA) as a member of the league's Western Conference Pacific Division. The Lakers play their home games at Crypto.com Arena, an arena shared with the NBA's Los Angeles Clippers, the Los Angeles Sparks of the Women's National Basketball Association, and the Los Angeles Kings of the National Hockey League.
           The Lakers are one of the most successful teams in the history of the NBA, and have won 17 NBA championships, tied with the Boston Celtics for the most in NBA history.</h3>
        </div>

      </div>
    );
  }
  
  export default Lakers;