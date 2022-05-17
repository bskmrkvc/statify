import logo from '../../assets/img/nets.png';
import './NetsTeamStyle.css';



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

              <li className="nets-players">
                <div className="top">Kevin Durant</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png" } alt="Kevin Durant" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 7 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Kyrie Irving</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png" } alt="Kyrie Irving" className="player-picture"></img>
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

              <li className="nets-players">
                <div className="top">Ben Simmons</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1627732.png" } alt="Ben Simmons" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G-F</h4>
                  </span>
                  <span>
                    <h4> 10 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>AUS</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Seth Curry</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/203552.png" } alt="Seth Curry" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 30 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Joe Harris</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/203925.png" } alt="Joe Harris" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G-F</h4>
                  </span>
                  <span>
                    <h4> 12 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Patty Mills</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/201988.png" } alt="Patty Mills" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 8 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>AUS</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">LaMarcus Aldridge</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/200746.png" } alt="LaMarcus Aldridge" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>C-F</h4>
                  </span>
                  <span>
                    <h4> 21 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Bruce Brown</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1628971.png" } alt="Bruce Brown" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G-F</h4>
                  </span>
                  <span>
                    <h4> 1 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Goran Dragic</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/201609.png" } alt="Daniel Theis" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 9 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>SLO</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Nicolas Claxton</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1629651.png" } alt="Nicolas Claxton" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F-C</h4>
                  </span>
                  <span>
                    <h4> 33 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Andre Drummond</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/203083.png" } alt="Andre Drummond" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>C</h4>
                  </span>
                  <span>
                    <h4> 0 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Cam Thomas</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630560.png" } alt="Cam Thomas" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>G</h4>
                  </span>
                  <span>
                    <h4> 24 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Kessler Edwards</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630556.png" } alt="Kessler Edwards" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 14 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Blake Griffin</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/201933.png" } alt="Blake Griffin" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 2 </h4>
                  </span>
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>USA</h4>
                  </span>
                </div>
              </li>

              <li className="nets-players">
                <div className="top">Day'Ron Sharpe</div>
                <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630549.png" } alt="Day'Ron Sharpe" className="player-picture"></img>
                <div className="bottom">
                  <span>
                    <h4 style={{fontWeight: 'normal'}}>F</h4>
                  </span>
                  <span>
                    <h4> 20</h4>
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
        The Brooklyn Nets are an American professional basketball team based in the New York City borough of Brooklyn. The Nets compete in the National Basketball Association (NBA) as a member of the Atlantic Division of the Eastern Conference. The team plays its home games at Barclays Center. They are one of two NBA teams located in New York City; the other is the New York Knicks. The club was established in 1967 as a charter franchise of the NBA's rival league, the American Basketball Association (ABA). They played in New Jersey as the New Jersey Americans during their first season, before relocating to Long Island, New York, in 1968 and changing their name to the New York Nets. During this time, the Nets won two ABA championships (in 1974 and 1976). In 1976, the ABA merged with the NBA, and the Nets were absorbed into the NBA along with three other ABA teams (the San Antonio Spurs, Indiana Pacers, and Denver Nuggets), all of whom remain in the league to this day.
        </h3>
      </div>

    </div>
    );
  }
  
  export default Nets;