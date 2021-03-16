import React, { Component } from 'react'
import './Carousel.scss'

export default class Carousel extends Component {
  render () {
    return (
      <div id='carouselCV' class='carousel slide' data-ride='carousel' data-interval='500000'>
        <ol className='carousel-indicators'>
          <li data-target='#carouselCV' data-slide-to='0' class='active' />
          <li data-target='#carouselCV' data-slide-to='1' />
          <li data-target='#carouselCV' data-slide-to='2' />
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item carousel-item-1 active'>
            <div className='container h-100 mr-2 d-flex align-items-center'>
              <div>
                <p>
                  <b>"Website</b> without <b>visitors</b> is like <br />a <b>ship lost</b> in the <b>horizon"</b>
                </p>
                <p className='sub'>
                  I'm a <b>junior</b> web and mobile <b>developer</b><br />based in <b>Paris / Lille</b><br />
                  I make web and mobile applications
                </p>
                <div className='talk'>
                  Let's talk
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item carousel-item-2'>
            <div className='container h-100 mr-2 d-flex align-items-center'>
              <div>
                <p>
                  <b>"Website</b> without <b>visitors</b> is like <br />a <b>ship lost</b> in the <b>horizon"</b>
                </p>
                <p className='sub'>
                  I'm a <b>junior</b> web and mobile <b>developer</b><br />based in <b>Paris / Lille</b><br />
                  I make web and mobile applications
                </p>
                <div className='talk'>
                  Let's talk
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item carousel-item-3'>
            <div className='container h-100 mr-2 d-flex align-items-center'>
              <div>
                <p>
                  <b>"Website</b> without <b>visitors</b> is like <br />a <b>ship lost</b> in the <b>horizon"</b>
                </p>
                <p className='sub'>
                  I'm a <b>junior</b> web and mobile <b>developer</b><br />based in <b>Paris / Lille</b><br />
                  I make web and mobile applications
                </p>
                <div className='talk'>
                  Let's talk
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className='carousel-control-prev' href='#carouselCV' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#carouselCV' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Next</span>
        </a>
      </div>
    )
  }
}
