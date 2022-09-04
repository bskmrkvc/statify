import logo from '../../assets/img/celtics.png';
import './CelticsTeamStyle.css';


const players = [
  {id: 1, name: 'Jayson Tatum', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1628369.png' , jerseyNumber: '0',  position: 'F-G', country: 'USA'},
  {id: 2, name: 'Jaylen Brown', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1627759.png' , jerseyNumber: '7',  position: 'G-F', country: 'USA'},
  {id: 3, name: 'Marcus Smart', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/203935.png' , jerseyNumber: '36',  position: 'G', country: 'USA'},
  {id: 4, name: 'Derrick White', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1628401.png' , jerseyNumber: '9',  position: 'G', country: 'USA'},
  {id: 5, name: 'Al Horford', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/201143.png' , jerseyNumber: '42',  position: 'C-F', country: 'DOM'},
  {id: 6, name: 'Robert Williams III', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1629057.png' , jerseyNumber: '44',  position: 'C-F', country: 'USA'},
  {id: 7, name: 'Grant Williams', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1629684.png' , jerseyNumber: '12',  position: 'F', country: 'USA'},
  {id: 8, name: 'Daniel Theis', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1628464.png' , jerseyNumber: '27',  position: 'F-C', country: 'GER'},
  {id: 9, name: 'Peyton Pritchard', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1630202.png' , jerseyNumber: '11',  position: 'G', country: 'USA'},
  {id: 10, name: 'Aaron Nesmith', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1630174.png' , jerseyNumber: '26',  position: 'G-F', country: 'FRA'},
  {id: 11, name: 'Sam Hauser', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1630573.png' , jerseyNumber: '30',  position: 'F', country: 'USA'},
  {id: 12, name: 'Luke Kornet', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1628436.png' , jerseyNumber: '40',  position: 'C-F', country: 'USA'},
  {id: 13, name: 'Nik Stauskas', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/203917.png' , jerseyNumber: '13',  position: 'G', country: 'CAN'},
  {id: 14, name: 'Malik Fitts', logoURL: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1630238.png' , jerseyNumber: '8',  position: 'F', country: 'USA'}
  
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
    <li className="celtics-players">
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



function Celtics() {
  return (
    <div className="App">
      <br></br><br></br><br></br><br></br>

      {/* banner containing team name, logo and basic info */}
      <div className="banner-teams-wrapper">
        <div className="banner-teams-celtics">
          <span>
            <div className="left-side">
              <h1 className="team-name"> 
                Boston 
                <br/> 
                Celtics. 
              </h1>
                <div className="team-info">
                  <h4>Location:</h4><h4 style={{fontWeight: 'normal'}}>Boston, Massachusetts</h4>
                  <h4>Team Names:</h4><h4 style={{fontWeight: 'normal'}}>Boston Celtics</h4>
                  <h4>Seasons:</h4><h4 style={{fontWeight: 'normal'}}>76; 1946-47 to 2021-22</h4>
                  <h4>Championships:</h4><h4 style={{fontWeight: 'normal'}}>17 (1957, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969, 1974, 1976, 1981, 1984, 1986, 2008)</h4>
                </div>
            </div>
          </span>
          <span className="team-logo-span">
            <img src={logo} className="team-logo-teams" alt="Boston Celtics Logo"></img>
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
        The Boston Celtics are an American professional basketball team based in Boston. The Celtics compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Atlantic Division. Founded in 1946 as one of the league's original eight teams, the Celtics play their home games at TD Garden, which they share with the National Hockey League's Boston Bruins. The Celtics are regarded as one of the most successful basketball teams in NBA history. The franchise is one of two teams with 17 NBA Championships, the other franchise being the Los Angeles Lakers. The Celtics currently hold the record for the most recorded wins of any NBA team.
        </h3>
      </div>

    </div>
  );
  }
  
  export default Celtics;