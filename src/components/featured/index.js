import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

// const Features = () => {
//   return (
//     <div style={{ position: 'relative' }}>
//       <Carrousel />
//       <div className="artist_name">
//         <div className="wrapper">Come Party With Us</div>
//       </div>

//       <TimeUntil />
//     </div>
//   );
// };

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your email was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Carrousel />
        <div className="artist_name">
          <form className="subscribe" onSubmit={this.handleSubmit}>
            <h2>Subscribe to stay informed</h2>
            <label>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter your email..."
              />
            </label>
            <input className="button" type="submit" value="Subscribe" />
          </form>
        </div>
        <TimeUntil />
      </div>
    );
  }
}

export default NameForm;
