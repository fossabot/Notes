import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import Footer from './footer/Footer';
import Dashboard from './Landingpage/Dashboard';
import PostNew from './posts/newPost/PostNew';
import LandingPage from './Landingpage/LandingPage';
import About from './miscpages/About';
import Profile from './profile/Profile';
import Help from './miscpages/Help';
import Terms from './miscpages/Terms';
import CookieConscent from "./miscpages/CookieConscent";



class App extends Component {
  appCSS = {margin: "0 100px"};
  bodyCSS = { "min-height": "80vh"};

  componentDidMount() {
    console.log("Conponent Did mount in App");
    this.props.fetchUser();
  }

  render() {
    console.log("App component is rendering");
    return (
        <div>
          <BrowserRouter>
            <div className="container">
              <SideBar/>
              <div style={this.appCSS}>
                <CookieConscent/>
                <Header/>
                <div style={this.bodyCSS}>
                  <Route exact path="/" component={LandingPage}/>
                  <Route exact path="/post" component={Dashboard}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/help" component={Help}/>
                  <Route exact path="/usageterms" component={Terms}/>
                  <Route exact path="/profile" component={Profile}/>
                  <Route exact path="/post/new" component={PostNew}/>
                </div>
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </div>
    );
  }
}


export default connect(null, actions)(App);
