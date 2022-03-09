import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Items from './Items'
import db from '../Firebase'
import OrderSummary from './OrderSummary'

const StyledSelection = styled.div`
  width: 80vw;
  background-color: #f5f4f4;
  border-radius: 5px;
  display: flex;
  padding: 30px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 848px) {
    flex-direction: column;
    max-height: 90vh;
    padding-left: 50px;
  }
  @media screen and (max-width: 456px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

// The Selection component allows a user to see a list of items and add them to their cart

interface Item {
  type: string
  name: string
  lowPrice: number
  highPrice: number
  selected?: boolean
}
interface SelectionProps {
  modalStage: number
  setModalStage: (num: number) => void
  budget: string
}
const Selection: React.FC<SelectionProps> = ({
  modalStage,
  setModalStage,
  budget,
}) => {
  const [items, setItems] = useState<Item[]>([])
  const [cart, setCart] = useState<Item[]>([])

  useEffect(() => {
    loadItemsToState()
  }, [])

  // This function loads the 'items' collection from firestore and saves it on state
  // It also removes duplicates from firestore
  const loadItemsToState = () => {
    const itemsRef = db.collection('items')

    itemsRef.get().then((querySnapshot) => {
      const itemArr = [] as Item[]
      const seen: { [name: string]: boolean } = {}
      querySnapshot.forEach((doc) => {
        const item = doc.data() as Item
        item.selected = false
        item.lowPrice = item.lowPrice / 100
        item.highPrice = item.highPrice / 100
        if (!(item.name in seen)) {
          seen[item.name] = true
          itemArr.push(item)
        }
      })
      // sort item array by type property
      itemArr.sort((a, b) => {
        return a.type > b.type ? 1 : -1
      })
      setItems(itemArr)
    })
  }

  // When a user clicks on a item, this function will change the selected property on that item to true
  // It will also change any previously selected item in that group to have a selected property of false
  // Lastly, the cart is set to only include selected items
  const handleSelectItem = (item: Item) => {
    let filtered = items.filter((el) => {
      return el.type === item.type
    })
    filtered.forEach((el) => {
      if (el === item) {
        // if already selected then unselect it
        if (el.selected === true) {
          el.selected = false
          // else, select it
        } else {
          el.selected = true
        }
      } else {
        el.selected = false
      }
    })
    // set the cart to only selected Items
    setCart(
      items.filter((item) => {
        return item.selected === true
      })
    )
  }

  const handleSubmit = () => {
    // Add a new document in collection "cities"
    db
      .collection('cameronRatliffBudgetResponses')
      .doc('budget')
      .set({
        budgetResponses: cart,
      })
      .then(() => {
        console.log('Document successfully written!')
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
    setCart([])
    setModalStage(modalStage + 1)
  }

  return (
    <>
      {items.length > 0 && (
        <StyledSelection>
          <Items items={items} handleSelectItem={handleSelectItem} />
          <OrderSummary
            budget={budget}
            cart={cart}
            modalStage={modalStage}
            setModalStage={setModalStage}
            handleSubmit={handleSubmit}
          />
        </StyledSelection>
      )}
    </>
  )
}

export default Selection
