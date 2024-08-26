import React from "react";
import Links from "./Links";
import user from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default About;
