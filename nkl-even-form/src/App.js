import React, { Component } from 'react'
import NKL_Form1 from './components/NKL_Form1'
import NKL_Form2 from './components/NKL_Form2'
import NKL_Form3 from './components/NKL_Form3'

export default class App extends Component {
  handleSubmit = (param)=>{
    console.log(param);

  }
  render() {
    return (
      <div>
        <h1>even form - controlled Component</h1>
        <div>
          <NKL_Form1/>
          <NKL_Form2/>
          <NKL_Form3 onSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}
