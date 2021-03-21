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
            <div className='col-lg-4 col-md-12 pt-3 pb-3'>
              <Box icon='fa fa-laptop fa-3x' title='WEB DESIGN & UI' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
            </div>
            <div className='col-lg-4 col-md-12 pt-3 pb-3'>
              <Box icon='fa fa-object-group fa-3x' title='title' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
            </div>
            <div className='col-lg-4 col-md-12 pt-3 pb-3'>
              <Box icon='fa fa-paint-brush fa-3x' title='title' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
            </div>
            <div className='col-lg-4 col-md-12 pt-3 pb-3'>
              <Box icon='fa fa-mobile fa-4x' title='MOBILE APP DESIGN' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
            </div>
            <div className='col-lg-4 col-md-12 pt-3 pb-3'>
              <Box icon='fa fa-first-order fa-3x' title='Logo design' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
            </div>
            <div className='col-lg-4 col-md-12 pt-3 pb-3'>
              <Box icon='fa fa-clone fa-3x' title='title' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
            </div>
          </div>
        </div>
      </div>
      <div className='test' />
    </div>
  )
}
