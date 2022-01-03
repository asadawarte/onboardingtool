
import React from 'react'
import Header from '../components/header'
import { useRouter } from 'next/router'
import DashboardLabel from '../components/dashboard-label'

export default function OfferLetter() {
  const router = useRouter()

 
       
    return (<div>
      <Header></Header>
      <div className='container'>
      <div className='onboardingSteps'>
       Offer Letter 
     
      <button style={{float:"right"}}>Download</button>
      </div>
        <p>
            ------------------- ----------------------- -
            ----------------- ---------------
            Accept this offer by clicking on Accept 
        </p>

        <button style={{float:"right"}}>Accept</button>
        <button style={{float:"right"}}>Decline</button>

      </div>

      </div>)
  
}
