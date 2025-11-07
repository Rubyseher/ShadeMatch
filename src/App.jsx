import './App.css'
import Home from './frontend/screens/Home'
import Trial from './frontend/screens/Trial'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
