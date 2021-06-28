import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.input``

const Input = ({ ...rest }) => {
  return <InputContainer {...rest} />
}

export default Input
