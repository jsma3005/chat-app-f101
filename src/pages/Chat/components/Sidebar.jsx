import { Avatar, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Spinner, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { CgMenuLeft } from 'react-icons/cg'
import { CurrentUser } from "../../../modules/user"

export const Sidebar = () => {
  const { user } = CurrentUser.use()

  const { onClose, isOpen, onOpen } = useDisclosure()

  if (!user) return null

  return (
    <div>
      <div className="w-full p-4 bg-sky-300">
        <CgMenuLeft 
          className="w-8 h-8 cursor-pointer text-light" 
          onClick={onOpen}
        />
      </div>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <div className="flex items-center">
              <Avatar name={`${user.firstName} ${user.lastName}`} src={user.photoUrl} />
              <p className="ml-3">{user.login}</p>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
    
  )
}