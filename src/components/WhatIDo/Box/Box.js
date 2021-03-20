import React from 'react'
import './Box.scss'

export default function Box (props) {
  return (
    <div className='Performance row'>
      <div className='col-3 d-flex justify-content-end'>
        <i className={props.icon} />
      </div>
      <div className='col-7'>
        <p className='Performance__title'>{props.title}</p>
        <p className='Performance__content'>{props.content}</p>
      </div>
    </div>
  )
}
