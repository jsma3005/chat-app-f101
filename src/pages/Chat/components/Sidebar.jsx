import { Avatar, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { CgMenuLeft } from 'react-icons/cg'
import { CurrentUser } from "../../../modules/user"
import { AiOutlineLogout } from 'react-icons/ai'
import { Loader } from "../../../components/Loader"
import { Chat } from ".."
import { showLastSignedIn } from "../../../helpers"

const isCurrentUser = (current, other) => {
  return current.userId === other.userId
}

const OtherUserCard = ({ user }) => {
  return (
    <>
      <p className="text-lg font-bold">{user.login}</p>
      <span className="text-gray-400">{showLastSignedIn(user.metadata.lastLoginAt)}</span>
    </>
  )
}

const CurrentUserCard = () => {
  return (
    <p className="text-lg font-bold">Избранное</p>
  )
}

export const Sidebar = () => {
  const { user: currentUser, logout } = CurrentUser.use()
  const {
    users,
    goToChatRoom,
  } = Chat.Hooks.MainChat.use()

  const { onClose, isOpen, onOpen } = useDisclosure()

  if (!currentUser) return <Loader isFullPage />

  return (
    <div>
      <div className="w-full p-4 bg-sky-300">
        <CgMenuLeft 
          className="w-8 h-8 cursor-pointer text-light" 
          onClick={onOpen}
        />
      </div>

      <Drawer  placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <div className="flex items-center">
              <Avatar name={`${currentUser.firstName} ${currentUser.lastName}`} src={currentUser.photoUrl} />
              <p className="ml-3">{currentUser.login}</p>
            </div>
          </DrawerHeader>
          <DrawerBody 
            className="overflow-auto"
            px={3}
          >
            {
              !users && <Loader />
            }

            {
              users && users.map(user => (
                <div 
                  className="flex items-center mb-3 border-b-[1px] pb-3 last:mb-0 last:border-b-0 cursor-pointer"
                  key={user.userId}
                  onClick={() => {
                    goToChatRoom(user.login)
                    onClose()
                  }}
                >
                  <Avatar 
                    name={`${user.firstName} ${user.lastName}`} 
                    src={user.photoUrl}
                  />

                  <div className="flex flex-col ml-4">

                    {
                      isCurrentUser(currentUser, user) 
                        ? <CurrentUserCard />
                        : <OtherUserCard user={user} />
                    }
                    
                  </div>
                </div>   
              ))
            }
          </DrawerBody>
          <DrawerFooter borderTopWidth='1px'>
            <AiOutlineLogout 
              className="cursor-pointer w-7 h-7"
              onClick={logout}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
    
  )
}