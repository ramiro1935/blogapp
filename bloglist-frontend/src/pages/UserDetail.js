import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { getUserById } from '../reducers/user'

const UserDetail = () => {
  const match = useRouteMatch('/users/:id')
  const userSelected = useSelector(state => state.user.userSelected)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserById(match.params.id))
  }, [])
  return (
    <div>
      <h1>{userSelected.name}</h1>
      <h3>blogs added</h3>
      <ul>
        {userSelected?.blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserDetail
