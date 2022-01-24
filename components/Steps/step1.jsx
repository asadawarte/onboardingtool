import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step1 = ({ state, handleChange, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Please fill the personal Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "firstName",
            label: "First Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "middleName",
            label: "Middle Name",
            type: "text",
          
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "lastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "dateOfBirth",
            label: "Date of Birth",
            type: "date",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "age",
            label: "Age",
            type: "number",
          })}
        </Grid>
        
        <Grid item xs={12} sm={3}>
          {renderSelect({
            state,
            name: "bloodgroup",
            label: "Blood Group",
            options: [
              { key: "A+", value: "a+" },
              { key: "O+", value: "o+" },
              { key: "B+", value: "b+" },
              { key: "AB+", value: "ab+" },
              { key: "A-", value: "a-" },
              { key: "O-", value: "o-" },
              { key: "B-", value: "b-" },
              { key: "AB-", value: "ab-" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12}sm={3}>
          {renderSelect({
            state,
            name: "gender",
            label: "Gender",
            options: [
              { key: "Male", value: "male" },
              { key: "Female", value: "female" },
              { key: "Other", value: "other" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone",
            type: "tel",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "email",
            label: "Email",
            type: "email",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "workPermitValidTill",
            label: "Work Permit Valid till (In case of Foreign Nationals)",
            type: "date",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "placeOfBirth",
            label: "Place of Birth",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "nationality",
            label: "Nationality",
            type: "text",
          
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "religion",
            label: "Religion",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12}sm={3}>
          {renderSelect({
            state,
            name: "maritalStatus",
            label: "Marital Status",
            options: [
              { key: "Single", value: "single" },
              { key: "Married", value: "married" },
            ],
            onChange: handleChange,
          })}
        </Grid>  
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "fatherName",
            label: "Father Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "motherName",
            label: "Mother Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Current Address Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "houseNo",
            label: "Flat / House No. / Floor / Building",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "street",
            label: "Colony / Street / Locality",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "city",
            label: "City / District / Town",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "state",
            label: "State",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "country",
            label: "Country",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "pincode",
            label: "PIN Code",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "durationFrom",
            label: "Duration from",
            type: "date"
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "durationTo",
            label: "to",
            type: "date"
          })}
        </Grid>
      </Grid>

      <Box mt={2} mb={2}>
        {renderText({
          label: "Permanent Address Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "permanentHouseNo",
            label: "Flat / House No. / Floor / Building",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "permanentStreet",
            label: "Colony / Street / Locality",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "permanentCity",
            label: "City / District / Town",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "permanentState",
            label: "State",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "permanentCountry",
            label: "Country",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "permanentPincode",
            label: "PIN Code",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "permanentDuration",
            label: "Duration from",
            type: "date"
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderInputField({
            state,
            name: "permanentDuration",
            label: "to",
            type: "date"
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        
        <Grid item xs={12} sm={4}>
          {renderInputField({
            state,
            name: "nearPoliceStation",
            label: "Nearest Police Station",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "intermediateAddress",
            label: "Intermediate Address: (If any)",
          })}
        </Grid>
      </Grid>

      <Box mt={2} mb={2}>
        {renderText({
          label: "Emergency Contact Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "emergencyHouseNo",
            label: "Contact Person Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "emergencyHouseStreet",
            label: "Contact Person Relationship",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "emergencyCity",
            label: "Contact Number",
            onChange: handleChange,
          })}
        </Grid>
      
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12}>
          {renderInputField({
            state,
            name: "emergencyCountry",
            label: "Contact Person Address with PIN Code",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        
        <Grid item xs={12} sm={4}>
          {renderSelect({
            state,
            name: "referredBy",
            label: "Have you been referred by Altimetrik employee?",
            options: [
              { key: "Yes", value: "yes" },
              { key: "No", value: "no" },
            ],
          })}
        </Grid>
        <Grid item xs={12}sm={8}>
          {renderInputField({
            state,
            name: "referredEmpId",
            label: "If Yes mention the Employee Name & ID",
            
          })}
        </Grid>
      </Grid>
      
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "previouslyWorked",
            label: "Have you previously worked in Altimetrik / Any of Vattikuti Group of Companies?",
            options: [
              { key: "Yes", value: "yes" },
              { key: "No", value: "no" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12}sm={4}>
          {renderInputField({
            state,
            name: "previouslyWorkedCompanyName",
            label: "If Yes, please mention Company Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "previousAltiEmpId",
            label: "Employee ID",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "durationPreviousAltiFrom",
            label: "Duration",
            type: "date",
            
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderInputField({
            state,
            name: "durationPreviousAltiTo",
            label: "to",
            type: "Date",
            
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "physicallyChallenged",
            label: "Physically Challenged",
            options: [
              { key: "Yes", value: "yes" },
              { key: "No", value: "no" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "physicallyChallengedDoc",
            label: "If Yes, have the supporting documents been provided?",
            options: [
              { key: "Yes", value: "yes" },
              { key: "No", value: "no" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "relativedOrAltimetrikYN",
            label: "Do you have any relatives / friends working at Altimetrik?",
            options: [
              { key: "Yes", value: "yes" },
              { key: "No", value: "no" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "relativedOrAltimetrik",
            label: "If Yes, please provide Name, Emp ID",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        {renderButton({ label: "Next", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default Step1;
