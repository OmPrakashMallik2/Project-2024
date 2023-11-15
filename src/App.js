import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(110)

  const numInc = () => {
    setCount(count+1)
  }
  return (
    <div className='m-5  p-5 bg-slate-700 text-white'>
      <h1 className='font-bold text-5xl bg-blue-300 p-2'>{count}</h1>
      <button onClick={numInc} className='font-bold bg-green-300 rounded m-2 justify-center p-2'>Click Here</button>
    </div>
  )
}

export default App


//hello