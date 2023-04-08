import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  NavBar-bg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href='#'>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='#'>Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/about'>{props.aboutText}</Link>
            </li> */}
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'#4f5153':'white'}`}>
            <label className="form-check-label" htmlFor="switch1">Enable Dark Mode</label>
            <input className="form-check-input" type="checkbox" role="switch" id="switch1" onClick={props.toggleMode}/>
          </div>

        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes={
    title: PropTypes.string.isRequired,  // for this you need to send the props compulsory (you need to send >> or else by default)
    aboutText: PropTypes.string.isRequired
}


//if we arent sending any props we can add default props

NavBar.defaultProps={
    title: 'set title',
    aboutText: 'set about name'
}