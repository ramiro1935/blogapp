import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoginForm from '@components/LoginForm'
import Toggable from '@components/Toggable'
import Button from '@components/atoms/Button'
import { login, logout, setUserFromLocalStorage } from '@reducers/login'
import styled from 'styled-components'

const UserLogged = styled.div`
  display: flex;
  justify-content: space-between;
  background: #dedcdc;
  color: #2f2d2d;
  padding: 10px;
  align-items: center;
`

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const userLogged = useSelector(state => state.login)

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('user')
    if (loggedUserJson) {
      dispatch(setUserFromLocalStorage(loggedUserJson))
    }
  }, [])

  const handleLogin = async user => dispatch(login(user))

  const handleLogout = e => {
    e.preventDefault()
    history.push('/')
    dispatch(logout())
  }

  return (
    <div>
      {!userLogged ? (
        <Toggable buttonLabel={'login'}>
          <LoginForm handleLogin={handleLogin} />{' '}
        </Toggable>
      ) : (
        <UserLogged>
          <p>Hello: {userLogged.username}</p>
          <Button onClick={handleLogout} value={'logout'}></Button>
        </UserLogged>
      )}
    </div>
  )
}

export default Login
