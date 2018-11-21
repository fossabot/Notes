import React, {Component} from 'react';

class Help extends Component {
  render() {
    return (
        <main className="valign-wrapper">
          <ul>
           <li>
              <span className="container grey-text text-darken-1 ">
                <h4 className="brown-text text-darken-1">How to use this website?</h4>
                  <blockquote className="flow-text text-darken-1">First you need to add some credits in your account.
                    And then you can use the + button to start adding Notes in your account. </blockquote>
              </span>
           </li>
           <li>
             <span className="container grey-text text-darken-1 ">
                <h4 className="brown-text text-darken-1">How to add credits?</h4>
                <blockquote className="flow-text text-darken-1">use the ADD CREDITS button on the header</blockquote>
             </span>
           </li>
            <li>
              <span className="container grey-text text-darken-1 ">
                <h4 className="brown-text text-darken-1">Is my data Safe?</h4>
                <blockquote className="flow-text text-darken-1">Please dont put confidential data here as its a test project. But still you can find all the source code inside github url

                </blockquote>
              </span>
           </li>
            <li>
              <span className="container grey-text text-darken-1 ">
                <h4 className="brown-text text-darken-1">How much does it cost to create or delete a note?</h4>
                <blockquote className="flow-text text-darken-1">For testing each post cretion or deletion takes 1 cents</blockquote>
              </span>
            </li>
          </ul>
        </main>
    );
  }
}

export default Help;
