import React from 'react'
import styled from 'styled-components'
import formatMoney from './utils/formatMoney'

const StyledOrderSummary = styled.div`
  padding-left: 50px;
  width: 40%;

  h2 {
    margin-bottom: 35px;
  }

  .summary {
    width: 270px;

    .summary-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }
`

// The OrderSummary Component displays the price range total for all selected items
// It also shows how the price total compares to the users budget and allows them to submit their purchase

interface Item {
  type: string
  name: string
  lowPrice: number
  highPrice: number
  selected?: boolean
}

interface OrderSummaryProps {
  budget: string
  cart: Item[]
}
const OrderSummary: React.FC<OrderSummaryProps> = ({ budget, cart }) => {
  // calculate the upper price limit
  const upperPrice = cart.reduce((accum: number, current: Item) => {
    return accum + current.highPrice
  }, 0)

  // calculate the lower price limit
  const lowerPrice = cart.reduce((accum: number, current: Item) => {
    return accum + current.lowPrice
  }, 0)

  return (
    <StyledOrderSummary>
      <h2>Order Summary</h2>
      <div className="summary">
        <div className="summary-item">
          <div>Budget</div>
          <div>${formatMoney(Number(budget))}</div>
        </div>
        <div className="summary-item">
          <div>Price (Upper Limit)</div>
          <div>${formatMoney(upperPrice)}</div>
        </div>
        <div className="summary-item">
          <div>Price (Lower Limit)</div>
          <div>${formatMoney(lowerPrice)}</div>
        </div>
      </div>
    </StyledOrderSummary>
  )
}

export default OrderSummary
