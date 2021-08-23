import React from 'react';
import './Key.scss';

interface label{
    label:string;
    operation:string;
}

interface KeyProps{
    block:label;
    color?:'light-blue'|'blue'|'white'|'grey';
    onClick:(key:string)=>void;
};

const Key:React.FC<KeyProps>=({block,color,onClick})=>{
    return(
        <button className={`key-wrapper ${color}`} onClick={()=>onClick(block.operation)}>
            {block.label}
        </button>
    )
}

export default Key;