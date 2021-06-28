import userService from '../services/user'
const initialState = {
  user: null,
  users: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_USERS':
      return { ...state, users: action.data }
    case 'SET_USER':
      return { ...state, userSelected: action.data }
    default:
      return state
  }
}

export const getAllUsers = () => {
  return async dispatch => {
    const response = await userService.getAll()
    dispatch({
      type: 'INITIALIZE_USERS',
      data: response,
    })
  }
}

export const getUserById = id => {
  return async dispatch => {
    const response = await userService.getById(id)
    dispatch({
      type: 'SET_USER',
      data: response,
    })
  }
}

export default userReducer
