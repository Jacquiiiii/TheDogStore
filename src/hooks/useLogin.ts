import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginSuccess, setUserId } from '../store/slices/loginSlice'
import { useFindUserMutation } from '../store/slices/usersApiSlice'

const useLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [findUser] = useFindUserMutation()

  const handleSubmit = async () => {
    try {
      const response = await findUser({ email, password })

      if ('data' in response && response.data && response.data.existingUser) {
        dispatch(loginSuccess())
        dispatch(setUserId(response.data.existingUser.id.toString()))
        localStorage.setItem('jwtToken', response.data.token)
        navigate('/')
      } else {
        alert('Invalid email address or password')
      }
    } catch (error) {
      alert('An error occurred while logging in. Please try again later.')
    }
  }

  return { setEmail, setPassword, handleSubmit }
}

export default useLogin
