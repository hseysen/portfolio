import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./components/MainPage/MainPage"
import Projects from './components/Projects'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </>
  )
}

export default App
