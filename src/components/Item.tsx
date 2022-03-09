import React, { useRef } from 'react'
import styled from 'styled-components'
import formatMoney from './utils/formatMoney'

const StyledItem = styled.div`
  display: flex;
  padding: 20px 10px;
  margin-right: 20px;
  cursor: pointer;
  border-bottom: 1px solid black;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3d7bee;
    /* background-color: #327bff; */
    color: #fff;
  }

  .item-name {
    font-weight: 600;
    margin-right: 30px;
  }

  &.selected {
    background-color: #3d7bee;
    color: #fff;
  }
`

// The Item component displays a singular item in the item list
interface ItemProps {
  name: string
  lowPrice: number
  highPrice: number
  selected?: boolean
}
const Item: React.FC<ItemProps> = ({
  name,
  lowPrice,
  highPrice,
  selected,
}) => {

  return (
    <StyledItem className={`${selected ? 'selected' : ''}`}>
      <div className="item-name">{name}</div>
      <div>
        Price Range: ${formatMoney(lowPrice)} - ${formatMoney(highPrice)}
      </div>
    </StyledItem>
  )
}

export default Item
