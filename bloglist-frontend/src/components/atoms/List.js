import React from 'react'
import styled from 'styled-components'

const ItemList = styled.div`
  padding-top: 10px;
  padding-left: 2px;
  border: 1px solid;
  border-width: 1px;
  margin-botton: 5px;
  margin-top: 5px;
  background: #ffdc9c;
`

const List = props => {
  return <ItemList>{props.children}</ItemList>
}

export default List
