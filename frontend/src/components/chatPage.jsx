import React, { useRef, useState } from 'react'
import { MdAttachFile, MdSend } from 'react-icons/md';


const chatPage = () => {
    const [messages,setMessages]=useState([
        {
            content:"Hello ?",
            sender:"Vishnukanth",
    
        },
        {
            content:"Hello ?",
            sender:"Virat Kohli",
    
        },
        {
            content:"Hello ?",
            sender:"KL Rahul",
    
        },
        {
            content:"Hello ?",
            sender:"KL Rahul",
    
        },
        {
            content:"Hello ?",
            sender:"KL Rahul",
    
        },
        {
            content:"Hello ?",
            sender:"KL Rahul",
    
        },
        {
            content:"Hello ?",
            sender:"KL Rahul",
    
        },
        {
            content:"Hello ?",
            sender:"KL Rahul",
    
        },
        {
            content:"Hello ?",
            sender:"KL Rahul",
    
        },
        {
            content:"Hello ?",
            sender:"KL Rahul",
    
        },
        {
            content:"Hello ?",
            sender:"KL Rahul",
    
        },
        {
            content:"Hello ?",
            sender:"Vishnukanth",
    
        },
    ]);
    const[input,setInput]=useState("");
    const inputRef=useRef(null);
    const chatBoxRef=useRef(null);
    const [stompClient,setStompClient]=useState(null);
    const [roomId,setRoomd]=useState("");
    const [currentUser]=useState("Vishnukanth")
    
  return (
   <div className=''>
       <header className='dark:border-gray-700 fixed w-full dark:bg-gray-900 shadow py-5 flex justify-around items-center'> 
        {/* room name Container */}
            <div  >
                    <h1 className='text-xl font-semibold'> 
                        Room : <span>Family Room</span>
                    </h1>
            </div>
            {/* username Container */}
            <div>
                    <h1 className='text-xl font-semibold'> 
                                User : <span>Krishna</span>
                    </h1>
            </div>
            {/* leave room button Container */}
            <div>
                 <button className='dark:bg-red-500 dark:hover:bg-red-700 px-3 py-2 rounded-lg' >Leave Room</button>
            </div>
       </header>

      <main className="py-20 px-10 h-screen border w-2/3 dark:bg-slate-600 overflow-auto mx-auto ">
          {messages.map((message,index) =>(
            <div key={index} className={`flex ${message.sender===currentUser?"justify-end":"justify-start"}`}>
                <div className={`my-2 ${message.sender===currentUser?"bg-green-500 ":"bg-gray-800"} p-2 max-w-xs rounded`}>
                 <div className='flex flex-row gap-2'>
                    <img className="h-10 w-10" src="https://avatar.iran.liara.run/public/8 " alt=" "  />
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-bold'>{message.sender}</p>
                        <p>{message.content}</p>
                    </div>
                 </div>
            </div>
            </div>
          ))}
 
      </main>



       {/* input message container */}
      <div className='fixed bottom-2 w-full h-16'>
        <div className='h-full w-1/3 pr-10 flex gap-4 items-center justify-between mx-auto dark:bg-gray-900 rounded '>
              <input type="text" placeholder='Type Your Message Here ....'   
              className="dark:border-gray-600 w-full dark:bg-gray-800  px-5 py-2 rounded-full h-14 focus:outline-none" />

             <div className='flex gap-2'>
             <button className='dark:bg-gray-600 h-10 w-10  flex   justify-center items-center rounded-full' >
                    <MdAttachFile  size={22}/>
                </button>
                <button className='dark:bg-green-600 h-10 w-10  flex   justify-center items-center rounded' >
                    <MdSend  size={25}/>
                </button>
             </div>
        </div>
      </div>
   </div>
  ) 
};

export default chatPage
