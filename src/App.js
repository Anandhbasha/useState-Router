// import React, { useState } from 'react'

// const App = () => {
//   const [dark,setDark] = useState('light')
//   const [count,setCount] = useState(0)
//   const handleClick = ()=>{    
//     setCount((curr)=>++curr)
//   }
//   const colorChange = ()=>{
//     // if(dark==="light"){
//     //   setDark("dark")
//     // }else{
//     //   setDark("light")
//     // }
//     setDark(dark==="light"?"dark":"light")
//   }
//   return (
//     <div className='App' style={{backgroundColor:dark==="light"?"white":"black"}}>
//       <button onClick={handleClick}>Click{count}</button>
//       <button onClick={colorChange}>Click{dark}</button>
//     </div>
//   )
// }

// export default App

import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './Pages/All/All'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import './App.css'

export const PassingValue = createContext()
const App = () => {
  const [count,setCount] = useState(0)
  return (
    <BrowserRouter>
      <PassingValue.Provider value={{count,setCount}}>     
      <div className='App'>
        <Navbar />
        <Routes>
            <Route path='/' element={<All />}/>
            <Route path='/mens' element={<Mens />}/>
            <Route path='/womens' element={<Womens />}/>
        </Routes>
      </div>
      </PassingValue.Provider>    
    </BrowserRouter>
  )
}

export default App