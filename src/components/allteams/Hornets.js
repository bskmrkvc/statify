import logo from '../../assets/img/hornets.png';
import './HornetsTeamStyle.css';


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

              <li className="hornets-players">
                <div className="top">Miles Bridges</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1628970.png" } alt="Miles Bridges" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 0 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">LaMelo Ball</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png" } alt="LaMelo Ball" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 2 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">Terry Rozier</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1626179.png" } alt="Terry Rozier" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 3 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">Gordon Hayward</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/202330.png" } alt="Gordon Hayward" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 20 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">Kelly Oubre Jr.</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1626162.png" } alt="Kelly Oubre Jr." className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F-G</h4>
                  </span>
                  <span>
                    <h4> 12 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">P.J. Washington</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1629023.png" } alt="P.J. Washington" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 25 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">Montrezl Harrell</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1626149.png" } alt="Montrezl Harrell" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F-C</h4>
                  </span>
                  <span>
                    <h4> 8 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">Cody Martin</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1628998.png" } alt="Cody Martin" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 11 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">Mason Plumlee</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/203486.png" } alt="Mason Plumlee" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F-C</h4>
                  </span>
                  <span>
                    <h4> 24 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">Isaiah Thomas</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/202738.png" } alt="Isaiah Thomas" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 4 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">Jalen McDaniels</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1629667.png" } alt="Jalen McDaniels" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F-C</h4>
                  </span>
                  <span>
                    <h4> 6 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">James Bouknight</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630547.png" } alt="James Bouknight" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 5 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">Nick Richards</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630208.png" } alt="Nick Richards" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>C</h4>
                  </span>
                  <span>
                    <h4> 14 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>JAM</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">JT Thor</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630550.png" } alt="JT Thor" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 21 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="hornets-players">
                <div className="top">Kai Jones</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630539.png" } alt="Kai Jones" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>C-F</h4>
                  </span>
                  <span>
                    <h4> 23</h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>BAH</h4>
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
        The Charlotte Hornets are an American professional basketball team based in Charlotte, North Carolina. The Hornets compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division, and play their home games at the Spectrum Center. The Charlotte Hornets are mainly owned by Basketball Hall of Famer Michael Jordan, who acquired a controlling interest in the team in 2010. The Charlotte Hornets franchise was established in 1988 as an expansion team owned by George Shinn. In 2002, Shinn relinquished his original franchise and acquired a new franchise in New Orleans. Although Shinn was controversially permitted to relocate his basketball organization to that city, an agreement was eventually reached in which Charlotte was permitted to retain the history and records of the team spanning from 1988 to 2002. After suspending operations for two seasons the Charlotte franchise, rebranded at the time as the Charlotte Bobcats, was reactivated under new ownership in the 2004–05 NBA season. In 2013, the Bobcats announced that they would change their name to the Charlotte Hornets once again for the 2014–15 season.
        </h3>
      </div>

    </div>
    );
  }
  
  export default Hornets;