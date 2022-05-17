import logo from '../../assets/img/celtics.png';
import './CelticsTeamStyle.css';


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

              <li className="celtics-players">
                <div className="top">Jayson Tatum</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1628369.png" } alt="Jayson Tatum" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F-G</h4>
                  </span>
                  <span>
                    <h4> 0 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Jaylen Brown</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1627759.png" } alt="Jaylen Brown" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G-F</h4>
                  </span>
                  <span>
                    <h4> 7 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Marcus Smart</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/203935.png" } alt="Marcus Smart" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 36 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Derrick White</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1628401.png" } alt="Derrick White" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 9 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Al Horford</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/201143.png" } alt="Al Horford" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>C-F</h4>
                  </span>
                  <span>
                    <h4> 42 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>DOM</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Robert Williams III</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1629057.png" } alt="Atlanta Hawks" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>C-F</h4>
                  </span>
                  <span>
                    <h4> 44 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Grant Williams</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1629684.png" } alt="Grant Williams" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 12 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Daniel Theis</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1628464.png" } alt="Daniel Theis" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F-C</h4>
                  </span>
                  <span>
                    <h4> 27 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>GER</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Peyton Pritchard</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1630202.png" } alt="Peyton Pritchard" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 11 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Aaron Nesmith</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1630174.png" } alt="Aaron Nesmith" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G-F</h4>
                  </span>
                  <span>
                    <h4> 26 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>FRA</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Sam Hauser</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1630573.png" } alt="Sam Hauser" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 30 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Luke Kornet</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1628436.png" } alt="Luke Kornet" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>C-F</h4>
                  </span>
                  <span>
                    <h4> 40 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Nik Stauskas</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/203917.png" } alt="Nik Stauskas" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 13 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>CAN</h4>
                  </span>
                </div>
              </li>

              <li className="celtics-players">
                <div className="top">Malik Fitts</div>
                <img src={ "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1630238.png" } alt="Malik Fitts" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 8 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

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