import React from 'react'
import { useState } from 'react'
import './App.css'
import Work from './work'
import Edu from './edu'
import Slider from './slider'

const Sum=(props)=>{
    if(props.para===0){
    return(
            <table className='over'>
                <caption><h3>overview</h3></caption>
                <tr>
                    <td className='desc'>
                    For over the recent 7 years, I have been freelancing as a linguist specializing in translations
                    from English into Russian and vice versa. Occasionally, I have been practicing as a writer of small essays, 
                    and, for the recent half a year, I have been earning for living as an accommodation rental consultant.
                     Meanwhile, I have been learning some programming languages and associated frameworks 
                     (HTML, CSS, JavaScript, React, Python, Java) on my own. 
                     Nevertheless, I do not refuse the option of the resumption of my employment record. Therefore, 
                     I am open to appropriate job offers, and ready to make my best efforts to accomplish tasks set at work.
                     My earlier employment record was mostly related to oil and gas production industry, 
                     but I am always eager for acquiring new knowledge in various fields of business activity. 
                     That is why I am now focusing on landing an interesting job not only in the industry matching my
                      higher education qualification but also in such areas as Web Design/Development, 
                      Content Management, Software Testing, Logistics, implementation of translation projects etc
                    </td>
                </tr>
                </table>
    )
    }
    else if(props.para===1){
        return(
            <>
            <Edu/>
            <Slider/>
            </>
        )
    }
    else if(props.para===2){
        return(
            <>
            <Work/>
            <Slider/>
            </>
        )
    }
}
         
      
export default Sum