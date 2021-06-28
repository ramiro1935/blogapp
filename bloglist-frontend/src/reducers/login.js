import loginService from '../services/login'
import blogService from '../services/blogs'
import { setNotify } from './notify'
// reducer

const initialState = null

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN': {
      return { ...action.user }
    }

    case 'USER_LOGOUT':
      return null
    default:
      return state
  }
}

// actions creators
export const login = user => {
  return async dispatch => {
    try {
      const response = await loginService.login(user)
      dispatch({
        type: 'USER_LOGIN',
        user: response,
      })
      blogService.setToken(response.token)
      window.localStorage.setItem('user', JSON.stringify(response))
    } catch (error) {
      dispatch(
        setNotify({
          data: error.response.data.error,
          type: 'error',
        })
      )
    }
  }
}

export const setUserFromLocalStorage = user => {
  const userData = JSON.parse(user)
  return async dispatch => {
    dispatch({
      type: 'USER_LOGIN',
      user: userData,
    })
    blogService.setToken(userData.token)
    window.localStorage.setItem('user', JSON.stringify(userData))
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: 'USER_LOGOUT',
    })
    window.localStorage.removeItem('user')
  }
}

export default loginReducer
