import React, { Component } from 'react'
import './Navbar.scss'

export default class Navbar extends Component {
  state = {
    theposition: window.pageYOffset
  };

  componentDidMount () {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    console.log(winScroll)
    const navbar = document.getElementsByClassName('top-navbar')
    if (winScroll === 0) {
      navbar[0].classList.remove('scroll')
    } else {
      navbar[0].classList.add('scroll')
    }
    this.setState({
      theposition: winScroll
    })
  }

  render () {
    return (
      <div className='top-navbar'>
        <div className='container'>
          <div className=' d-flex justify-content-between align-items-center'>
            <div className='profile d-flex align-items-center'>
              <img className='photo' src='photo.jpg' alt='avatar' />
              <div className='name'>
                Christian <b>HUANG</b>
                <br />
                <b>Web</b> Developer
              </div>
            </div>
            <div className='d-flex'>
              <ul className='d-flex'>
                <li className='active'>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
