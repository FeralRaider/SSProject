import React, * as react from 'react';
import './App.css';
import Custom_Header from './components/header_custom';
import Footer_Custom from './components/footer_custom';
import { navigate } from './actions/navigationAction';
import {connect } from "react-redux";
import Home from './components/sections/home';
import About from './components/sections/about';
import Resume from './components/sections/resume';
import Contact from './components/sections/contact';
import Interests from './components/sections/interests';

class App extends react.Component {

  navigate(path) {
    this.props.dispatch(navigate(path))
  }

  selectSection(path) {
    switch(path) {
      case 'Home':
        return <Home></Home>;
      case 'About':
        return <About></About>;
      case 'Resume':
        return <Resume></Resume>;
      case 'Interests':
        return <Interests></Interests>;
      case 'Contact':
        return <Contact></Contact>;
      default:
        return <Home></Home>;
    }
  }

  render() {
    return (
      <div className="App">
        <Custom_Header navigation = {(path) => this.navigate(path) }></Custom_Header>
        { this.selectSection(this.props.navigation.path) }
        <Footer_Custom></Footer_Custom>
      </div>
    );
  }
}
App = connect(state => ({navigation: state.navigation}))(App);
export default App;
 