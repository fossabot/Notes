import React, {Component} from 'react';

class About extends Component {
  render() {
    console.log("Dashboard component is rendering", this.props);
    return (
        <main className="valign-wrapper">
          <span className="container grey-text text-darken-1 ">
            <h4 className="brown-text text-darken-1">Whats the purpose of this project?</h4>
            <blockquote className="flow-text text-darken-1">Learn about Node React and Redux</blockquote>
          </span>
        </main>
    );
  }
}

export default About;
