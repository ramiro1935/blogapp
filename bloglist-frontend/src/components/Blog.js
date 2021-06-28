import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListContainer from '@components/atoms/List'

const Blog = ({ blog }) => {
  return (
    <ListContainer>
      <Link to={`blogs/${blog.id}`}>{`${blog.title} ${blog.author}`}</Link>
    </ListContainer>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
}

export default Blog
