import React, { Component } from 'react'
import Who from './Who/Who'
import Expert from './Expert/Expert'
import Box from './Box/Box'
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
        <div className='row info'>
          <div className='col-6'>
            <Box title='Edu' titleBis='cation' />
          </div>
          <div className='col-6'>
            <Box title='Ex' titleBis='perience' />
          </div>
        </div>
      </div>
    )
  }
}
