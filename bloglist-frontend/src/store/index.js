import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import userReducer from '@reducers/user'
import blogReducer from '@reducers/blog'
import notifyReducer from '@reducers/notify'
import loginReducer from '@reducers/login'

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  user: userReducer,
  blog: blogReducer,
  notify: notifyReducer,
  login: loginReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
