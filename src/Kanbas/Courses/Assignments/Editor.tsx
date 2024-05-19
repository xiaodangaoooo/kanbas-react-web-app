export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your Web application runnign on Netlify. The landing page should include the following:
        Your full name and section Links to each of the lab assignments Link to the Kanbas 
        application Links to all relevant source code repositories. The Kanbas application
        should include a link to navigate back to the landing page.
      </textarea><br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="PLACEHOLDER">PLACEHOLDER</option>
              <option value="PLACEHOLDER">PLACEHOLDER</option>
            </select>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="Percentage">Percentage</option>
              <option value="PLACEHOLDER">PLACEHOLDER</option>
              <option value="PLACEHOLDER">PLACEHOLDER</option>
            </select>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value="Online">Online</option>
              <option value="PLACEHOLDER">PLACEHOLDER</option>
              <option value="PLACEHOLDER">PLACEHOLDER</option>
            </select><br /><br />
            <label>Online Entry Options</label><br />

              <input type="checkbox" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br />

              <input type="checkbox" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br />

              <input type="checkbox" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />

              <input type="checkbox" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />

              <input type="checkbox" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label><br />
            <textarea readOnly id="wd-assign-to">Everyone</textarea>
          </td>
        </tr><br/>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-due-date">Due</label><br />
            <input type="date" id="wd-due-date" value="2024-05-13"/>
          </td>
        </tr><br/>
        <tr>
          <td align="right" valign="top"></td>
            <label htmlFor="wd-available-from">Available from</label> <br />
            <input type="date" id="wd-available-from" value="2024-05-06"/>
          <td align="right" valign="top"></td>
            <label htmlFor="wd-available-until">Until</label><br />
            <input type="date" id="wd-available-until" value="2024-05-20"/>
        </tr>
        <tr>
          <td colSpan={4}><hr /></td>
        </tr>
        <tr>
          <td colSpan={4} align="right">
            <button type="button">Cancel</button>&nbsp;&nbsp;
            <button type="button">Save</button>
          </td>
        </tr>
        {/* Complete on your own */}
      </table>
    </div>
);
}