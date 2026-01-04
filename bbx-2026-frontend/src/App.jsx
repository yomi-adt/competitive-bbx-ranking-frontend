import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './views/Home'
import Rankings from './views/Rankings'
import NotFound from './views/NotFound'
import Organizer from './views/Organizer'
import ComingSoon from './views/ComingSoon'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/organizer" element={<Organizer />} />
        <Route path="/tournaments" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
