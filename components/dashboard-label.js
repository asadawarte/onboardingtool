
import { CgProfile } from "react-icons/cg";
import React from 'react'
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

class DashboardLabel extends React.Component {

    openAnotherPage(isActive){
       

    }
    render(){

        return (
            <div className="dashboard-label"
            onClick={this.openAnotherPage(this.props.isActive)}

            >
            {this.props.label}
            </div> 
        )
    }
}
export default DashboardLabel

