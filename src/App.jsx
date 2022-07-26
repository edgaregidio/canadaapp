import Nav from './components/core/Nav'
import Foods from './components/common/Foods'
import Drinks from './components/common/Drinks'
import Footer from './components/common/Footer'
import ScrollToTop from 'react-scroll-to-top'

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
    </>
  )
}

export default App
