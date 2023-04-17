import React from "react";
import './App.css'

const Swap=(props)=>{
    if(props.e===0){
        return(
            <table>
                <caption><h3>education</h3></caption>
                <tr>
                    <td>Institution</td> <td>Qualification</td>
                </tr>
                <tr>
                    <td>Kazan State University</td> <td>English Language Translator</td>
                </tr>
                <tr>
                    <td>Kazan State University</td> <td>Geologist</td>
                </tr>
                <tr>
                    <td>Almetyevsk Petroleum College</td> <td>Oil Equipment Mechanician</td>
                </tr>
            </table>
        )
    }
    if(props.e===1){
        return(
            <table>
            <caption><h3>vocational courses</h3></caption>
            <tr>
                <td>Provider</td> <td>Course</td>
            </tr>
            <tr>
                <td>Schlumberger Middle-East Learning Center</td> <td>Advanced Course on Geonext</td>
            </tr>
            <tr>
                <td>Baku Training Center</td> <td>BOSIET</td>
            </tr>
            <tr>
                <td>Sakhalin Technician Training Center</td> <td>HUET</td>
            </tr>
            <tr>
                <td>Schlumberger Middle-East Learning Center</td> <td>Mudlogging Specilalist</td>
            </tr>
        </table>
        )
    } 
}

export default Swap