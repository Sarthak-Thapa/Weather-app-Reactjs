import React from 'react'
import TopButton from './Components/TopButton.jsx'
import Inputs from './Components/Inputs.jsx'
import TimeAndLocation from './Components/TimeAndLocation.jsx'
import TempAndDetails from './Components/TempAndDetails.jsx'
import Forcast from './Forcast.jsx'

const App = () => {
  return (
    // <div className="flex flex-col justify-center items-center">
      <div className='max-w-xlg bg-gradient-to-br px-32 py-5 text-white from-cyan-600 to-blue-700'>
      <TopButton/>
      <Inputs/>
      <TimeAndLocation/>
      <TempAndDetails/>
      <Forcast/>
      <Forcast/>
    </div>
    // </div>
    
  )
}

export default App