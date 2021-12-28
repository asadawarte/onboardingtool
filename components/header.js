
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
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                      </Dropdown>

                            
                        </CgProfile>
                    </div>
              </div>
            </div>
          )
    }
 
}

export default Header
