import React from 'react'

const CommentForm = ({ blog }) => {
  console.log({ blog })
  return (
    <div>
      <ul>
        {blog.comments.map(comment => (
          <ul key={comment.id}>{comment.text}</ul>
        ))}
      </ul>
    </div>
  )
}

export default CommentForm
