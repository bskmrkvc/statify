import './ErrorStyles.css';
import { Link } from 'react-router-dom';
import sadball from '../../assets/img/sadbball.png';

function Search() {
    return (
      <div className="App">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <img className="sadball" src={sadball} alt="Error!"></img>
        <h1 className="error-404">404</h1>
        <h1 className="error">Error, page not found!</h1>
        <br></br><br></br><br></br>
        <h3 className="back-to-home"><Link to='/' style={{ color: '#000' }}>Back to home.</Link></h3>
      </div>
    );
  }
  
  export default Search;