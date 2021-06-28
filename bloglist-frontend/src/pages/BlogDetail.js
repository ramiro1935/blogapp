import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { getBlogById } from '@reducers/blog'
import { updateBlog as update, deleteBlog as remove } from '@reducers/blog'
import CommentList from '@components/CommentList'
import CommentForm from '@components/CommentForm'

const BlogDetail = () => {
  const blog = useSelector(state => state.blog.selectedBlog)
  const blogs = useSelector(state => state.blog.blogs)
  const match = useRouteMatch('/blogs/:id')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlogById(match.params.id))
  }, [blogs])

  const updateBlog = async blog => dispatch(update(blog))

  const deleteBlog = async blog => {
    const confirm = window.confirm(
      `Remove blog ${blog.title} by ${blog.author}`
    )
    if (confirm) {
      dispatch(remove(blog))
    }
  }
  if (!blog) return null
  return (
    <div className='blogdetail'>
      <h2>{blog.title}</h2>
      <a href={blog.url}>{blog.url}</a>
      <p className='likes'>
        {blog.likes}{' '}
        <button className='likeButton' onClick={() => updateBlog(blog)}>
          like
        </button>
      </p>
      <button className='removeButton' onClick={() => deleteBlog(blog)}>
        remove
      </button>
      <h4>Added by {blog.author}</h4>
      <h2>Comments</h2>
      <CommentForm blogId={blog.id} />
      <CommentList blog={blog} />
    </div>
  )
}

export default BlogDetail
