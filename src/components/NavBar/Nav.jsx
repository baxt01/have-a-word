import React from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <>
    <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container-fluid">
        {/*<a className="nav-link" href="#">Home</a>*/}
        <NavLink to="app" className="nav-link">Home</NavLink> 
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="collapseNavbar">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    {/*<a className="nav-link" href="#">About</a>*/}
                    <NavLink to="about" className="nav-link">About</NavLink> 
                </li>
                <li className="nav-item">
                    {/*<a className="nav-link" href="//codeply.com">Translate</a>*/}
                    <NavLink to="translate" className="nav-link">Translate</NavLink> 
                </li>
                <li className="nav-item">
                    {/*<a className="nav-link" href="#myAlert" data-bs-toggle="collapse">Link</a>*/}
                    <NavLink to="quiz" className="nav-link">Quiz</NavLink> 
                </li>
            </ul>
            
        </div>
    </div>
</nav>
    </>
  )
}

export default Nav

