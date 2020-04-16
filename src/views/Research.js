import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import LinkRenderer from "../components/About/LinkRenderer";
import markdown from "../data/research.md";

const count = markdown
  .split(/\s+/)
  .map(s => s.replace(/\W/g, ""))
  .filter(s => s.length).length;

const Research = () => (
  <Main>
    <Helmet title="Research" />
    {/* <article className="post" id="about"> */}
    <article className="post">
      <header>
        <div className="title">
          <h2>
            <Link to="/research">Research</Link>
          </h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Research;