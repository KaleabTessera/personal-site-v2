import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Main from "../layouts/Main";

import data from "../data/contact";

const messages = [
  "hi",
  "hello",
  "hola",
  "you-can-email-me-at-literally-anything! Really",
  "well, not anything. But most things",
  "like-this",
  "or-this",
  "but not this :(  ",
  "you.can.also.email.me.with.specific.topics.like",
  "just-saying-hi",
  "please-work-for-us",
  "help",
  "admin",
  "or-I-really-like-your-website",
  "I'll-stop-distracting-you-now",
  "thanks"
];

// Validates the first half of an email address.
const validateText = text => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char: 2,
      idx: 0,
      hold: 20,
      message: messages[0]
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    let { idx, char } = this.state;
    if (char - this.state.hold >= messages[idx].length) {
      idx += 1;
      char = 0;
    }
    if (idx === messages.length) {
      clearInterval(this.timer);
    } else {
      this.setState({
        idx,
        char: char + 1,
        message: messages[idx].slice(0, char + 1)
      });
    }
  }

  render() {
    const { message } = this.state;
    return (
      <Main>
        <Helmet title="Contact" />
        <article className="post" id="contact">
          <header>
            <div className="title">
              <h2>
                <Link to="/contact">Contact</Link>
              </h2>
            </div>
          </header>
          <div className="email-at">
            <p>Feel free to get in touch. You can email me at: </p>
            <a href={`mailto:kaleabtessera@gmail.com`}>
              <span>kaleabtessera@gmail.com</span>
            </a>
          </div>
          {/* </div> */}
          <ul className="icons">
            {data.map(s => (
              <li key={s.label}>
                <a href={s.link}>
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </article>
      </Main>
    );
  }
}

export default Contact;
