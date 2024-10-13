import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen w-full flex flex-col items-center justify-center'>
    <h1 className='font-bold text-[2rem] text-white'>Inscreva-se</h1>
    <p className='text-white'>Assine e matenha-se informado</p>
    <div className='w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg shadow-lg'>
      <Form />
    </div>
   </div>
  )
}

export default App
