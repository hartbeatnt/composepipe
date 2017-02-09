import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/store.config';
import * as actions from '../../actions/actiontypes';

class Slide0 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nextSlide: 'Slide1',
      prevSlide: 'Slide0',
      tickCount: 1
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.slide.tick > this.state.tickCount) {
      store.dispatch({
        type: actions.SET_SLIDE, 
        slide: this.state.nextSlide,
        tick: 0
      })
    }
    if (nextProps.slide.tick < 0) {
      store.dispatch({
        type: actions.SET_SLIDE,
        slide: this.state.prevSlide,
        tick: 0
      })
    }
  }
  render(){
    return (
      <div className='title slide slide0'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      
        <h1>Presentation<br />Title</h1>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    slide: state.slide
  }
}

export default connect(mapStateToProps)(Slide0)