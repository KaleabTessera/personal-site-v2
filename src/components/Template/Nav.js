import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/me_icon.jpg" alt="" />
      </Link>
      <header>
        <h2>Kale-ab Tessera</h2>
        <p>
          <a href="mailto:kaleabtessera@gmail.com">kaleabtessera@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I'm Kale-ab, I like using software to build things, mainly machine learning related. <br /><br />
        {/* I am also passionate about technology and how it can be used to help the African continent. */}
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== "/resume" ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      {/* <p className="copyright">&copy; Michael D&apos;Angelo <Link to="http://mldangelo.com">mldangelo.com</Link>.</p> */}
    </section>
  </section>
);

export default Nav;
