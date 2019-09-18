import React, { Component } from "react";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import Toolbar from './components/Toolbar/Toolbar';
import SideSlide from './components/SideSlide/SideSlide';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import Social from './components/SocialFollow/SocialFollow';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      sideSlideOpen: false
    };    
  }

  sideSlideToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideSlideOpen: !prevState.sideSlideOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideSlideOpen: false});
  }
  
  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }  

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
  
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }


  

  render() {
    let backdrop;

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    if (this.state.sideSlideOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  
    return (
      <div style={{height: '100%'}}>
        <Toolbar sideSlideClickHandler={this.sideSlideToggleClickHandler}/>
        <SideSlide show={this.state.sideSlideOpen}/>
        {backdrop}
        <main style={{marginTop: '56px'}}>
          <div className="appContainer">
            <Routes childProps={childProps} />
          </div>
        </main>
        <Social />
        {/* <Footer /> */}
      </div>
    );
  }   
}

export default withRouter(App);
