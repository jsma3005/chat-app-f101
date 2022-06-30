import { Button } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom"

export const NotFound = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="w-1/3 text-center rounded p-7 bg-sky-300">
        <h1 className="mb-5 text-3xl font-bold text-white">Страница не найдена!</h1>
        <Button 
          variant="outline"
          colorScheme="messenger"
          onClick={goBack}
        >Вернуться назад</Button>
      </div>
    </div>
  )
}
