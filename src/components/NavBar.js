import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link,useLocation } from 'react-router-dom';

function NavBar(props) {
let location=useLocation();
  const [value, setValue] = useState("")
  let color="#111111"
  const handleOnChange=(e)=>
  {
    let enteredText=e.target.value
    setValue(enteredText)
    // console.log(value)

  }
  const handleOnSubmit=(evt)=>
  {
    evt.preventDefault();
    console.log(value)
    props.setText(value);
    props.setSearchBool(true);
    let queryVal="/"+value
    props.setQuery(queryVal)
    
  }
  const changeSearch=()=>
  {
    props.setSearchBool(false)
  }
    return (
<>
<nav className="navbar fixed-top navbar-expand-sm  navbar-dark" style={{backgroundColor:'#111111'}}>
  <div className="container-fluid">
    <div className="cont" >
    <Link className="navbar-brand " to="/" onClick={changeSearch} >
    <img src={require('./logo.jpg')} width="50" height="40" alt=""/>
  </Link>
    </div>
 
    {/* <Link className="navbar-brand" to="/" onClick={changeSearch}>News Today</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto me-auto mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link  ms-auto me-auto ${location.pathname==="/science"?"active":""}`} aria-current="page" to="/science" onClick={changeSearch}>Science</Link>
        </li>       
    </ul>
    <ul className="navbar-nav ms-auto me-auto mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link  ms-auto me-auto ${location.pathname==="/health"?"active":""}`}aria-current="page" to="/health"onClick={changeSearch}
           >Health</Link>
        </li>       
    </ul>
    <ul className="navbar-nav ms-auto me-auto mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link  ms-auto me-auto ${location.pathname==="/sports"?"active":""}`} aria-current="page" to="/sports" onClick={changeSearch}>Sports</Link>
        </li>       
    </ul>
    <ul className="navbar-nav ms-auto me-auto mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link  ms-auto me-auto ${location.pathname==="/entertainment"?"active":""}`} aria-current="page" to="/entertainment" onClick={changeSearch}>Entertainment</Link>
        </li>       
    </ul>
    <ul className="navbar-nav ms-auto me-auto mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link  ms-auto me-auto ${location.pathname==="/business"?"active":""}`} aria-current="page" to="/business" onClick={changeSearch}>Business</Link>
        </li>       
    </ul>
    <ul className="navbar-nav ms-auto me-auto mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link  ms-auto me-auto ${location.pathname==="/technology"?"active":""}`} aria-current="page" to="/technology" onClick={changeSearch}>Technology</Link>
        </li>       
    </ul>
    <ul className="navbar-nav ms-auto me-auto mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link  ms-auto me-auto ${location.pathname==="/bitcoin"?"active":""}`} aria-current="page" to="/bitcoin" onClick={changeSearch}>Bitcoin</Link>
        </li>       
    </ul>
    <form className="d-flex" role="search" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleOnChange}/ >
        <button className="btn btn-outline-primary" type="submit" onClick={handleOnSubmit}>Submit</button>
      </form>

      

    </div>
  </div>
</nav>
</>
  )
}



export default NavBar


