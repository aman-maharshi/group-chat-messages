import React from 'react'
import { GearIcon, SendIcon } from './Icons'

const App = () => {
  return (
    <main className='bg-gray-200'>
      <div className='min-h-screen w-[1024px] mx-auto flex flex-col bg-white'>
        <div className='p-6 flex items-center justify-end h-[80px]'>
          <GearIcon
            color={"gray"}
          />
        </div>
        <div className='bg-[#f7f2f7] h-[calc(100vh-80px)] flex flex-col'>
          <div className='flex-1 px-8 py-4 h-[calc(100vh-200px)] overflow-y-auto'>
            
          </div>
          <div className='px-4 bg-white my-6 w-[900px] mx-auto rounded-md flex items-center gap-4'>
            <input 
              type="text" 
              className='flex-1 p-4 outline-none'
            />
            <div className='px-4'>
              <SendIcon 
                color={"gray"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App