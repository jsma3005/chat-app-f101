import { Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { useMain } from '../hooks/useMain'

export const Page = () => {
  const isAuth = localStorage.getItem('uid')

  const [user, setUser] = React.useState(null)

  const { 
    handleAuth,
    postData,
    isLoading,
    users,
    goChatPage,
    patchLastLogin,
  } = useMain()

  const { 
    register,
    handleSubmit,
    formState: {
      errors,
    },
    setError,
  } = useForm()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const onAuth = () => {
    handleAuth()
      .then(res => {
        const tokenResponse = res._tokenResponse
        const user = res.user
        const isNewUser = tokenResponse.isNewUser

        setUser({
          email: tokenResponse.email,
          displayName: tokenResponse.displayName,
          firstName: tokenResponse.firstName,
          lastName: tokenResponse.lastName,
          userId: tokenResponse.localId,
          photoUrl: tokenResponse.photoUrl,
          metadata: user.metadata,
        })

        if (isNewUser) return onOpen()

        const userId = user.uid
        const isRegisteredUser = users.find(item => item.userId === userId)

        if (!isRegisteredUser) return onOpen()

        // когда, человек уже зареган на нашем сервисе
        localStorage.setItem('uid', userId)

        patchLastLogin(userId)
        
        goChatPage()
      })
  }

  const onSubmit = (data) => {
    const newData = {
      ...user,
      login: data.login.toLowerCase(),
    }

    const isUniqueLogin = !!users.find(item => item.login === data.login)

    if (!isUniqueLogin) return postData(newData, user.userId, onClose)

    setError('login', {
      message: 'Данный логин занят',
      type: 'validate',
    })
  }

  if (isAuth) return goChatPage()

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="p-5 font-bold text-center rounded-lg bg-primary">
          <h1 className="mb-3 text-4xl font-bold text-white">Hello, welcome to our F101 Chat App!</h1>
          <h2 className="text-3xl text-white">Please auth, to start using our chat app with Google!</h2>
          <FcGoogle 
            className="block w-12 h-12 mx-auto mt-4 cursor-pointer" 
            onClick={onAuth}
          />
        </div>
      </div>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Регистрация нового пользователя</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!!errors.login}>
              <FormLabel>Логин</FormLabel>
              <Input 
                placeholder="Введите ваш логин"
                {...register('login', { 
                  required: 'Обязательное поле',
                  minLength: {
                    message: 'Не менее 3 символов',
                    type: 3,
                  }
                })}
              />
              <FormErrorMessage>{errors.login?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" variant="outline" mr={3} onClick={onClose}>
              Закрыть
            </Button>
            <Button 
              variant="solid" 
              colorScheme="green"
              onClick={handleSubmit(onSubmit)}
              isLoading={isLoading}
            >Зарегистрироваться</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
