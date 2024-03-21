import React from "react";
import Aboutus from "../../public/images/Aboutus.jpg";
import "../styles/About.css";

import Header from "./Header";

export default function About() {
  return (
    <>
      <div id="mission-statement">
        <h1>About Us</h1>

        <p>
          As a group we share a common passion of learning different languages.
        </p>
      </div>
      <div className="container">
        <section className="about">
          <div className="image">
            <img src={Aboutus}></img>
          </div>
          <div className="content">
            <h2>Join us to learn</h2>
            <p>
              In our small team we are coming from different cultures and
              origins. we are proud to be part of team coming from different
              career background. Our journey of bootcamp has been very exciting.
              So for the group project we decided to build this application as
              for some of us English isn't our first language. Our mission was
              to create an application that would fulfil several needs; a
              translation tool, an English dictionary and a short quiz to help
              the user learn. We Incorporated a translation tool into our
              application with the idea of helping users who's first language
              isn't English. The quiz also further aids the user by revisiting
              the words and their meanings. This was accomplished by saving the
              search history of the user and using these words to generate the
              the short quiz
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
