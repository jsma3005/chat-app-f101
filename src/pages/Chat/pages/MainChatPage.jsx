import React from "react"
import { Sidebar } from "../components/Sidebar"

export const MainChatPage = () => {
  return (
    <div>
      <Sidebar />
      <h1 className="my-4 text-3xl text-center">Выберите собеседника, чтобы начать чат!</h1>
    </div>
  )
}
