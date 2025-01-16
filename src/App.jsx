
import { useState } from 'react'
import Burger from './Burger'
import './index.css'
import Nav from "./Nav"
import Header from './Header'
import Head from './Head'
import Headerr from './Headerr'
import Heade from './Heade'
import Footer from './Footer'
const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (

    <div>
 
      <Nav
        setToggleMenu={setToggleMenu}
      />
      <Burger
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Header/>
      <Head/>
      <Headerr/>
      <Heade/>
      <hr />
      <Footer/>
    </div>
  )

}



export default App

