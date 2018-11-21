import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {

  render() {
    return (
        <footer className="page-footer blue-grey footer lighten-1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Need Help?</h5>
                <ul>
                  <li><a className="grey-text text-lighten-4" href="/help">FAQ</a></li>
                  <li><a className="grey-text text-lighten-4" href="/about">About</a></li>
                  <li><a className="grey-text text-lighten-4" href="/usageterms">Terms and Conditions</a></li>
                </ul>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Contact Us</h5>
                <ul>
                    <SocialIcon url="https://github.com/ayonious"/>
                    <SocialIcon url="https://www.linkedin.com/in/nahiyan-kamal-0782743a/" />
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made with ❤ during Hackathon
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;