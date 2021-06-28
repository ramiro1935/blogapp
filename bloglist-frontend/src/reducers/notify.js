const initialState = {}

// id notification
let id = 0

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFY':
      return { ...action.data }
    case 'CLEAR_NOTIFY':
      return {}
    default:
      return state
  }
}

export const setNotify = data => {
  return async dispatch => {
    if (id !== 0) clearTimeout(id)
    dispatch({
      type: 'SET_NOTIFY',
      data: data,
    })
    id = setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFY',
      })
    }, 3000)
  }
}

export default notifyReducer
