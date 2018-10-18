import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import Skills from "../components/Resume/Skills";
import Courses from "../components/Resume/Courses";
import References from "../components/Resume/References";

import courses from "../data/resume/courses";
import { skills, categories } from "../data/resume/skills";

const sections = ["Skills", "Courses", "References"];

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="/resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map(sec => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <NavLink to={"cv_latest.pdf"} target="_blank" className="nav-link">
        Resume
      </NavLink>
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />
    </article>
  </Main>
);

export default Resume;
