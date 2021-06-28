import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BlogList from '@components/ BlogList'
import BlogForm from '@components/BlogForm'

import NotifyComponent from '@components/Notify'
import Toggable from '@components/Toggable'
import { getAllBlog, createBlog } from '@reducers/blog'
import { getAllUsers } from '@reducers/user'

const Home = () => {
  const dispatch = useDispatch()
  const blogRef = useRef()
  const blogs = useSelector(state => state.blog.blogs)
  const notify = useSelector(state => state.notify)
  const userLogged = useSelector(state => state.login)

  useEffect(() => {
    dispatch(getAllBlog())
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [blogs])

  const createNewBlog = async newBlog => {
    dispatch(createBlog(newBlog))
    blogRef.current.toggleVisibilty()
  }

  return (
    <div>
      <NotifyComponent notify={notify} />
      {userLogged && (
        <Toggable buttonLabel={'create new note'} ref={blogRef}>
          <BlogForm createNewBlog={createNewBlog} />
        </Toggable>
      )}
      <BlogList blogs={blogs} />
    </div>
  )
}

export default Home
