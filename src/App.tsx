import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import img from './images/bg.jpg'
import Budget from './components/Budget'
import Selection from './components/Selection'
import Success from './components/Success'

const StyledApp = styled.div`
  background-image: url(${img});
  height: 100vh;
  background-position: center;
  background-size: cover;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  .overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;

    .welcome {
      max-width: 430px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      text-align: center;
      font-size: 18px;
      opacity: 1;
      transition: opacity 0.8s ease;
      margin: 30px;

      .title {
        font-size: 70px;
        margin-bottom: 10px;
      }

      button {
        color: #f5f4f4;
        font-size: 20px;
        margin-top: 30px;
        border-radius: 5px;
        padding: 10px 20px;
        background-color: #667eea;
        cursor: pointer;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        border: none;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #849aff;
        }
      }
    }

    .modal {
      background-color: #f5f4f4;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      min-width: 300px;
      min-height: 100px;
      padding: 30px;
      box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);

      @media screen and (max-width: 500px) {
        padding: 15px;
      }
    }

    .fly-in {
      animation: fly-in-animation 1s cubic-bezier(0.5, 0.25, 0, 1);
    }

    @keyframes fly-in-animation {
      0% {
        transform: translateY(100vh);
      }
      100% {
        transform: translateY(0%);
      }
    }

    .fade-in {
      animation: fade-in-animation 0.8s ease;
    }

    @keyframes fade-in-animation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`

// App contains a background picture and a container for components to be rendered in
// Initially just shows a welcome component
// Upon clicking 'Get Started', the the welcome component disappears and the user is prompted to enter in their budget
// Components are conditionally rendered depending on what 'modalStage' they are in (saved in state)

const App: React.FC = () => {
  const [modalStage, setModalStage] = useState<number>(0)
  const [budget, setBudget] = useState<string>('')
  const welcomeDiv = useRef<HTMLDivElement | null>(null)

  // Fades out the welcome screen and sets modalStage to 1 (which causes the budget component to fly in)
  const handleGetStarted = () => {
    if (welcomeDiv.current) {
      welcomeDiv.current.style.opacity = '0'
      setTimeout(function () {
        if (welcomeDiv.current) {
          welcomeDiv.current.style.display = 'none'
        }
        setModalStage(1)
      }, 800)
    }
  }

  return (
    <StyledApp>
      <div className="overlay"></div>
      <div className="container">
        <div ref={welcomeDiv} className="welcome">
          <div className="title">Welcome</div>
          <div>
            You want to create the outdoor space of you dreams, but need to know
            what you can afford. Let us help you work within your budget.
          </div>
          <button type="button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
        {modalStage === 1 && (
          <div className="modal fly-in">
            <Budget
              modalStage={modalStage}
              setModalStage={setModalStage}
              budget={budget}
              setBudget={setBudget}
            />
          </div>
        )}
        {modalStage === 2 && (
          <div className="fade-in">
            <Selection
              modalStage={modalStage}
              setModalStage={setModalStage}
              budget={budget}
            />
          </div>
        )}
        {modalStage === 3 && (
          <div className="modal fade-in">
            <Success setModalStage={setModalStage} />
          </div>
        )}
      </div>
    </StyledApp>
  )
}

export default App
