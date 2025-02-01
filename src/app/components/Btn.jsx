"use client"
import React, { useState } from 'react';

const Btn = () => {
    const [count , setCount ]= useState(0);
    const handleClick=()=>{
        let counts =count+1;
        setCount(counts)
        console.log('hello under the btn components', count)
    }
    return (
        <div>
            <div>
                <button onClick={handleClick} className="bg-green-500 p-3">Click me </button>
            </div>
        </div>
    );
};

export default Btn;
