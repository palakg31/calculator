import React,{useEffect} from 'react';
import './Keypad.scss';
import Key from '../Key/Key';
import {leftKeys,rightKeys} from './helper';

interface KeypadProps{
    onClick:(obj:any)=>void;
};

const Keypad:React.FC<KeypadProps>=({onClick})=>{

    useEffect(() => {
        let allKeys = [...leftKeys,...rightKeys];
        const validKeys = allKeys.map((key)=> key.label);
        document.onkeypress=(e)=>{
            const key = e.key;
            if(!key) return;
            if(validKeys.includes(key)){
                console.log(allKeys.find((btn)=>btn.label===key))
                onClick(allKeys.find((btn)=>btn.label===key))
            }
        };
    }, [])

    return(
        <div className='keypad-wrapper'>
            <div className='keypad-left'>
                {leftKeys.map((key,idx)=>{
                    return(
                        <Key block={key} key={idx} color={'grey'} onClick={onClick} fontColor={key.label==='Deg'?'cyan':undefined}/>
                    )
                })}
            </div>
            <div className='keypad-right'>
                {rightKeys.map((key,idx)=>{
                    return(
                        <Key block={key} key={idx} color={idx<3?'light-blue':(idx===3||idx===7||idx===11||idx===15||idx===19)?'blue':'white'} onClick={onClick}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Keypad;