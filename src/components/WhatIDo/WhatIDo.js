import React from 'react'
import './WhatIDo.scss'

export default function WhatIDo () {
  return (
    <div>
      <div className='WhatIDo'>
        <div className='container flex-center'>
          <div className='title'>
            What i do
          </div>
          <div className='row w-100'>
            <div className='col-4'>
              <i className='fa fa-laptop' />
              Coucou
            </div>
            <div className='col-4'>
              <i className='fa fa-object-group' />
              Coucou
            </div>
            <div className='col-4'>
              <i className='fa fa-paint-brush' />
              Coucou
            </div>
            <div className='col-4'>
              <i className='fa fa-mobile' />
              Coucou
            </div>
            <div className='col-4'>
              <i className='fa fa-first-order' />
              Coucou
            </div>
            <div className='col-4'>
              <i className='fa fa-clone' />
              Coucou
            </div>
          </div>
        </div>
      </div>
      <div className='test' />
    </div>
  )
}
