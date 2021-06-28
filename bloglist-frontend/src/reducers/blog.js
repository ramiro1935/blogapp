import blogService from '../services/blogs'
import { setNotify } from './notify'
// reducer
const initialState = {
  selectedBlog: null,
  blogs: [],
}
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_COMMENT': {
      const blogsAtStart = { ...state }
      const blogToUpdate = blogsAtStart.blogs.find(
        blog => blog.id === action.data.blog
      )

      blogToUpdate.comments = blogToUpdate.comments.concat({
        text: action.data.text,
        date: action.data.date,
        id: action.data.id,
      })

      return {
        ...blogsAtStart,
        blogs: blogsAtStart.blogs.map(blog =>
          blog.id === action.data.blog ? blogToUpdate : blog
        ),
      }
    }
    case 'CREATE_BLOG':
      return { ...state, blogs: [...state.blogs, action.data] }
    case 'UPDATE_BLOG': {
      return {
        selectedBlog: action.data,
        blogs: state.blogs.map(b =>
          b.id === action.data.id ? action.data : b
        ),
      }
    }
    case 'DELETE_BLOG':
      return {
        ...state,
        blogs: state.blogs.filter(b => b.id !== action.data.id),
      }
    case 'INITIALIZE_BLOGS':
      return { ...state, blogs: action.data }
    case 'SELECT_BLOG':
      return { ...state, selectedBlog: action.data }
    default:
      return state
  }
}

// actions creators
export const createBlog = blog => {
  return async dispatch => {
    try {
      const createdBlog = await blogService.create(blog)
      dispatch({
        type: 'CREATE_BLOG',
        data: createdBlog,
      })
      dispatch(
        setNotify({
          message: 'new blog was added',
          style: 'success',
        })
      )
    } catch (error) {
      dispatch(
        setNotify({
          message: error.response.data.error,
          style: 'error',
        })
      )
    }
  }
}

export const updateBlog = blog => {
  const blogToUpdate = { ...blog }
  blogToUpdate.likes = blogToUpdate.likes + 1
  return async dispatch => {
    try {
      await blogService.update(blogToUpdate)
      dispatch({
        type: 'UPDATE_BLOG',
        data: blogToUpdate,
      })
    } catch (error) {
      dispatch(
        setNotify({
          message: 'error',
          style: 'error',
        })
      )
    }
  }
}

export const deleteBlog = blog => {
  return async dispatch => {
    try {
      await blogService.remove(blog.id)
      dispatch({
        type: 'DELETE_BLOG',
        data: blog,
      })
    } catch (error) {
      dispatch(
        setNotify({
          message: error.response.data.error,
          style: 'error',
        })
      )
    }
  }
}

export const getAllBlog = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INITIALIZE_BLOGS',
      data: blogs,
    })
  }
}
// Comments
export const getBlogById = id => {
  return async dispatch => {
    const blogs = await blogService.getById(id)
    dispatch({
      type: 'SELECT_BLOG',
      data: blogs,
    })
  }
}

export const createComment = (blogId, text) => {
  return async dispatch => {
    try {
      const createdComment = await blogService.createComment(blogId, text)
      dispatch({
        type: 'CREATE_COMMENT',
        data: createdComment,
      })
    } catch (error) {
      dispatch(
        setNotify({
          message: error.response.data.error,
          style: 'error',
        })
      )
    }
  }
}
export default blogReducer
