import React from 'react'
import Header from '../src/components/header'
import Second from '../src/components/second'
import Third from '../src/components/third'
import Four from './components/four'
import Five from './components/five'
import Six from './components/Six'
import { Routes, Route } from "react-router-dom"
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Services from '../src/components/Services'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Second />
              <Third />
              <Four />
              <Five />
              <Six />
            </>
          }
        />
        
        <Route path="/about" element={<About />} />
<Route path='/contact' element={<Contact/>}/>
<Route path='/services' element={<Services/>}/>
      </Routes>
    </>
  )
}

export default App
