import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';


class PaymentsButton extends Component {

  render() {
    return (
        <StripeCheckout
          name="Test Payment"
          description="add credits"
          amount={1000}
          token={ token => this.props.handlePaymentToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn">
            Add Credits
          </button>
        </StripeCheckout>
    );
  }
}

export default connect(null, actions)(PaymentsButton);