import Nav from './components/core/Nav'
import Foods from './components/common/Foods'
import Drinks from './components/common/Drinks'
import SafeArea from 'react-safe-area-component'

import './global.css'

function App() {
  return (
    <>
      <SafeArea top bottom>
        <Nav />
      </SafeArea>
      <Foods />
      <Drinks />
    </>
  )
}

export default App
