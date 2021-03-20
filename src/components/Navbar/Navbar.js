import React, { Component } from 'react'
import './Navbar.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import avatar from '../../img/photo.jpg'

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

  handleActive (props) {
    console.log('Coucou', props)
  }

  render () {
    return (
      <div className='top-navbar'>
        <div className='container'>
          <div className=' d-flex justify-content-between align-items-center'>
            <div className='profile d-flex align-items-center'>
              <img className='photo' src={avatar} alt='avatar' />
              <div className='name'>
                Christian <b>HUANG</b>
                <br />
                <b>Web</b> Developer
              </div>
            </div>
            <div className='d-flex'>
              <ul className='d-flex'>
                <li className='active' onClick={this.handleActive.bind(1)}>
                  <AnchorLink style={{ textDecoration: 'none' }} href='#carouselCV'>Home</AnchorLink>
                </li>
                <li>
                  <AnchorLink style={{ textDecoration: 'none' }} href='#About'>About</AnchorLink>
                </li>
                <li>
                  <AnchorLink style={{ textDecoration: 'none' }} href='#Services'>Services</AnchorLink>
                </li>
                {/* <li> */}
                {/* <AnchorLink style={{ textDecoration: 'none' }} href='#Contact'>Contact</AnchorLink> */}
                {/* </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
