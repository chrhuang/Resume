import React, { Component } from 'react'
import './Who.scss'

export default class Who extends Component {
  render () {
    return (
      <div className='Who'>
        <div className='title'>
          Who <b>Am i</b>?
        </div>
        <div className='me'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque nostrum nemo natus ducimus molestiae maxime. Neque dicta cum et eos, quidem eaque veritatis laudantium nemo sint? Sapiente, deleniti fuga?
        </div>
        <div className='me'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque nostrum nemo natus ducimus molestiae maxime. Neque dicta cum et eos, quidem eaque veritatis laudantium nemo sint? Sapiente, deleniti fuga?
        </div>
        <div className='download'>
          Download my cv
        </div>
      </div>
    )
  }
}
