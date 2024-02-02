"use client";
import React from 'react'
import data from './data'

export default function Sidebar() {
    const [active, setActive] = React.useState(4)
    return <>
        <div className="flex flex-col flex-1 max-w-20 items-center gap-2 py-20 px-8">
            {
                data.map((item, index) => {
                    return <div key={index} className={`rounded-2xl p-3 ${active === index ? 'bg-gray-800 text-blue-700' : 'hover:bg-gray-800'}`}>
                        {<item.icon className='text-3xl' />}
                    </div>
                })
            }
        </div>
    </>
}