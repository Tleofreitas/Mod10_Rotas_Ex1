import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import HomeBody from './routes/Home/HomeBody'
import Promotion from './routes/Home/Promotion/inde'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<HomeBody />} />
          <Route path="promotion" element={<Promotion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
