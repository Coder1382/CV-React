import React from 'react'
import { useState } from 'react'
import './App.css'
import Choice from './choice'

const Work=()=>{
    const [job, setjob]=useState(0);
    const set1 = ()=>{
        if(job>-2){
           setjob(prevjob=>prevjob-1);
        }
        if(job-1>-2){
           document.getElementsByClassName('lef')[0].style.borderTopColor='#555';
           document.getElementsByClassName('lef')[0].style.borderLeftColor='#555';
           if(job-1<0){
            document.getElementsByClassName('rig')[0].style.borderRightColor='#555';
            document.getElementsByClassName('rig')[0].style.borderTopColor='#555';
           }
        }
        else{
            document.getElementsByClassName('lef')[0].style.borderLeftColor='lightgrey';
            document.getElementsByClassName('lef')[0].style.borderTopColor='lightgrey';
            document.getElementsByClassName('rig')[0].style.borderRightColor='#555';
            document.getElementsByClassName('rig')[0].style.borderTopColor='#555';
        }
        
    }
    const set2 = ()=>{
        if(job<0){
            setjob(prevjob=>prevjob+1);
        }
        if(job+1<0){
            document.getElementsByClassName('rig')[0].style.borderRightColor='#555';
            document.getElementsByClassName('rig')[0].style.borderTopColor='#555';
            if((job+1)>-2){
                document.getElementsByClassName('lef')[0].style.borderLeftColor='#555';
                document.getElementsByClassName('lef')[0].style.borderTopColor='#555';
            }
        }
        else{
            document.getElementsByClassName('rig')[0].style.borderRightColor='lightgrey';
            document.getElementsByClassName('rig')[0].style.borderTopColor='lightgrey';
            document.getElementsByClassName('lef')[0].style.borderLeftColor='#555';
            document.getElementsByClassName('lef')[0].style.borderTopColor='#555';
        }
    }
    return(
        <div className='work'>
        <table className='job'>
            <caption><h3>work record</h3></caption>
            <tr>
                <td>Company</td> <td>Location</td> <td>Job</td> <td>Responsibilities</td>
            </tr>
            <Choice job={job}/>
        </table>
        <button className="lef" onClick={set1}></button>
        <button className="rig" onClick={set2}></button>
        </div>
    );
}

export default Work