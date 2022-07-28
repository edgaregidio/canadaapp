import Nav from './components/core/Nav'
import Foods from './components/common/Foods'
import Drinks from './components/common/Drinks'
import Footer from './components/common/Footer'
import ScrollToTop from 'react-scroll-to-top'

import { Icon } from '@iconify/react'

import './global.css'

function App() {
  return (
    <>
      <Nav />
      <ScrollToTop
        smooth
        viewBox="0 0 256 256"
        className="btnUp"
        width="22"
        color="#bc0623"
      />
      <Foods />
      <Drinks />
      <Footer />
      {/* <span
        style={{
          position: 'absolute',
          left: '30%',
          top: '45%',
          fontSize: 30
        }}
      >
        <p>Aguarde...</p>
        <span style={{ position: 'relative', left: '3.5rem', top: '2rem' }}>
          <Icon icon="eos-icons:loading" />
        </span>
      </span> */}
    </>
  )
}

export default App
