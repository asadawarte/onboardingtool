
import React, { useEffect } from 'react'
import Header from '../components/header'
import { useRouter } from 'next/router'
import DashboardLabel from '../components/dashboard-label'
import Image from 'next/image'

export default function Employee() {
  const router = useRouter()

  useEffect(()  => {
    document.body.style.backgroundColor = "#f1f4f8";

  })
 

  
    return (<div style={{background:'#f1f4f8'}}>
      <Header></Header>
       <img className='home-img' src='./altimetrik.jpg'></img> 
       <div>
        <div className='home-subcontainer-left'>
           {/* <DashboardLabel { ...{label:"Your Joining Date :"}}></DashboardLabel> */}
           <button className="subcontainer-button" onClick={() => router.push('/offerletter')}>
            
            <span>Review And Accept Offer </span>
            <span style={{float:'right',color:'red'}}>Incomplte</span>
            </button> 
           {/* <DashboardLabel { ...{label:"Pre Joining Process "}}></DashboardLabel>
           <DashboardLabel { ...{label:"Onboarding Process ",isActive:true}}></DashboardLabel> */}
           <button  className="subcontainer-button" onClick={() => router.push('/onboarding')}>
            <span>Onboarding Process </span>
            <span style={{float:'right',color:'red'}}>Incomplte</span>
           </button> 

        </div>
        <div className='  home-subcontainer-right'>
           <div className=' subcontainer-tiles'></div>
           <div className='subcontainer-tiles'></div>
           <div className='subcontainer-tiles'></div>
            <div className='subcontainer-tiles'></div>
        </div>
        </div>
      </div>)
  
}
