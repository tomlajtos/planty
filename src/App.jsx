import { useState } from 'react'
import './App.css'
import { PlantList } from './components/PlantList.jsx'
import { myPlants } from "./utils/test-data.js";

function App() {

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Plant Manager</h1>
      <div className='mx-auto py-3 text-2xl align-center mb-4 h-16 w-full min-w-fit max-w-5xl bg-purple-200'>
        Menu: add, select, etc.
      </div>
      {myPlants && (<PlantList plants={myPlants} />)}
    </div>
  )
}

export default App
