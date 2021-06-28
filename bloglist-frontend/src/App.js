import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from '@components/Nav'
import BlogDetail from '@pages/BlogDetail'
import UserDetail from '@pages/UserDetail'
import Users from '@pages/User'
import Home from '@pages/Home'
import Login from '@pages/Login'

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <h1>Blogs</h1>
        <Login />
        <Switch>
          <Route path='/users/:id'>
            <UserDetail />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/blogs'>
            <BlogDetail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
