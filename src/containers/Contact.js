import React from "react";
import "../styles/Contact.css";

class Contact extends React.Component {
  handleClick = e => {
    this.props.changeView(e);
  };
  render() {
    return (
      <div className="contact col-12 col-lg-6">
        <h1>Contact</h1>
        <h1>This is the page for the contact information.</h1>
        <button onClick={() => this.handleClick("landing")}>back</button>
      </div>
    );
  }
}

export default Contact;
