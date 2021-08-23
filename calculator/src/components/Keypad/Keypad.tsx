import React from 'react';
import './Keypad.scss';
import Key from '../Key/Key';
import {leftKeys,rightKeys} from './helper';

interface KeypadProps{
    onClick:(label:string)=>void;
};

const Keypad:React.FC<KeypadProps>=({onClick})=>{
    return(
        <div className='keypad-wrapper'>
            <div className='keypad-left'>
                {leftKeys.map((key,idx)=>{
                    return(
                        <Key block={key} key={idx} color={'grey'} onClick={onClick}/>
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