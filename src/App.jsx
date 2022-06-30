import { initializeApp } from '@firebase/app'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import { baseUrl, firebaseConfig } from './configs'
import { Chat } from './pages/Chat'
import { ChatLayout } from './pages/Chat/ChatLayout'
import { Main } from './pages/Main'

initializeApp(firebaseConfig)

axios.defaults.baseURL = baseUrl

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main.Pages.Page />} />
        <Route path="/chat/*" element={<ChatLayout />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
