import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Character } from './pages/Character'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Character />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
