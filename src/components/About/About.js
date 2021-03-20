import React, { Component } from 'react'
import Who from './Who/Who'
import Expert from './Expert/Expert'
import Box from './Box/Box'
import './About.scss'
import Educations from '../../ressources/educations.json'
import Experiences from '../../ressources/experiences.json'

export default class About extends Component {
  render () {
    return (
      <div id='About' className='About container flex-center'>
        <div className='title'>
          <b>ABOUT ME</b>
        </div>
        <div className='line' />
        <div className='row about-me'>
          <div className='col-lg-6 col-sm-12'>
            <Who />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <Expert />
          </div>
        </div>
        <div className='row info'>
          <div className='col-lg-6 col-sm-12'>
            <Box title='Edu' titleBis='cation' ressources={Educations.educations} />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <Box title='Ex' titleBis='perience' ressources={Experiences.experiences} />
          </div>
        </div>
      </div>
    )
  }
}
