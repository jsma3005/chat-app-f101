import React from "react"
import { useParams } from "react-router-dom"

export const ChatRoom = () => {
  const { login } = useParams()

  return (
    <div>
      <h1 className="text-center">Chat with <b>{login}</b></h1>
    </div>
  )
}