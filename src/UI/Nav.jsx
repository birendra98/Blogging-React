import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <span className="navbar-brand" >Tourist Blog</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link " to='/'>Home</Link>
          <Link className="nav-link" to='/blog'> Show Blog</Link>
          <Link className='nav-link' to='/register' >Register</Link>
          <Link className='nav-link' to='/login' >Login</Link>
          <Link className='nav-link' to='/contact' >Contact</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav