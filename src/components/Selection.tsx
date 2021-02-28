import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Items from './Items'
import firebase from '../Firebase'

const StyledSelection = styled.div`
  width: 80vw;
  max-height: 500px;
  background-color: #f5f4f4;
  border-radius: 5px;
  display: flex;
  padding: 30px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`

// The Selection component allows a user to see a list of items and add them to their cart

interface Item {
  type: string
  name: string
  lowPrice: number
  highPrice: number
}
interface SelectionProps {
  modalStage: number
  setModalStage: (num: number) => void
  budget: number | string
}
const Selection: React.FC<SelectionProps> = ({
  modalStage,
  setModalStage,
  budget,
}) => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    loadItemsToState()
  }, [])

  // This function loads the 'items' collection from firestore and saves it on state
  const loadItemsToState = () => {
    const itemsRef = firebase.db.collection('items')

    itemsRef.get().then((querySnapshot) => {
      const itemArr = [] as Item[]
      querySnapshot.forEach((doc) => {
        const item = doc.data() as Item
        itemArr.push(item)
      })
      setItems(itemArr)
    })
  }

  console.log('ITEMSSS', items)
  return (
    <>
      {items.length > 0 && (
        <StyledSelection>
          <Items items={items} />
          <div>Cart</div>
        </StyledSelection>
      )}
    </>
  )
}

export default Selection
