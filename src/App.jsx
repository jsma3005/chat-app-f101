import { initializeApp } from '@firebase/app'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import { baseUrl, firebaseConfig } from './configs'
import { Main } from './pages/Main'

initializeApp(firebaseConfig)

axios.defaults.baseURL = baseUrl

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main.Pages.MainPage />} />
        <Route path="/chat" element={<h1>Chat page</h1>} /> 
      </Routes>
    </div>
  )
}

export default App
