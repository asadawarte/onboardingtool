import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { CgProfile } from "react-icons/cg";
import Header from '../components/header';


export default function hrHome() {
  return (
    <div>
     <Header></Header>
      <div >
                <div className="grid">
                        Employees To Be Onboarded
                </div>
     </div>
    </div>
  )
}
