import React, { useState } from "react";


export default function BackgroundChanger(){
    const [color, setColor] = useState("bg-white")
    return (
        <div className={`flex flex-col h-screen  ${color}`}>
            <div className="justify-center flex">
                <div className="flex gap-3 absolute bottom-6 px-4 py-1 rounded-lg shadow-lg shadow-slate-500">
                    <button onClick={()=>setColor('bg-red-700')} className="max-w-24 max-h-10 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ">
                        Red
                    </button>
                    <button onClick={()=>setColor('bg-blue-700')} className="max-w-24 max-h-10  focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  ">
                        Blue
                    </button>
                    <button onClick={()=>setColor('bg-white')} className="max-w-24 max-h-10  focus:outline-none text-black bg-white hover:bg-gray-400 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  ">
                        White
                    </button>
                    <button onClick={()=>setColor('bg-green-700')} className="max-w-24 max-h-10  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  ">
                        Green
                    </button>
                    <button onClick={()=>setColor('bg-purple-700')} className="max-w-24 max-h-10  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  ">
                        Purple
                    </button>
                    <button onClick={()=>setColor('bg-black')} className="max-w-24 max-h-10  focus:outline-none text-white bg-black hover:bg-black focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  ">
                        Black
                    </button>
                    <button onClick={()=>setColor('bg-orange-700')} className="max-w-24 max-h-10  focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  ">
                        Orange
                    </button>
                </div>
            </div>

        </div>
    )
}