import React from 'react'
import './Box.scss'

export default function Box (props) {
  return (
    <div className='Performance row'>
      <div className='col-12 d-flex'>
        <div className=''>
          <i className='fa fa-laptop fa-3x' />
        </div>
        <div className='ml-3'>
          <p className='Performance__title'>{props.title}</p>
          <p className='Performance__content'>{props.content}</p>
        </div>
      </div>
    </div>
  )
}
