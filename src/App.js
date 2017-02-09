import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store/store.config'
import * as actions from './actions/actiontypes'
import slides from './components/slides'
import './styles/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {width:null, height:null}
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentWillMount(){
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keyDownHandler);
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDownHandler);
    window.removeEventListener("resize", this.updateDimensions);
  }

  keyDownHandler(e) {
    let currentSlide = store.getState().slide.tick;
    if (e.keyCode == 37) 
      store.dispatch({type: actions.PREV_TICK});
    if (e.keyCode == 39) 
      store.dispatch({type: actions.NEXT_TICK});
  }

  updateDimensions(){
    this.setState({width: window.innerWidth-10, height: window.innerHeight-100})
  }

  render() {
    let CurrentSlide = slides[this.props.slide.slide]
    return (
      <div className="App">
        <div className="App-header">
          <h2>Compose and Pipe</h2>
        </div>
        <CurrentSlide width={this.state.width} height={this.state.height}/>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    slide: state.slide
  }
}

export default connect(mapStateToProps)(App);
