import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div``

// The Items component...

interface ItemsProps {
  type: string
  name: string
  lowPrice: number
  highPrice: number
  selected?: boolean
}
const Item: React.FC<ItemsProps> = ({
  type,
  name,
  lowPrice,
  highPrice,
  selected,
}) => {
  return (
    <StyledItem>
      <div>{name}</div>
      <div>{lowPrice}</div>
      <div>{highPrice}</div>
    </StyledItem>
  )
}

export default Item
