import React from "react"
import pic from "./pp.jpg"
import {AiOutlineMail } from "react-icons/ai"

export default function Header(){
    return(
        <>
        <img src={pic} alt="mypic" />
        <h1 className="name">Satish Dhakal</h1>
        <h3 className="title">Frontend Developer</h3>
        <p>satishdhakal.com.np</p>
        <button><AiOutlineMail className='icon' /> <span><b>Email</b></span></button>
        
        </>
    )
}