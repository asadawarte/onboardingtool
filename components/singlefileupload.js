import React, { Component } from 'react';
import styles from '../styles/Home.module.css';

class SingleFileUpload extends Component {
    render() {
      return (
        <div className="SingleFileUpload">
          <table>
            <tr>
              <td>
                <input type="radio" name="input_type" id="fileUpload" value="1" className={styles.card} defaultChecked />
                <label> Choose the File to upload: </label>
                <input type="file" id="myFile" />
              </td>
              <td>
                <input type="radio" name="input_type" id="submitLater" value="2" className={styles.card} />
                <label>Will submit later</label>
              </td>
              <td>
                <input type="radio" name="input_type" id="NA" value="3" className={styles.card} />
                <label>Not Applicable</label><br></br>
              </td>
            </tr>
          </table>
        </div>
      );
    }
  }
  
  export default SingleFileUpload