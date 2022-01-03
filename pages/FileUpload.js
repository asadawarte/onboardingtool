import styles from '../styles/Home.module.css'
import React, { Component } from 'react';
import Header from '../components/header';

class FileUpload extends Component {
    render() {
      return (
        <div>
          <Header></Header>
        <div className="FileUpload">
          <h1 align='center'>Document Submission</h1>
          <h4 align='center'>Please submit scanned copy of the following documents for verification.</h4>
          <form className={styles.content}>
            <p>1. Class 10 Mark Sheet</p>
            <MandatoryFile></MandatoryFile>
            <p>2. Class 12 Mark Sheet</p>
            <MandatoryFile></MandatoryFile>
            <p>3. Graduation Consolidated Or All Semester MarkSheets</p>
            <MandatoryFile></MandatoryFile>
            <p>4. Graduation Degree Certificate or Convocation Certificate (Not Provisional Certificate)</p>
            <MandatoryFile></MandatoryFile>
            <p>5. Post-Graduation Consolidated Or All Semester MarkSheets</p>
            <MandatoryFile></MandatoryFile>
            <p>6. Post-Graduation Degree Certificate or Convocation Certificate (Not Provisional Certificate)</p>
            <MandatoryFile></MandatoryFile>
            <p>7. Relieving letter & Service letter from all previous Organizations</p>
            <MandatoryFile></MandatoryFile>
            <p>8. Last 3 months Payslips</p>
            <MandatoryFile></MandatoryFile>
            <p>9. Passport</p>
            <MandatoryFile></MandatoryFile>
            <p>10. Pan Card</p>
            <MandatoryFile></MandatoryFile>
            <p>11. Aadhar</p>
            <MandatoryFile></MandatoryFile>
            <p>12. Voter's ID/Driving License</p>
            <MandatoryFile></MandatoryFile>
            <p>13. Bank Statement or Cancelled Cheque leaf</p>
            <MandatoryFile></MandatoryFile>
            <p>14. Last one month PF Statement</p>
            <MandatoryFile></MandatoryFile>
            <p>15. Passport size photo with white background (JPEG format)</p>
            <MandatoryFile></MandatoryFile>
            <p>16. Resume</p>
            <MandatoryFile></MandatoryFile>
          </form>
  
          <br></br>
          <br></br>
          <div align='center'>
          <input type="button" value="Save" className={styles.card} />
          <input type="submit" value="Save & Submit" className={styles.card} />
          </div>
        </div>
        </div>
      );
    }
  }
  
  class MandatoryFile extends Component {
    render() {
      return (
        <div className="MandatoryFile">
  
          <input type="radio" name="input_type" id="fileUpload" value="1" className={styles.card} />
          <label> Choose the File to upload: </label>
          <input type="file" id="myFile" />        
          <input type="radio" name="input_type" id="submitLater" value="2" className={styles.card}/>
          <label>Will submit later</label>
          <input type="radio" name="input_type" id="NA" value="3" className={styles.card}/>
          <label>Not Applicable</label><br></br>        
        </div>
      );
    }
  }
  
  export default FileUpload