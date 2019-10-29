import React, { Component } from "react";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";
import Toolbar from './components/Toolbar/Toolbar';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';

// import backgroundImage from './bkgLukasRobertson.jpg';
import backgroundImage from './BkgNASA.jpg';
import "./App.css";

console.log(process.env);

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
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

  render() {
    let backdrop;

    const childProps = {
    };

    if (this.state.sideSlideOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  
    return ( /*linear-gradient(30deg,rgba(97, 219, 219,0.1),rgba(36, 148, 208, 0.70)), */
      <div className="app" style={{ backgroundImage: `url(${ backgroundImage })`}}>
        <Toolbar sideSlideClickHandler={this.sideSlideToggleClickHandler}/>
        <Sidebar show={this.state.sideSlideOpen}/>
        {backdrop}
        <div className="app__container">
          <Routes childProps={childProps} />
        </div>
        <Footer />
      </div>
    );
  }   
}

export default withRouter(App);
