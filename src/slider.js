import React from "react";
import './App.css'

const Slider=()=>{
    return(
        <div className="slider">
            <a href='/netology.png' target='_blank'><img className="slide" src='/Python_Basics.png'/></a>
            <a href='https://www.linkedin.com/learning/certificates/c8b83058d282bf2ffff84ca7c2d6d061815ce2ce6f1f17cb4e9918b3a7b6ddf0' 
            target='_blank'><img className="slide" src='/Programming_Basics.png'/></a>
        </div>
    )
}

export default Slider;