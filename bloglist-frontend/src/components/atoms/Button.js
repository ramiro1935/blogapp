import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonContainer = styled.button`
  height: 30px;
  background: ${props => (props.type === 'primary' ? '#b14141' : 'green')};
  color: white;
  border-radius: 5px;
`

const Button = ({ value, type = 'primary', onClick = () => {} }) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {value}{' '}
    </ButtonContainer>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Button
