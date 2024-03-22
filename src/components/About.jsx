import React from "react";
import Aboutus from "../../public/images/Aboutus.jpg";
import "../styles/About.css";

import Header from "./Header";

export default function About() {
  return (
    <>
       <div className=" flex justify-center items-center">
        <div className='holder'>
              <h1>About us</h1>
        
      </div>
      <div className="container">
        <section className="about">
          <div className="image">
            <img src={Aboutus}></img>
          </div>
          <div className="content">
            <br></br>
            <h2>Join us to learn</h2>
            <p>
              In our small team we all come from different cultures and
              origins, and from different career background. Our bootcamp journey 
              has been very exciting and rewarding.
              <p></p>
              For the final group project we decided to build this application as
              for some of us English isn't our first language. Our mission was
              to create an application that would fulfil several needs; a
              translation tool, an English dictionary and a short quiz to help
              the user learn. We Incorporated a translation tool into our
              application with the aim of helping users who's first language
              isn't English. The quiz also further aids the user by revisiting
              the words and their meanings. This was accomplished by saving the
              search history of the user and using these words to generate the
              the short quiz
            </p>
          </div>
        </section>
      </div></div>
    </>
  );
}
