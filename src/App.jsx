import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/RevenueCard'
import RevenueCard from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div class = 'grid grid-cols-1 md:grid-cols-3'>
          <div class = 'bg-red-500 '>
            Hi there from div1
          </div>
          <div class = 'bg-blue-500 col-span-1'>
            Hi there from div2
          </div>
          <div class = 'bg-yellow-500'>
            Hi there from div3
          </div>
        </div>
        <div className = 'bg-blue-500 md:bg-red-500'>
          Checking
        </div >
        <div class ='grid grid-cols-3'>
        <RevenueCard></RevenueCard>
        </div>
    </>
  )
}

export default App
