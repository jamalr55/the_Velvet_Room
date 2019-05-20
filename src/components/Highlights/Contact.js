import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Fade>
        <div className="center_wrapper">
          <div className="discount_wrapper">
            <h2>Contact Us</h2>
            <div className="container">
              <form action="/action_page.php">
                <label>Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />

                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />

                <label>Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Contact;
