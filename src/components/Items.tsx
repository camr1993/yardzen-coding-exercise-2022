import React from 'react'
import styled from 'styled-components'

const StyledItems = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    height: 7px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  &::-webkit-scrollbar-track {
    margin-top: 2px;
  }
`

// The Items component...

interface Item {
  type: string
  name: string
  lowPrice: number
  highPrice: number
}

interface ItemsProps {
  items: Item[]
}
const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <StyledItems className="modal show-scroll">
      {items.map((el, i) => {
        return (
          <div key={el.name + i}>
            <div>{el.name}</div>
            <div>{el.type}</div>
            <div>{el.lowPrice}</div>
            <div>{el.highPrice}</div>
          </div>
        )
      })}
    </StyledItems>
  )
}

export default Items
