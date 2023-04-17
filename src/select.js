import React from "react";
import './App.css'
import { useState } from "react";
import Sum from './sum'

const Select=()=>{
    const [para, setpara]=useState(0);
    const change1 = ()=>{
        if(para>0){
           setpara(prevpara=>prevpara-1);
        }
        if(para-1>0){
           document.getElementsByClassName('left')[0].style.borderTopColor='#555';
           document.getElementsByClassName('left')[0].style.borderLeftColor='#555';
           if(para-1<2){
            document.getElementsByClassName('right')[0].style.borderRightColor='#555';
            document.getElementsByClassName('right')[0].style.borderTopColor='#555';
           }
        }
        else{
            document.getElementsByClassName('left')[0].style.borderLeftColor='lightgrey';
            document.getElementsByClassName('left')[0].style.borderTopColor='lightgrey';
            document.getElementsByClassName('right')[0].style.borderRightColor='#555';
            document.getElementsByClassName('right')[0].style.borderTopColor='#555';
        }
        
    }
    const change2 = ()=>{
        if(para<2){
            setpara(prevpara=>prevpara+1);
        }
        if(para+1<2){
            document.getElementsByClassName('right')[0].style.borderRightColor='#555';
            document.getElementsByClassName('right')[0].style.borderTopColor='#555';
            if((para+1)>0){
                document.getElementsByClassName('left')[0].style.borderLeftColor='#555';
                document.getElementsByClassName('left')[0].style.borderTopColor='#555';
            }
        }
        else{
            document.getElementsByClassName('right')[0].style.borderRightColor='lightgrey';
            document.getElementsByClassName('right')[0].style.borderTopColor='lightgrey';
            document.getElementsByClassName('left')[0].style.borderLeftColor='#555';
            document.getElementsByClassName('left')[0].style.borderTopColor='#555';
        }
    }
        return(
            <>
            <Sum para={para}/>
            <button className="left" onClick={change1}></button>
            <button className="right" onClick={change2}></button>
            </>
        )
    
}

export default Select