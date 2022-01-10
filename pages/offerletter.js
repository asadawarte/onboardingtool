
import React from 'react'
import Header from '../components/header'
import { useRouter } from 'next/router'
import DashboardLabel from '../components/dashboard-label'

export default function OfferLetter() {
  const router = useRouter()

 
       
    return (<div  style={{background:'#f1f4f8',height:'780px'}}>
      <Header></Header>
      <div className='offerContainer'>
      <div className='offer-tile' style={{border:'solid 1px' ,margin:'2%', background:'white',width:'720px' ,padding:'2%'}}>
       Offer Letter 
     
      <button className='download-button' style={{float:'right'}}>Click Here To Download</button>
      </div>
       

      
      <div className='offer-tile' style={{border:'solid 1px' ,margin:'2%',background:'white',padding:'2%'}}>
      <p>
            Accept this offer by clicking on Accept 
        </p>

        <button className='success-btn' style={{float:"right"}}>Accept</button>
        <button className='cancel-btn' style={{float:"right"}}>Decline</button>
      </div>
      </div>
      </div>)
  
}
