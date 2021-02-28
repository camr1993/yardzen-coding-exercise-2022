import React from 'react'
import styled from 'styled-components'

const StyledSelection = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
`

// The Selection component allows a user to see a list of items and add them to their cart

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
  return (
    <StyledSelection>
      <div className="modal items">Items</div>
      <div className="modal cart">Cart</div>
    </StyledSelection>
  )
}

export default Selection
