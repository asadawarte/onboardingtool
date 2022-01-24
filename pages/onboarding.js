import React from 'react'
import Header from '../components/header'
import { useRouter } from 'next/router'
import DashboardLabel from '../components/dashboard-label'
import { Button, Table } from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Oboarding() {
  const router = useRouter()

 
       
    return (<div style={{background:'#f1f4f8'}}>
      <Header></Header>
      {/* <h1 style={{textAlign:'center',fontSize:'16px'}}> Onboarding </h1> */}
      <div className='onboardingSteps'>

        <div className='onboarding-tabs' style={{float:'left'}}>
            Pre Joining 
        </div>
        <div className='onboarding-tabs' >
          |
        </div>
        <div className='onboarding-tabs'  style={{float:'right'}}>
            Onboarding Process
        </div>
        </div>
        <div className='container'>
       
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
               
                <td>Personal Information</td>
                <td>Incomplete</td>
                <td  onClick={() => router.push('/CandidateApplicationForm')}>Click Here To Update</td>
                </tr>
                <tr>
                <td>Uplaod Documents</td>
                <td>Incomplete</td>
                <td  onClick={() => router.push('/FileUpload')}>Click Here To Update</td>
                </tr>
              
            </tbody>
            </Table>

        </div>

      </div>)
  
}
