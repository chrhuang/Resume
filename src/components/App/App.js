import './App.scss'
import Navbar from '../Navbar/Navbar'
import Carousel from '../Carousel/Carousel'
import About from '../About/About'
import WhatIDo from '../WhatIDo/WhatIDo'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Carousel />
      <About />
      <WhatIDo />
    </div>
  )
}

export default App
