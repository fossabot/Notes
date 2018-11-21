import React, {Component} from 'react';

class Help extends Component {
  render() {
    return (
        <main className="valign-wrapper">
          <ul>
           <li>
              <span className="container grey-text text-darken-1 ">
                <h4 className="brown-text text-darken-1">Usage Of personal Data</h4>
                  <blockquote className="flow-text text-darken-1">You data is not shared and neither read.
                    Its always in our database with proper encryption.
                    Only you can read your data. Its never used for marketing purposes</blockquote>
              </span>
           </li>

           <li>
              <span className="container grey-text text-darken-1 ">
                <h4 className="brown-text text-darken-1">Deletion of Data</h4>
                <blockquote className="flow-text text-darken-1">
                  You can decide to Delte youe data anytime. Goto Profile to find the options
                </blockquote>
              </span>
           </li>

          </ul>
        </main>
    );
  }
}

export default Help;