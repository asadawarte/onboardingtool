import React from 'react'
import Header from '../components/header'
import { useRouter } from 'next/router'
import DashboardLabel from '../components/dashboard-label'
import { Button, Table } from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Oboarding() {
  const router = useRouter()

 
       
    return (<div>
      <Header></Header>
      <h1 style={{textAlign:'center',fontSize:'16px'}}> Onboarding </h1>
        <div className='container'>
        <div className='onboardingSteps'>

            <div style={{float:'left'}}>
                Pre Joining >>
            </div>
            {/* <div  style={{textAlign:'center'}}>
               Background Check  >>
            </div> */}
            <div  style={{float:'right'}}>
                Onboarding Process
            </div>
        </div>
        {/* <div className='step-box'>
            Personal Information
        </div>
        <div className='step-box'>
        <span>Uplaod Documents</span>
        <button style={{float:"right"}} onClick={() => router.push('/fileupload')}> Click Here ..</button>
        </div> */}

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
                <td>Click Here To Update</td>
                </tr>
                <tr>
                <td>Uplaod Documents</td>
                <td>Incomplete</td>
                <td>
                <button style={{float:"right"}} onClick={() => router.push('/fileupload')}> Click Here ..</button>

                </td>
                </tr>
              
            </tbody>
            </Table>

        </div>

      </div>)
  
}
