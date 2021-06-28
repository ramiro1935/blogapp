import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { createComment } from '../reducers/blog'
const CommentForm = ({ blogId }) => {
  const commentRef = useRef()
  const dispatch = useDispatch()

  const create = e => {
    e.preventDefault()
    console.log(commentRef.current.value)
    dispatch(createComment(blogId, commentRef.current.value))
    commentRef.current.value = ''
  }

  return (
    <form onSubmit={create}>
      <input type='' ref={commentRef} />
      <input type='submit' value='create comment' />
    </form>
  )
}

export default CommentForm
