import React from 'react'
import chatIcon from "../assets/chat.png"
const JoinCreateChat = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center ">
        <div className="p-10 dark:border-gray-700 border w-full max-w-md rounded dark:bg-gray-900 shadow" >
          <div>
            <img src={chatIcon} className="w-14 mx-auto "  />
          </div>
            <h1 className="text-2xl font-semibold text-center">  
                Join Room/Create Room
            </h1>
            {/*name div */}
            <div className="">
                <label htmlFor='name' className=' block font-medium mb-2'>Your Name</label>
                <input type='text' id="name" className='w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>
             {/*room id div */}
             <div className="">
                <label htmlFor='name' className=' block font-medium mb-2'>Room ID / New Room ID</label>
                <input type='text' id="name" className='w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>
            {/*button */}
            <div className='flex justify-center gap-5 mt-4'>
              <button className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-xl" >Join Room </button>
              <button className="px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-xl" >Create Room </button>
            </div>
        </div>
    </div>
  )
}

export default JoinCreateChat
