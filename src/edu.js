import React from "react";
import { useState } from "react";
import './App.css'
import Swap from './swap'

const Edu=()=>{
    const [e, sete]=useState(0);
    const swap1 = ()=>{
        if(e>0){
           sete(preve=>preve-1);
        }
        if(e-1>0){
           document.getElementsByClassName('le')[0].style.borderTopColor='#555';
           document.getElementsByClassName('le')[0].style.borderLeftColor='#555';
           if(e-1<1){
            document.getElementsByClassName('ri')[0].style.borderRightColor='#555';
            document.getElementsByClassName('ri')[0].style.borderTopColor='#555';
           }
        }
        else{
            document.getElementsByClassName('le')[0].style.borderLeftColor='lightgrey';
            document.getElementsByClassName('le')[0].style.borderTopColor='lightgrey';
            document.getElementsByClassName('ri')[0].style.borderRightColor='#555';
            document.getElementsByClassName('ri')[0].style.borderTopColor='#555';
        }
        
    }
    const swap2 = ()=>{
        if(e<1){
            sete(preve=>preve+1);
        }
        if(e+1<1){
            document.getElementsByClassName('ri')[0].style.borderRightColor='#555';
            document.getElementsByClassName('ri')[0].style.borderTopColor='#555';
            if((e+1)>0){
                document.getElementsByClassName('le')[0].style.borderLeftColor='#555';
                document.getElementsByClassName('le')[0].style.borderTopColor='#555';
            }
        }
        else{
            document.getElementsByClassName('ri')[0].style.borderRightColor='lightgrey';
            document.getElementsByClassName('ri')[0].style.borderTopColor='lightgrey';
            document.getElementsByClassName('le')[0].style.borderLeftColor='#555';
            document.getElementsByClassName('le')[0].style.borderTopColor='#555';
        }
    }
    return(
        <div className='swap'>
            <Swap e={e}/>
            <button className="le" onClick={swap1}></button>
            <button className="ri" onClick={swap2}></button>
        </div>
    )
}   

export default Edu
