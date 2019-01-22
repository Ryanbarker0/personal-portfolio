import React, { Component } from 'react';
import { Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import SnapSpot from './components/Projects/Items/SnapSpot'
import QuizBuzz from './components/Projects/Items/QuizBuzz'
import MovieDB from './components/Projects/Items/MovieDB'
import About from './components/About'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Spring } from 'react-spring'

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
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (

    <div className='page'>
      <div className='nav-container'>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
      </div>      
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                  >
                  <div className='page'>
                 <Switch location={location}>
                    <Route exact path='/projects/snap-spot' component={SnapSpot} />
                    <Route path='/projects/quiz-buzz' component={QuizBuzz} />
                    <Route path='/projects/movie-database' component={MovieDB} />

                  </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
             )} />


            <Route exact path='/about' component={About} />
          </div>

      
    </div>
            )
  }

}


export default App;
