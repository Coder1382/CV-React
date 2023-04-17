import React from 'react'
import './App.css'
import Select from './select'
import { useState } from 'react'


const Summary=()=>{
    return(
        <div className="cover">
     <table className='summ'>
        <caption><h3>summary</h3></caption>
        <tr>
            <td>Full Name</td> <td>Aleksandr Poluianov</td>
            <td className='photo' rowspan="7"><img className='foto' src='/foto.jpg'/></td>
        </tr>
        <tr>
            <td>DoB</td> <td>03/13/1982</td>
        </tr>
        <tr>
            <td>Email</td> <td>mailbox112000@mail.ru</td>
        </tr>
        <tr>
            <td>Cell Number</td> <td>+66-91-705-24-80</td>
        </tr>
        <tr>
            <td>WhatsApp</td> <td>+7-950-309-94-87</td>
        </tr>
        <tr>
            <td colspan="2"> <a href='https://github.com/Coder1382'>GitHub</a><a href='https://www.linkedin.com/in/researcher1382/'>
            LinkedIn</a><a href="https://www.hackerrank.com/mailbox112000">HackerRank</a> </td>
        </tr>
     </table>
     <Select/>
    </div>
    )
}

export default Summary