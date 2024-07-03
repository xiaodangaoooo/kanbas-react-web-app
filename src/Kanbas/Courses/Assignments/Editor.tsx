import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCalendarAlt } from "react-icons/fa";
import { addAssignment, updateAssignment } from "./reducer";
import { RootState } from '../../store'; 

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: RootState) => state.assignments.assignments);

  const [assignment, setAssignment] = useState({
    _id: '',
    title: '',
    description: '',
    points: 0,
    dueDate: '',
    availableDate: '',
    availableUntil: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    setAssignment(prev => ({
      ...prev,
      [id]: type === 'number' ? parseInt(value, 10) : value,
    }));
  };

  useEffect(() => {
    if (aid && aid !== 'new') {
      const existingAssignment = assignments.find(a => a._id === aid);
      if (existingAssignment) {
        setAssignment({
          _id: existingAssignment._id,
          title: existingAssignment.title,
          description: existingAssignment.description,
          points: existingAssignment.points,
          dueDate: existingAssignment.dueDate,
          availableDate: existingAssignment.availableDate,
          availableUntil: existingAssignment.availableUntil
        });
      }
    }
  }, [aid, assignments]);
  
  const handleSave = () => {
    if (aid && aid !== 'new') {
      dispatch(updateAssignment({ ...assignment, course: cid }));
    } else {
      dispatch(addAssignment({ ...assignment, _id: new Date().getTime().toString(), course: cid }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="ms-5">
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
          <label htmlFor="title" className="form-label">Assignment Name</label>
            <input id="title" className="form-control" value={assignment.title} onChange={handleChange}/>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea id="description" className="form-control" rows={10} value={assignment.description} onChange={handleChange}></textarea>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
          </div>
          <div className="col">
          <input id="points" type="number" className="form-control" value={assignment.points} onChange={handleChange}/>
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
                      <input type="date" className="form-control" id="dueDate" value={assignment.dueDate} onChange={handleChange}/>
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
                      <input type="date" className="form-control" id="availableDate" value={assignment.availableDate} onChange={handleChange}/>
                        <button className="btn btn-secondary " type="button" id="button-addon3">
                          <FaRegCalendarAlt />
                        </button>
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="wd-available-until" className="form-label"><b>Until</b></label>
                      <div className="input-group">
                      <input type="date" className="form-control" id="availableUntil" value={assignment.availableUntil} onChange={handleChange}/>
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
          <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
            <button type="button" className="btn-danger btn btn-primary" onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
