import React from "react"
import { Route, Routes } from "react-router-dom"
import { NotAuth } from "../../components/NotAuth"
import { NotFound } from "../../components/NotFound"
import { ChatRoom } from "./pages/ChatRoom"
import { MainChatPage } from "./pages/MainChatPage"
import { Sidebar } from './components/Sidebar'

export const ChatLayout = () => {
  const isAuth = localStorage.getItem('uid')

  if (!isAuth) return <NotAuth />

  return (
    <div>
      <Sidebar />
      <Routes>
        <Route index element={<MainChatPage />} />
        <Route path="/:login" element={<ChatRoom />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}