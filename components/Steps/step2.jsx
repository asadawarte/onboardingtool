import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Education & Employment",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "tenthDurationFrom",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "tenthDurationTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
        <Grid item xs={12} sm={2}>
          {renderSelect({
            state,
            name: "tenth",
            label: "10th",
            options: [
              { key: "graduation", value: "Graduation" },
              { key: "B.Tech", value: "B.Tech" },
              { key: "BCA", value: "BCA Course" },
              { key: "M.Tech", value: "M.Tech" },
              { key: "MCA", value: "MCA" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "tenthBoard",
            label: "Board / University Name",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "tenthInstitution",
            label: "Name of the Institution ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "tenthType",
            label: "Type ",
            options: [
              { key: "Part Time", value: "PartTime" },
              { key: "Full Time", value: "FullTime" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "twelvethDurationFrom",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "twelvethDurationTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "twelth",
            label: "12th ",
            options: [
              { key: "graduation", value: "Graduation" },
              { key: "B.Tech", value: "B.Tech" },
              { key: "BCA", value: "BCA Course" },
              { key: "M.Tech", value: "M.Tech" },
              { key: "MCA", value: "MCA" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "twelthStream",
            label: "Stream / Major Subject",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "twelthBoard",
            label: "Board / University Name",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "twelthInstitution",
            label: "Name of the Institution ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "highestDegree",
            label: "twelthType ",
            options: [
              { key: "Part Time", value: "partTime" },
              { key: "Full Time", value: "fullTime" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "degreeDurationFrom",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "degreeDurationTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "degree",
            label: "Degree ",
            options: [
              { key: "graduation", value: "Graduation" },
              { key: "B.Tech", value: "B.Tech" },
              { key: "BCA", value: "BCA Course" },
              { key: "M.Tech", value: "M.Tech" },
              { key: "MCA", value: "MCA" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "degreeStream",
            label: "Stream / Major Subject",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "degreeUniversity",
            label: "Board / University Name",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "degreeInstitution",
            label: "Name of the Institution ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "degreeType",
            label: "Course ",
            options: [
              { key: "Part Time", value: "partTime" },
              { key: "Full Time", value: "fullTime" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "masterFrom",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "masterTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "master",
            label: "Post Graduation ",
            options: [
              { key: "M.Tech", value: "M.Tech" },
              { key: "MCA", value: "MCA" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "masterStream",
            label: "Stream / Major Subject",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "masterUniversity",
            label: "Board / University Name",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "masterInstitution",
            label: "Name of the Institution ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "masterCourse",
            label: "Course ",
            options: [
              { key: "Part Time", value: "partTime" },
              { key: "Full Time", value: "fullTime" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "profOrCertFrom",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "profOrCertTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
    
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "profOrCert",
            label: "Professiomnal Qualification/ Certification Deatils",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "profOrCertUniversity",
            label: "Board / University Name",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "profOrCertInstitution",
            label: "Name of the Institution ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "profOrCertCourse",
            label: "Course ",
            options: [
              { key: "Part Time", value: "Graduation" },
              { key: "Full Time", value: "B.Tech" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "socialSecNum",
            label: "Social Security Number (Mandatory if Studied in U.S.A",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderSelect({
            state,
            name: "priorEmpExperienmce",
            label: "Prior Emploment Experience ",
            options: [
              { key: "Yes", value: "Graduation" },
              { key: "No", value: "B.Tech" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
        
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "yearOfExperience",
            label: "Total year of experience",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "relevantExperience",
            label: "Relevant Work Experience",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>


      <Box mt={2} mb={2}>
        {renderText({
          label: "Work Experience Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "workDuration",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "workDurationTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "workedCompany",
            label: "Company Name ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "workedEmpId",
            label: "Employee ID",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "workedDesignation",
            label: "Designation",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "workedType",
            label: "Permanent / Contract / Part-Time ",
            options: [
              { key: "Permanent", value: "Permanent" },
              { key: "Contract", value: "Contract" },
              { key: "Part-Time", value: "Part-Time" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exReportingManager",
            label: "Reporting Manager Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exHRName",
            label: "HR Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "preDurationFrom",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "preDurationTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exCompanyName",
            label: "Company Name ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exEmpID",
            label: "Employee ID",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exDesignation",
            label: "Designation",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "workedType",
            label: "Permanent / Contract / Part-Time ",
            options: [
              { key: "Permanent", value: "Permanent" },
              { key: "Contract", value: "Contract" },
              { key: "Part-Time", value: "Part-Time" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exReportingManager",
            label: "Reporting Manager Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exHRName",
            label: "HR Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exDurationFrom",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exDurationTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exCompanyName",
            label: "Company Name ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exEmpID",
            label: "Employee ID",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exDesignation",
            label: "Designation",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "workType",
            label: "Permanent / Contract / Part-Time ",
            options: [
              { key: "Permanent", value: "Permanent" },
              { key: "Contract", value: "Contract" },
              { key: "Part-Time", value: "Part-Time" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exReportingManager",
            label: "Reporting Manager Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exHRName",
            label: "HR Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exDurationFrom",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exDurationTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "companyName",
            label: "Company Name ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exEmpID",
            label: "Employee ID",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exDesignation",
            label: "Designation",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "workType",
            label: "Permanent / Contract / Part-Time ",
            options: [
              { key: "Permanent", value: "Permanent" },
              { key: "Contract", value: "Contract" },
              { key: "Part-Time", value: "Part-Time" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exReportingManager",
            label: "Reporting Manager Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exHRName",
            label: "HR Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exDurationFrom",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exDurationTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exCompanyName",
            label: "Company Name ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exEmpID",
            label: "Employee ID",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exDesignation",
            label: "Designation",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "workedType",
            label: "Permanent / Contract / Part-Time ",
            options: [
              { key: "Permanent", value: "Permanent" },
              { key: "Contract", value: "Contract" },
              { key: "Part-Time", value: "Part-Time" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exReportingManager",
            label: "Reporting Manager Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exHRName",
            label: "HR Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exDurationFrom",
            label: "Duration from",
            type: "date",
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exDurationTo",
            label: "to",
            type: "date",
          })}
        </Grid>
       
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exCompanyName",
            label: "Company Name ",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={1}>
          {renderInputField({
            state,
            name: "exCompanyID",
            label: "Employee ID",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exDesignation",
            label: "Designation",
            type: "string" || "Numbers",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={1}>
          {renderSelect({
            state,
            name: "workType",
            label: "Permanent / Contract / Part-Time ",
            options: [
              { key: "Permanent", value: "Permanent" },
              { key: "Contract", value: "Contract" },
              { key: "Part-Time", value: "Part-Time" },
          
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exReportingManager",
            label: "Reporting Manager Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "exHRName",
            label: "HR Name",
            type: "string",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Last Employer Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={8}>
          {renderInputField({
            state,
            name: "lastEmpFullAddress",
            label: "Last Employer Full Address",
            onChange: handleChange,
          })}
        </Grid>
        
        
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "LastSalary",
            label: "Last Gross Salary of Last Employer (INR)",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "fixedSalary",
            label: "Fixed",
            onChange: handleChange,
          })}
        </Grid>
        
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "variablesSalary",
            label: "Variables",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "otherBenefits",
            label: "Other Benefits/Perks",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "totalCTC",
            label: "Tota.l CTC (INR)",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Second Previous Employer Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={8}>
          {renderInputField({
            state,
            name: "secPreComAddress",
            label: "Second Previous Employer Full Address",
            onChange: handleChange,
          })}
        </Grid>
        
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "secGrossSalary",
            label: "Last Gross Salary of Second Previous Employer (INR)",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "secFixedSalary",
            label: "Fixed",
            onChange: handleChange,
          })}
        </Grid>
        
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "secVariable",
            label: "Variables",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "secOtherBenefits",
            label: "Other Benefits/Perks",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "secTotalCTC",
            label: "Tota.l CTC (INR)",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "SocSecNo",
            label: "Social Security number (Mandatory if Employed in U.S.A)",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={8}>
          {renderInputField({
            state,
            name: "gapsInEmployment",
            label: "Elaborate Gaps in Employment,  If Any?",
            onChange: handleChange,
          })}
        </Grid>
        
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "primarySkills",
            label: "Primary Skills",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "secondarySkills",
            label: "Secondary Skills ",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Box mt={2} mb={2}>
        {renderText({
          label: "Reference Details: ",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Names, Addresses and contact nos. of three persons whom you have worked with in your organisations and those we may call/write for references ",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "name1",
            label: "1) Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "name2",
            label: "2) Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "name3",
            label: "3) Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "name1Designation",
            label: "Designation:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "name2Designation",
            label: "Designation:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "name3Designation",
            label: "Designation:",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "name1Orgnasation",
            label: "Organisation:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "name2Organisation",
            label: "Organisation:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "name3Organisation",
            label: "Organisation:",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "tel1",
            label: "Telephone Number:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "tel2",
            label: "Telephone Number:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "tel3",
            label: "Telephone Number:",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "mob1",
            label: "Mobile Number:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "mob2",
            label: "Mobile Number:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "mob3",
            label: "Mobile Number:",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "emial1",
            label: "Email ID:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "email2",
            label: "Email ID:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "email3",
            label: "Email ID",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "relationship1",
            label: "Relationship:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "relationship2",
            label: "Relationship:",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "relationship3",
            label: "Relationship:",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "yearKnown1",
            label: "Years you have known each other",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "yearKnown2",
            label: "Years you have known each other",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "yearKnown3",
            label: "Years you have known each other",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>






      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step2;
