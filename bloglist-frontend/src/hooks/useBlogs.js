import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBlog, getAllBlog } from '../reducers/blog'
export const useBlogs = () => {
  const blogs = useSelector(state => state.blog)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllBlog())
  }, [dispatch])

  const create = async newBlog => {
    await dispatch(createBlog(newBlog))
  }

  return [blogs, { create }]
}
