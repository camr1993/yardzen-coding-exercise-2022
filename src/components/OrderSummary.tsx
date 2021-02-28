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
    min-width: 270px;
    max-width: 400px;
    font-size: 18px;

    .summary-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    hr {
      margin-bottom: 20px;
    }

    .result {
      display: flex;
      align-items: center;
      margin-top: 20px;
    }
    .bi-check-circle {
      color: #0cbd0c;
      margin-right: 10px;
    }
    .bi-x-circle {
      color: #f32020;
      margin-right: 10px;
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
        <hr />
        <div>Your Budget is...</div>
        {Number(budget) < lowerPrice && (
          <div className="result">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <div>Not Enough for the Selected Items</div>
          </div>
        )}
        {Number(budget) > lowerPrice && Number(budget) < upperPrice && (
          <div className="result">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
            <div>Within the Upper/Lower Price Ranges</div>
          </div>
        )}
        {Number(budget) > upperPrice && (
          <div className="result">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
            <div>Enough to Cover Your Items!</div>
          </div>
        )}
      </div>
    </StyledOrderSummary>
  )
}

export default OrderSummary
