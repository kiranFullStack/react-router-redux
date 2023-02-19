import React from 'react'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import SingleArticle from './components/SingleArticle'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:id' element={<SingleArticle />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
