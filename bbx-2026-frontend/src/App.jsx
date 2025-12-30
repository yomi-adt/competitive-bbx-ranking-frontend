import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './views/Home'
import Rankings from './views/Rankings'
import NotFound from './views/NotFound'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
