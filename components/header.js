
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

                    <div style={{float:'right',paddingRight:"10px"}}>
                        
                       <CgProfile onClick={this.openDropdown} style={{fontSize:'30px'}}>
                          

                            
                        </CgProfile>
                    </div>
              </div>
            </div>
          )
    }
 
}

export default Header
