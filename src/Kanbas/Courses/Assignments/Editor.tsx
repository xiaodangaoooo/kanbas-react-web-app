import React from 'react';
import {useLocation} from "react-router";
import { FaRegCalendarAlt } from "react-icons/fa";
import { assignments } from "../../Database";

export default function Editor() {
  const {pathname} = useLocation();

  const aid = pathname.split("/").pop();
  const assignment = assignments.find(a => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="ms-5">
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
            <input id="wd-name" className="form-control" value={assignment?.title}/>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            <textarea id="wd-description" className="form-control" rows={10}>
            {assignment?.description}
            </textarea>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
          </div>
          <div className="col">
            <input id="wd-points" type="number" className="form-control" value={assignment?.points} />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-group" className="col-form-label float-end">Assignment Group</label>
          </div>
          <div className="col">
            <select id="wd-group" className="form-select">
              <option selected value="assignments">ASSIGNMENTS</option>
              <option value="quizzes">QUIZZES</option>
              <option value="exams">EXAMS</option>
              <option value="project">PROJECT</option>
            </select>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-display-grade-as" className="col-form-label float-end">Display Grade as</label>
          </div>
          <div className="col">
            <select id="wd-display-grade-as" className="form-select">
              <option selected value="percentage">Percentage</option>
            </select>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-submission-type" className="col-form-label float-end">Submission Type</label>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <select id="wd-submission-type" className="form-select">
                    <option selected value="online">Online</option>
                  </select>
                </div>
                <div className="row mt-4">
                  <label><b>Online Entry Options: </b></label>
                </div>
                <div className="row my-2 ms-2">
                  <div className="form-check my-2">
                    <input type="checkbox" name="text-entry" id="wd-text-entry" className="form-check-input" />
                    <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                  </div>
                  <div className="form-check my-2">
                    <input type="checkbox" name="website-url" id="wd-website-url" className="form-check-input" />
                    <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                  </div>
                  <div className="form-check my-2">
                    <input type="checkbox" name="media-recordings" id="wd-media-recordings" className="form-check-input" />
                    <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                  </div>
                  <div className="form-check my-2">
                    <input type="checkbox" name="student-annotation" id="wd-student-annotation" className="form-check-input" />
                    <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                  </div>
                  <div className="form-check my-2">
                    <input type="checkbox" name="file-upload" id="wd-file-upload" className="form-check-input" />
                    <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-assign" className="col-form-label float-end">Assign</label>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <label htmlFor="wd-assign-to" className="form-label"><b>Assign to</b></label>
                  <div className="input-group ">
                    <button className="btn btn-outline-secondary ">Every one X</button>
                    <input id="wd-assign-to" type="text" className="form-control" />
                  </div>
                </div>
                <div className="container">
                  <div className="row mt-4">
                    <div className="col-12">
                      <label htmlFor="wd-due-date" className="form-label"><b>Due</b></label>
                      <div className="input-group">
                        <input type="text" className="form-control" id="wd-due-date" value={assignment?.dueDate} />
                        <button className="btn btn-secondary" type="button" id="button-addon2">
                          <FaRegCalendarAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col">
                      <label htmlFor="wd-available-from" className="form-label"><b>Available from</b></label>
                      <div className="input-group">
                        <input type="text" className="form-control" id="wd-available-from" value={assignment?.availableDate} />
                        <button className="btn btn-secondary " type="button" id="button-addon3">
                          <FaRegCalendarAlt />
                        </button>
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="wd-available-until" className="form-label"><b>Until</b></label>
                      <div className="input-group">
                        <input type="text" className="form-control" id="wd-available-until" />
                        <button className="btn btn-secondary" type="button" id="button-addon4">
                          <FaRegCalendarAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col-12 d-flex justify-content-end">
            <button type="button" className="btn btn-secondary me-2">Cancel</button>
            <button type="button" className="btn btn-danger">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
