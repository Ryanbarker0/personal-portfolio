import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import SnapSpot from './components/Projects/Items/SnapSpot'
import QuizBuzz from './components/Projects/Items/QuizBuzz'
import About from './components/About'

class App extends Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
    <div style={{height: '100%'}}>
     <div className='nav-container'>
      <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
    </div>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/projects/snapspot' component={SnapSpot} />
          <Route exact path='/projects/quizbuzz' component={QuizBuzz} />
          <Route exact path='/about' component={About} />

        </div>
      </Router>
    </div>
    )
  }

}


export default App;
