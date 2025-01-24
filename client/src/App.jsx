import './App.css'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Auth from './pages/auth/Auth'
import Dashboard from './pages/dashboard/Dashboard'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/auth" element={<Auth/>} />

    </Routes>
  )
}

export default App
