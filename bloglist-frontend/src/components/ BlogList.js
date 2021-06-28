import React from 'react'
import Blog from './Blog'
const BlogList = ({ blogs }) => {
  const sorted = [...blogs].sort((a, b) => b.likes - a.likes)
  return (
    <div id='blogList'>
      {sorted.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )
}
export default BlogList
