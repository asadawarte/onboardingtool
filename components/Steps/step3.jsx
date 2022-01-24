import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Address & Declaration",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      {/* skill: "",
      workExperence: "",
      expectedSalary: "", */}

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "PANNumber",
            label: "PAN Number",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "nameOnPAN",
            label: "Name on PAN",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "aadharNum",
            label: "Aadhaar Number",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "aadharName",
            label: "Name on Aadhaar",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Box mt={2} mb={2}>
        {renderText({
          label: "Passport and Over Seas Travel Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
       
        <Grid item xs={12} sm={2}>
          {renderSelect({
            state,
            name: "isIndianPassport",
            label: "Do you hold an Indian Passport?",
            options: [
              { key: "Yes", value: "Yes" },
              { key: "No", value: "No" },
              
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
        {renderInputField({
            state,
            name: "countryHold",
            label: "If no, Which country Passport you currently hold",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
        {renderInputField({
            state,
            name: "nameOnPassport",
            label: "Full Name as on Passport",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderSelect({
            state,
            name: "isOverseasIndian",
            label: "Overseas Citizen of India",
            options: [
              { key: "Yes", value: "Yes" },
              { key: "No", value: "No" },
              
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
       
      <Grid item xs={12} sm={3}>
        {renderInputField({
            state,
            name: "passportNum",
            label: "Passport Number",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
        {renderInputField({
            state,
            name: "placePassportIssue",
            label: "Passport Place of issue",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
          {renderSelect({
            state,
            name: "peresonOfIndianOrigin",
            label: "Person of Indian Origin",
            options: [
              { key: "Yes", value: "Graduation" },
              { key: "No", value: "B.Tech" },
              
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
        {renderInputField({
            state,
            name: "passportIssuedCountry",
            label: "Passport Issued Country",
            onChange: handleChange,
          })}
        </Grid>
      
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
       
      <Grid item xs={12} sm={2}>
        {renderInputField({
            state,
            name: "passportDateOfIssue",
            label: "Passport Date of Issue",
            type: "date",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
        {renderInputField({
            state,
            name: "countryStaying",
            label: "Country He/She is staying ",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={2}>
        {renderInputField({
            state,
            name: "passportValidUpTo",
            label: "Passport Valid up to",
            type: "date",
            onChange: handleChange,
          })}
        </Grid>
      
      </Grid>

    <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={3}>
         {renderInputField({
             state,
             name: "typeOfVisa1",
             label: "Type of Visa 1",
             onChange: handleChange,
            })}
        </Grid>
       <Grid item xs={12} sm={1}>
         {renderInputField({
             state,
             name: "vasaIssuedDate1",
             label: "Visa Issued Date",
             type: "date",
             onChange: handleChange,
           })}
         </Grid>
       
         <Grid item xs={12} sm={1}>
         {renderInputField({
             state,
             name: "visaValidUpTo1",
             label: "Visa Valid Up to",
             type: "date",
             onChange: handleChange,
           })}
         </Grid>
         <Grid item xs={12} sm={2}>
         {renderInputField({
             state,
             name: "visaPlaceOfIssue",
             label: "Visa Place of issue",
             onChange: handleChange,
            })}
        </Grid>
        <Grid item xs={12} sm={2}>
         {renderInputField({
             state,
             name: "visaCountry",
             label: "Visa Country",
             onChange: handleChange,
            })}
        </Grid>
        <Grid item xs={12} sm={3}>
         {renderInputField({
             state,
             name: "detailsIfTravelledOverseas",
             label: "Details if Travelled Overseas",
             onChange: handleChange,
            })}
        </Grid>
       
       </Grid>
       <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={3}>
         {renderInputField({
             state,
             name: "typeOfVisa2",
             label: "Type of Visa 2",
             onChange: handleChange,
            })}
        </Grid>
       <Grid item xs={12} sm={1}>
         {renderInputField({
             state,
             name: "visaIssuedDate2",
             label: "Visa Issued Date",
             type: "date",
             onChange: handleChange,
           })}
         </Grid>
       
         <Grid item xs={12} sm={1}>
         {renderInputField({
             state,
             name: "visaValidUpto2",
             label: "Visa Valid Up to",
             type: "date",
             onChange: handleChange,
           })}
         </Grid>
         <Grid item xs={12} sm={2}>
         {renderInputField({
             state,
             name: "visaPlaceOfIssue2",
             label: "Visa Place of issue",
             onChange: handleChange,
            })}
        </Grid>
        <Grid item xs={12} sm={2}>
         {renderInputField({
             state,
             name: "visaCountry2",
             label: "Visa Country",
             onChange: handleChange,
            })}
        </Grid>
        <Grid item xs={12} sm={3}>
         {renderInputField({
             state,
             name: "detailsIfTravelledOverseas2",
             label: "Details if Travelled Overseas",
             onChange: handleChange,
            })}
        </Grid>
       
       </Grid>
       <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      
        <Grid item xs={12} sm={3}>
          {renderSelect({
            state,
            name: "isVisaRejected",
            label: "Was your Visa rejected in the past?",
            options: [
              { key: "Yes", value: "Yes" },
              { key: "No", value: "No" },
              
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={8}>
        {renderInputField({
            state,
            name: "ifYesReason",
            label: "If Yes, provide reason for rejection",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
     
       <Grid container spacing={1} style={{ marginBottom: "16px" }}>
  
        <Grid item xs={12} sm={8}>
        {renderInputField({
            state,
            name: "NationalSkillRegNo",
            label: "National Skill Registration Number (If Any)",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
  
         <Grid item xs={12} sm={8}>
          {renderSelect({
            state,
            name: "highestDegree",
            label: "Do you have any Non Compete Obligation / Conflict Situations / Other Restrictive clauses with any Part, including the previous Employer?",
            options: [
              { key: "Yes", value: "Yes" },
              { key: "No", value: "No" },
              
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
         <Grid item xs={12} sm={3}>
          {renderSelect({
            state,
            name: "isConvicted",
            label: "Have you ever been convicted?",
            options: [
              { key: "Yes", value: "Yes" },
              { key: "No", value: "No" },
              
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={8}>
        {renderInputField({
            state,
            name: "offenceReason",
            label: "If Yes, state the offence",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
         <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "isLimit",
            label: "Are there any other restriction which may affect/limit your ability to work with Altimetrik",
            options: [
              { key: "Yes", value: "Yes" },
              { key: "No", value: "No" },
              
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "descriptionOfObligation",
            label: "Description of Obligation / Situation / Restrictions (if any)",
            options: [
              { key: "Yes", value: "Yes" },
              { key: "No", value: "No" },
              
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
         <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "isExGovtEmp",
            label: "Have you worked for the government, either as civilian employee or member of military?",
            options: [
              { key: "Yes", value: "Yes" },
              { key: "No", value: "No" },
              
            ],
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
        <Box ml={2}>
          {renderButton({ label: "Finish", onClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
