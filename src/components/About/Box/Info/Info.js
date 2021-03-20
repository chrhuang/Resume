import React from 'react'
import './Info.scss'

export default function Info (props) {
  console.log(props)
  let last = null
  if (!props.last) {
    last = <hr />
  }
  return (
    <div className='Info row'>
      <div className='col-4 d-flex flex-column'>
        <p className='date'>
          {props.start}-{props.end}
        </p>
        <p className='place'>{props.place}</p>
      </div>
      <div className='col-8'>
        <p className='where'>{props.where}</p>
        <p className='desc'>{props.desc}</p>
        {last}
      </div>
    </div>
  )
}
