import logo from '../../assets/img/raptors.png';
import './RaptorsTeamStyle.css';


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
    <li className="raptors-players">
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


function Raptors() {
    return (
      <div className="App">
        <br></br><br></br><br></br><br></br>

        {/* banner containing team name, logo and basic info */}
        <div className="banner-teams-wrapper">
          <div className="banner-teams-raptors">
            <span>
              <div className="left-side">
                <h1 className="team-name"> 
                  Toronto
                  <br/> 
                  Raptors. 
                </h1>
                  <div className="team-info">
                    <h4>Location:</h4><h4 style={{fontWeight: 'normal'}}> Toronto, Canada </h4>
                    <h4>Team Names:</h4><h4 style={{fontWeight: 'normal'}}>  Toronto Raptors </h4>
                    <h4>Seasons:</h4><h4 style={{fontWeight: 'normal'}}> 28; 1995-96 to 2022-23 </h4>
                    <h4>Championships:</h4><h4 style={{fontWeight: 'normal'}}> 1 </h4>
                  </div>
              </div>
            </span>
            <span className="team-logo-span">
              <img src={logo} className="team-logo-teams" alt="Toronto Raptors Logo"></img>
            </span>
          </div>
        </div>
        

        {/* roster */}
        <div className="teams-raptors-roster">
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
          <h3 className="about-text">The Toronto Raptors are a Canadian professional basketball team based in Toronto. The Raptors compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Atlantic Division. They play their home games at Scotiabank Arena, which they share with the Toronto Maple Leafs of the National Hockey League (NHL). The team was founded in 1995 as part of the NBA's expansion into Canada, along with the Vancouver Grizzlies. Since the 2001–02 season, the Raptors have been the only Canadian-based team in the league, as the Grizzlies relocated from Vancouver to Memphis, Tennessee.

As with most expansion teams, the Raptors struggled in their early years, but after the acquisition of Vince Carter through a draft-day trade in 1998, the franchise set league-attendance records and made the NBA playoffs in 2000, 2001, and 2002. Carter was instrumental in leading the team to their first playoff series win in 2001, where they advanced to the Eastern Conference semifinals. During the 2002–03 and 2003–04 seasons, they failed to make significant progress, and Carter was traded in 2004 to the New Jersey Nets.

After Carter left, Chris Bosh emerged as the team leader. For the 2006–07 season, Bryan Colangelo was appointed as general manager, and through a combination of Bosh, 2006 first overall draft pick Andrea Bargnani, and a revamp of the roster, the Raptors qualified for their first playoff berth in five years, capturing the Atlantic Division title. In the 2007–08 season, they also advanced to the playoffs but failed to reach the postseason in each of the next five seasons. Colangelo overhauled the team's roster for the 2009–10 season in a bid to persuade pending free agent Bosh to stay, but Bosh departed to sign with the Miami Heat in July 2010, ushering in yet another era of rebuilding for the Raptors.

Masai Ujiri replaced Colangelo in 2013 and helped herald a new era of success, led by a backcourt duo of DeMar DeRozan and Kyle Lowry. The Raptors returned to the playoffs the following year and became a consistent playoff team in every year of Ujiri's tenure. Under Ujiri, the team also won five Division titles and registered their most successful regular season in 2018. However, the team's failure to reach the NBA Finals prompted Ujiri to fire head coach Dwane Casey after the 2018 playoffs concluded and conduct the high-profile trade of DeRozan for Kawhi Leonard and Danny Green later that summer, as well as acquiring Marc Gasol before the trade deadline. In the 2019 playoffs, the Raptors won their first Eastern Conference title and advanced to their first NBA Finals, where they won their first NBA championship.</h3>
        </div>

      </div>
    );
  }
  
  export default Raptors;