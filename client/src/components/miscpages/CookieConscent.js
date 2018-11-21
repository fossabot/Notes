import React, {Component} from 'react';
import CookieConsent from "react-cookie-consent";


class CookieConscent extends Component {
  render() {
    return (
        <CookieConsent
            location="top">
          This website uses cookies to enhance the user experience. This is a test project and we dont recommend you save any personal data here.
        </CookieConsent>
    );
  }
}

export default CookieConscent;
