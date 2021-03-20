import React from 'react'
import Box from './Box/Box'
import './WhatIDo.scss'

export default function WhatIDo () {
  return (
    <div>
      <div id='Services' className='WhatIDo'>
        <div className='container flex-center'>
          <div className='title'>
            What i do
          </div>
          <div className='row w-100'>
            <div className='col-4'>
              <Box icon='fa fa-laptop' title='title' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
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
