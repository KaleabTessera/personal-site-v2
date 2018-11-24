import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import header from "react-router-dom";

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome</Link>
          </h2>
        </div>
      </header>
      <p>
        Hi, I'm Kale-ab, a Computer Scientist based in Johannesburg. I am
        interested in Software Engineering, Machine learning and Artificial
        Intelligence. I am also passionate about technology and how it can be
        used to help the African continent. <br /> <br />
        Please feel free to read more <Link to="/about">about me</Link>, or you
        can check out my <Link to="/resume">resume</Link>,{" "}
        <Link to="/projects">projects</Link>, or{" "}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
