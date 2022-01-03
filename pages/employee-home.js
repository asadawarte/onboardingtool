
import React from 'react'
import Header from '../components/header'
import { useRouter } from 'next/router'
import DashboardLabel from '../components/dashboard-label'

export default function Employee() {
  const router = useRouter()

 
       
    return (<div>
      <Header></Header>

        <div style={{float:'left',border:'solid 1px', width:'500px',height:'500px' ,margin:'10px'}}>
           <DashboardLabel { ...{label:"Your Joining Date :"}}></DashboardLabel>
           <div className="dashboard-label" onClick={() => router.push('/offerletter')}>
            Review And Accept Offer
            </div> 
           <DashboardLabel { ...{label:"Pre Joining Process "}}></DashboardLabel>
           {/* <DashboardLabel { ...{label:"Onboarding Process ",isActive:true}}></DashboardLabel> */}
           <div className="dashboard-label" onClick={() => router.push('/onboarding')}>
            Onboarding Process 
           </div> 

        </div>
        <div style={{float:'right',border:'solid 1px', width:'500px',height:'500px' ,margin:'10px'}}>



        </div>

      </div>)
  
}
