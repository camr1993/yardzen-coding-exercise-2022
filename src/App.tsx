import React from 'react'
import { Counter } from './Counter'

function App() {
  return (
    <div>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  )
}

export default App
