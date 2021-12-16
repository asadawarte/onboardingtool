
import { CgProfile } from "react-icons/cg";
import React from 'react'

class Header extends React.Component {

    render(){
        return (
            <div>
               <div className="header">
                    <div style={{float:'right',paddingRight:"10px"}}>
                        <CgProfile  style={{fontSize:'30px'}}></CgProfile>
                    </div>
              </div>
            </div>
          )
    }
 
}

export default Header
