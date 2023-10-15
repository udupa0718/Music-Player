import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Menu from "./component/Menu"
import Home from "./component/Home"
import About from "./component/About"
import Pnf from "./component/Pnf" 
import Tracks from './Screens/Tracks'

function App(props) {
  return (
      <BrowserRouter>
          <Menu/>

          <Routes>
              <Route path={`/`} element={<Home/>} />
              <Route path={`/about`} element={<About/>} />
              <Route path={`/track/artist/:id`} element={<Tracks/>} />
              <Route path={`/*`} element={<Pnf/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
