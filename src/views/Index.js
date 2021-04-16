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
        Welcome. Please feel free to read more <Link to="/about">about me</Link>, or you
        can check out my <Link to="/research">research</Link>, <Link to="/resume">resumé</Link>, <Link to="/projects">projects</Link>, or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
