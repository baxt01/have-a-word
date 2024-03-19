import React from 'react'
import jumbotronPic from '../../public/images/jumbotron.jpg'
import logo from '../../public/images/logo.png'
import "./Header.css"


export default function Header() {
  return (
    <div className="container-fluid">

      <div className="jumbo-image flex-row space-between px-1 header-jumbo">
        
      <img src={jumbotronPic} className="jumbo-image" alt="person reading" />
        
        <div className="centered"><h1>Welcome to Have a word!</h1>
        <span>A translation app, dictionary and learning quiz all in a few clicks.</span></div>
      </div>
    </div>



  )
}

