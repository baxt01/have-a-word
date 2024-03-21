import React from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md">
    {/* <div className="container-fluid"> */}
        <a className="navbar-brand abs" href="#">Home</a>
    <div id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark">
    <div id="navbar" className="container-fluid">
        <a className="nav-link abs" href="#">Home</a>
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
                    {/*<a className="nav-link" href="#myAlert" data-bs-toggle="collapse">Quiz</a>*/}
                    <NavLink to="quiz" className="nav-link">Quiz</NavLink> 
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    
                </li>
            </ul>
        </div>
    </div>
    </div>
    {/* </div> */}
</nav>
    </>
  )
}

export default Nav

