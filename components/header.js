
import { CgProfile } from "react-icons/cg";
import React from 'react'
import { Dropdown } from "react-bootstrap";

class Header extends React.Component {


    openDropdown(){
        return ;
    }

    render(){
        return (
            <div>
                  

               <div className="header">
               <img  src='./alt-logo.jpg'></img> 
               <span>Onboarding</span>
                    <div style={{float:'right',paddingRight:"10px"}}>
                    <div>
                   
                    <div className="dropdown">
                    <button className="dropbtn">
                    <img style={{width:'30px',height:"40px"}} src='./profile.png'></img> 
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    </div>
                    </div>
                    </div>
              </div>
            </div>
          )
    }
 
}

export default Header
