import React from 'react'
import jumbotronPic from '../../public/images/jumbotron.jpg'
import "./Header.css"


export default function Header() {
  return (
    <div className="container-fluid">

      <div className="flex-row space-between px-1 header-jumbo">
        
        <img src={jumbotronPic} className="jumbo-image" alt="person reading" />
        <div className="centered"><h1>Welcome to Have a word!</h1></div>
      </div>
    </div>



  )
}

