import { useState } from 'react'

import { myPlants } from "./utils/test-data.js";
import './App.css'

import { PlantList } from './components/PlantList.jsx'
import { Button } from "./components/ui/Button"
import { PlantForm } from './components/PlantForm';

function App() {

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Plant Manager</h1>
      <PlantForm submitFn={(e) => {
        e.preventDefault();
        console.log("form submitted")

      }} />
      <div className='mx-auto py-3 text-2xl align-center mb-4 h-16 w-full max-w-5xl bg-purple-200'>
        Menu-buttons:
        <Button className="mx-2 w-11 h-11  bg-emerald-900 rounded-lg text-3xl text-white" type={"button"} text={"+"} clickFn={() => alert("Click-click-clik")} />
      </div>
      {myPlants && (<PlantList plants={myPlants} />)}
    </div>
  )
}

export default App
