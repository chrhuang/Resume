import React, { Component } from 'react'
import Who from './Who/Who'
import Expert from './Expert/Expert'
import './About.scss'

export default class About extends Component {
  render () {
    return (
      <div id='About' className='About container flex-center'>
        <div className='title'>
          <b>ABOUT ME</b>
        </div>
        <div className='line' />
        <div className='row about-me'>
          <div className='col-6'>
            <Who />
          </div>
          <div className='col-6'>
            <Expert />
          </div>
        </div>
      </div>
    )
  }
}
