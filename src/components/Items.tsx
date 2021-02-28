import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const StyledItems = styled.div`
  overflow-y: scroll;
  width: 60%;

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

// The Items component shows a grouped list of the available items to purchase

interface Item {
  type: string
  name: string
  lowPrice: number
  highPrice: number
  selected?: boolean
}

interface ItemsProps {
  items: Item[]
}
const Items: React.FC<ItemsProps> = ({ items }) => {
  // Find the different types of items (which will be used to group the item list shown)
  const uniqueTypes = items.reduce((accum: string[], current: Item) => {
    if (accum.indexOf(current.type) === -1) {
      accum.push(current.type)
    }
    return accum
  }, [])

  return (
    <StyledItems>
      {/* This section of code displays all the items grouped by type */}
      {uniqueTypes.map((type, i) => {
        return (
          <div key={type + i}>
            <h3>
              {type[0] + type.slice(1).replace(/[_]/g, ' ').toLowerCase()}
            </h3>
            {items
              .filter((el) => el.type === type)
              .map((el, i) => {
                return (
                  <Item
                    key={el.name + i}
                    type={el.type}
                    name={el.name}
                    lowPrice={el.lowPrice}
                    highPrice={el.highPrice}
                    selected={el.selected}
                  />
                )
              })}
          </div>
        )
      })}
    </StyledItems>
  )
}

export default Items
