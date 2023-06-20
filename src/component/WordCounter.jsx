import React, { useState } from "react";
import './style.css';

function WordCounter(){

    const [val , setVal ] = useState('');
    const [Word , setWord] = useState(0);

    const handleChange = (e)=>{
        const data = e.target.value.split(' ');
        console.log(data);

        setVal(e.target.value);
        setWord(data.length);
    }
    
    return (
        <body>
        <div className="container">
            <h1>Word Counter App</h1>
            <input value={val} onChange={(e)=>handleChange(e)} />
            <h3>Word Count:{Word}</h3>
        </div></body>
    );
}
export default WordCounter;