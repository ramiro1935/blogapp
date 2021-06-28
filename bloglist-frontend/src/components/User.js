import React from 'react'
import { Link } from 'react-router-dom'

const UserRow = ({ user }) => {
  return (
    <tr>
      <td>
        <Link to={`users/${user.id}`}>{user.name}</Link>
      </td>
      <td>{user.blogs.length}</td>
    </tr>
  )
}

const User = ({ users }) => {
  console.log({ users })
  if (!users) return null
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key='user.id' user={user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default User
