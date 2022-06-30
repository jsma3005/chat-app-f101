import React from "react"
import { Route, Routes } from "react-router-dom"
import { NotAuth } from "../../components/NotAuth"
import { NotFound } from "../../components/NotFound"
import { MainChatPage } from "./pages/MainChatPage"

export const ChatLayout = () => {
  const isAuth = localStorage.getItem('uid')

  if (!isAuth) return <NotAuth />

  return (
    <Routes>
      <Route index element={<MainChatPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}