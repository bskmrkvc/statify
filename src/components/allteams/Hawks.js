
import logo from '../../assets/img/hawks.png';
import './HawksTeamStyle.css';

function Hawks() {
    return (
      <div className="App">
        <br></br><br></br><br></br><br></br>

        {/* banner containing team name, logo and basic info */}
        <div className="banner-teams-wrapper">
          <div className="banner-teams-hawks">
            <span>
              <div className="left-side">
                <h1 className="team-name"> 
                  Atlanta 
                  <br/> 
                  Hawks. 
                </h1>
                  <div className="team-info">
                    <h4>Location:</h4><h4 style={{fontWeight: 'normal'}}>Atlanta, Georgia</h4>
                    <h4>Team Names:</h4><h4 style={{fontWeight: 'normal'}}>Atlanta Hawks, St. Louis Hawks, Milwaukee Hawks, Tri-Cities Blackhawks</h4>
                    <h4>Seasons:</h4><h4 style={{fontWeight: 'normal'}}>73; 1949-50 to 2021-22</h4>
                    <h4>Championships:</h4><h4 style={{fontWeight: 'normal'}}>1(1958)</h4>
                  </div>
              </div>
            </span>
            <span className="team-logo-span">
              <img src={logo} className="team-logo-teams" alt="Atlanta Hawks Logo"></img>
            </span>
          </div>
        </div>
        

        {/* roster */}
        <div className="teams-hawks-roster">
          <h1 style = {{textAlign: 'center', marginTop: '4rem'}}>ROSTER</h1>
          <div className="teams-players-container">
            <div className="container-players">
              <ul>

                <li className="hawks-players">
                  <div className="top">Trae Young</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png" } alt="Trae Young" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>G</h4>
                    </span>
                    <span>
                      <h4> 11</h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>USA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">John Collins</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1628381.png" } alt="John Collins" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>F-C</h4>
                    </span>
                    <span>
                      <h4> 20 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>USA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Bogdan Bogdanovic</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/203992.png" } alt="Bogdan Bogdanovic" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>G</h4>
                    </span>
                    <span>
                      <h4> 13 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>SRB</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">De'Andre Hunter</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1629631.png" } alt="De'Andre Hunter" className="player-picture"></img>
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

                <li className="hawks-players">
                  <div className="top">Kevin Huerter</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1628989.png" } alt="Kevin Huerter" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>G-F</h4>
                    </span>
                    <span>
                      <h4> 3 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>USA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Clint Capela</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/203991.png" } alt="Clint Capela" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>C</h4>
                    </span>
                    <span>
                      <h4> 15 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>SUI</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Danilo Gallinari</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/201568.png" } alt="Danilo Gallinari" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>F</h4>
                    </span>
                    <span>
                      <h4> 8 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>ITA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Onyeka Okongwu</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630168.png" } alt="Onyeka Okongwu" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>F-C</h4>
                    </span>
                    <span>
                      <h4> 17 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>USA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Dellon Wright</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1626153.png" } alt="Dellon Wright" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>G</h4>
                    </span>
                    <span>
                      <h4> 0 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>USA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Timothé Luwawu-Cabarrot</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1627789.png" } alt="Timothé Luwawu-Cabarrot" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>G-F</h4>
                    </span>
                    <span>
                      <h4> 7 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>FRA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Lou Williams</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/101150.png" } alt="Lou Williams" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>G</h4>
                    </span>
                    <span>
                      <h4> 6 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>USA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Chaundee Brown Jr.</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630602.png" } alt="Chaundee Brown Jr." className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>F</h4>
                    </span>
                    <span>
                      <h4> 38 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>USA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Gorgui Dieng</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/203476.png" } alt="Gorgui Dieng" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>C</h4>
                    </span>
                    <span>
                      <h4> 10 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>SEN</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Kevin Knox</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1628995.png" } alt="Kevin Knox" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>F</h4>
                    </span>
                    <span>
                      <h4> 5 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>USA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Skylar Mays</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630219.png" } alt="Skylar Mays" className="player-picture"></img>
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

                <li className="hawks-players">
                  <div className="top">Jalen Johnson</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630552.png" } alt="Jalen Johnson" className="player-picture"></img>
                  <div className="bottom">
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>F</h4>
                    </span>
                    <span>
                      <h4> 1 </h4>
                    </span>
                    <span>
                      <h4 style={{fontWeight: 'normal'}}>USA</h4>
                    </span>
                  </div>
                </li>

                <li className="hawks-players">
                  <div className="top">Sharife Cooper</div>
                  <img src={ "https://cdn.nba.com/headshots/nba/latest/1040x760/1630536.png" } alt="Sharife Cooper" className="player-picture"></img>
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

              </ul>
            </div>
          </div>
        </div>

        {/* about section */}
        <div>
          <h1 style={{textAlign: 'center'}}>About</h1>
          <h3 className="about-text">The Atlanta Hawks are an American professional basketball team based in Atlanta. The Hawks compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division. The team plays its home games at State Farm Arena.
            The team's origins can be traced to the establishment of the Buffalo Bisons in 1946 in Buffalo, New York, a member of the National Basketball League (NBL) owned by Ben Kerner and Leo Ferris. After 38 days in Buffalo, the team moved to Moline, Illinois, where they were renamed the Tri-Cities Blackhawks. In 1949, they joined the NBA as part of the merger between the NBL and the Basketball Association of America (BAA), and briefly had Red Auerbach as coach. In 1951, Kerner moved the team to Milwaukee, where they changed their name to the Hawks. Kerner and the team moved again in 1955 to St. Louis, where they won their only NBA Championship in 1958 and qualified to play in the NBA Finals in 1957, 1960 and 1961. The Hawks played the Boston Celtics in all four of their trips to the NBA Finals. The St. Louis Hawks moved to Atlanta in 1968, when Kerner sold the franchise to Thomas Cousins and former Georgia Governor Carl Sanders.
            The Hawks currently own the second-longest drought (behind the Sacramento Kings) of not winning an NBA championship at 63 seasons. The franchise's lone NBA championship, as well as all four NBA Finals appearances, occurred when the team was based in St. Louis. Meanwhile, they went 48 years without advancing past the second round of the playoffs in any format, until finally breaking through in 2015. However, the Hawks are one of only four NBA teams that have qualified to play in the NBA playoffs in 10 consecutive seasons in the 21st century. They achieved this feat between 2008 and 2017.</h3>
        </div>

      </div>
    );
  }
  
  export default Hawks;