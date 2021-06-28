import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import User from '@components/User'
import { getAllUsers } from '@reducers/user'

const UserPage = () => {
  const dispatch = useDispatch()

  const users = useSelector(state => state.user?.users ?? null)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <div>
      <User users={users} />
    </div>
  )
}

export default UserPage
