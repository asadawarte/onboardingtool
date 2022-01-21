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
            name: "yearOfPassing",
            label: "PAN Number",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "yearOfPassing",
            label: "Name on PAN",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "yearOfPassing",
            label: "Aadhaar Number",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "yearOfPassing",
            label: "Name on Aadhaar",
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
