import React, { Component } from 'react'
import './Expert.scss'
import ProgressBar from './ProgressBar/ProgressBar'

export default class Expert extends Component {
  render () {
    return (
      <div className='Expert'>
        <div className='title'>
          Expert <b>in</b>?
        </div>
        <div className='me'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque nostrum nemo natus ducimus molestiae maxime. Neque dicta cum et eos, quidem eaque veritatis laudantium nemo sint? Sapiente, deleniti fuga?
        </div>
        <ProgressBar name='C' percentage='90' />
        <ProgressBar name='Graphic Design' percentage='50' />
        <ProgressBar name='CSS' percentage='70' />
        <ProgressBar name='Javascript' percentage='80' />
        <ProgressBar name='React' percentage='60' />
      </div>
    )
  }
}
