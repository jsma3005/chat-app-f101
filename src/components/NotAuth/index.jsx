import { Button } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom"

export const NotAuth = () => {
  const navigate = useNavigate()

  const goAuthPage = () => navigate('/')

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="w-1/3 text-center rounded p-7 bg-sky-300">
        <h1 className="mb-5 text-3xl font-bold text-white">Вы не авторизованы!</h1>
        <Button 
          variant="outline"
          colorScheme="messenger"
          onClick={goAuthPage}
        >Авторизоваться</Button>
      </div>
    </div>
  )
}