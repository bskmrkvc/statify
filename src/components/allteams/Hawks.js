
import logo from '../../assets/img/hawks.png';
import './AllTeams.css';

function Hawks() {
    return (
      <div className="App">
        <br></br><br></br><br></br><br></br><br></br><br></br>

        <div id="banner">
          <ul id="banner-list">
            <li>
              <h1 id="team-name"> 
                Atlanta 
                <br/> 
                Hawks. 
              </h1>
              <div>
                <h4>Location: Atlanta, Georgia</h4>
                <h4>Team Names: Atlanta Hawks, St. Louis Hawks, Milwaukee Hawks, Tri-Cities Blackhawks</h4>
                <h4>Seasons: 73; 1949-50 to 2021-22</h4>
                <h4>Championships: 1</h4>
              </div>
            </li>
            <li>
              <img src={logo} class="team-logo" alt="Atlanta Hawks Logo"></img>
            </li>
          </ul>
        </div>


        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>

      </div>
    );
  }
  
  export default Hawks;