import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import SingleFileUpload from '../components/singlefileupload';
import Header from '../components/header';

class FileUpload extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="FileUpload">
          <h1 style={{ textAlign: "center" }}>Document Submission</h1>
          <h4 style={{ textAlign: "center" }}>Please submit scanned copy of the following documents for verification.</h4>
          <form className={styles.content}>
            <p>1. Class 10 Mark Sheet</p>
            <SingleFileUpload></SingleFileUpload>
            <p>2. Class 12 Mark Sheet</p>
            <SingleFileUpload></SingleFileUpload>
            <p>3. Graduation Consolidated Or All Semester MarkSheets</p>
            <SingleFileUpload></SingleFileUpload>
            <p>4. Graduation Degree Certificate or Convocation Certificate (Not Provisional Certificate)</p>
            <SingleFileUpload></SingleFileUpload>
            <p>5. Post-Graduation Consolidated Or All Semester MarkSheets</p>
            <SingleFileUpload></SingleFileUpload>
            <p>6. Post-Graduation Degree Certificate or Convocation Certificate (Not Provisional Certificate)</p>
            <SingleFileUpload></SingleFileUpload>
            <p>7. Relieving letter & Service letter from all previous Organizations</p>
            <SingleFileUpload></SingleFileUpload>
            <p>8. Last 3 months Payslips</p>
            <SingleFileUpload></SingleFileUpload>
            <p>9. Passport</p>
            <SingleFileUpload></SingleFileUpload>
            <p>10. Pan Card</p>
            <SingleFileUpload></SingleFileUpload>
            <p>11. Aadhar</p>
            <SingleFileUpload></SingleFileUpload>
            <p>12. Voter's ID/Driving License</p>
            <SingleFileUpload></SingleFileUpload>
            <p>13. Bank Statement or Cancelled Cheque leaf</p>
            <SingleFileUpload></SingleFileUpload>
            <p>14. Last one month PF Statement</p>
            <SingleFileUpload></SingleFileUpload>
            <p>15. Passport size photo with white background (JPEG format)</p>
            <SingleFileUpload></SingleFileUpload>
            <p>16. Resume</p>
            <SingleFileUpload></SingleFileUpload>
            <br></br>
            <br></br>
            <div style={{ alignSelf: "center" }}>
              <input type="button" value="Save" className={styles.card} />
              <input type="submit" value="Save & Submit" className={styles.card} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FileUpload