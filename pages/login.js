import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import React, { useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import Header from '../components/header';


export default function login() {
    const router = useRouter()
    useEffect(()  => {
        document.body.style.backgroundColor = "#f1f4f8";
    
      })

  return (
    <div style={{background:'#f1f4f8'}}>
  <div>
      <div style={{float:"left"}}>
      <img  style={{float:'left',
      height: '580px',
    width: '800px'}} src='./login_page.png'></img> 
      </div>
      <div className='input' >
      
      <img  style={{float:'left',paddingLeft:"105px",height:'50px',paddingTop:'50px'}} src='./alt-logo.jpg'></img> 

                <div className='input-block'>
                    <input style={{marginBottom:'5%'}} placeholder='Username'/>
                    <input style={{marginBottom:'5%'}} placeholder='Password'/> 
                    <button className='login-btn' onClick={() => router.push('/employee-home')}> Login</button>

                </div>

     </div>
     </div>
    </div>
  )
  
}
