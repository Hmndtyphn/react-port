// importing all dependencies/ file paths
import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
// import Resume from '/Components/Resume';
// import Portfolio from './Components/Resume';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }
  
  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        {/* <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main} repos={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/> */}
      </div>
    );
  }
}


export default App;
