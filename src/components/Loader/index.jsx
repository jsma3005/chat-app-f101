import { Spinner } from "@chakra-ui/react";
import React from "react";

export const Loader = ({ isFullPage = false }) => {

  const className = isFullPage ? 'h-screen' : 'my-7'

  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <Spinner
        size="xl"
        className="text-primary" 
        thickness='4px'
      />
    </div>
  )
}