import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/store.config';
import * as actions from '../../actions/actiontypes';
import {Stage, Layer, Image} from 'react-konva';

class Slide1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nextSlide: 'Slide1',
      prevSlide: 'Slide0',
      tickCount: 1,
      image: null
    }
  }
  componentDidMount() {
    const image = new window.Image();
    image.src = 'http://img.pandawhale.com/post-22104-Tony-Hawk-assist-skateboard-gi-W5dt.gif';
    image.onload = () => {
      this.setState({
        image: image
      });
    }
  }
  componentWillReceiveProps(nextProps) {
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
          <Image />
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

export default connect(mapStateToProps)(Slide1)