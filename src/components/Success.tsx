import React from 'react'
import styled from 'styled-components'

const StyledSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .success-div {
    font-size: 28px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  .bi-check-circle {
    color: #0cbd0c;
  }

  .button-div {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      color: #f5f4f4;
      font-size: 16px;
      border-radius: 5px;
      padding: 10px 20px;
      background-color: #667eea;
      cursor: pointer;
      transition: background-color 0.3s ease;
      box-shadow: none;
      border: none;

      &:hover {
        background-color: #849aff;
      }
    }
  }
`

// The Budget component displays an input for the user to enter in their desired budget
// Upon submitting their budget, the user is shown a page displaying Items and their Cart

interface SuccessProps {
  setModalStage: (num: number) => void
}
const Success: React.FC<SuccessProps> = ({ setModalStage }) => {
  return (
    <StyledSuccess>
      <div className="success-div">Success!</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        className="bi bi-check-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
      </svg>

      <div className="button-div">
        <button type="submit" onClick={() => setModalStage(1)}>
          Start Over
        </button>
      </div>
    </StyledSuccess>
  )
}

export default Success
