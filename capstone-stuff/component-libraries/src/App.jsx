import { Routes, Route } from 'react-router-dom'

import Mui from './pages/Mui'
import Bootstrap from './pages/Bootstrap'
import Antd from './pages/Antd'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/mui" element={<Mui />} />
        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/antd" element={<Antd />} />
      </Routes>
    </div>
  )
}

export default App
