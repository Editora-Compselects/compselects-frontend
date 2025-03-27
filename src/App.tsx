import { useState } from 'react'
import './App.css'
import { Button } from '@radix-ui/themes'

function App() {
  return (
    <>
      <div className='grid grid-cols-2 justify-items-stretch gap-2 m-2'>
        <Button>Radix-UI funcionando</Button>
        <Button>Tailwind CSS funcionando</Button>
      </div>
    </>
  )
}

export default App
