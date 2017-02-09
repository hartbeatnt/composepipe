import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/store.config';
import * as actions from '../../actions/actiontypes';
import {Stage, Layer, Text} from 'react-konva';
import { slide6text } from './slidetext/slidetext'

class Slide6 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nextSlide: 'Slide7',
      prevSlide: 'Slide5',
      tickCount: slide6text.length-1
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
      <Stage width={this.props.width} height={this.props.height}>
        <Layer>
          <Text 
            text={slide6text[this.props.slide.tick]}
            x={this.props.width*(1/2)-350} y={this.props.height/2-200}
            fontSize='28' fontFamily='courier' align='left'
          />
        </Layer>
      </Stage>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    slide: state.slide
  }
}

export default connect(mapStateToProps)(Slide6)