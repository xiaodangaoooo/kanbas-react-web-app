import React from 'react';
import { BsDownload, BsGearFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { FaFileImport } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router";

export default function GradesScreen() {
  const { cid } = useParams();

  const enrolledStudentIds = enrollments.filter(enrollment => enrollment.course === cid).map(enrollment => enrollment.user);
  const enrolledStudents = users.filter(user => enrolledStudentIds.includes(user._id)).map(student => ({
    id: student._id,
    name: `${student.firstName} ${student.lastName}`
  }));
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  return (
    <div className="container my-3">
      <div className="d-flex justify-content-end">
        <div className="ms-auto">
          <button className="btn btn-secondary me-2">
            <FaFileImport className="me-1 fs-6" /> Import
          </button>
        </div>
        <button className="btn btn-secondary me-2">
          <BsDownload /> Export <MdKeyboardArrowDown className="fs-5" />
        </button>
        <button className="btn btn-secondary">
          <BsGearFill />
        </button>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <label htmlFor="wd-student-names" className="form-label"><b>Student Names</b></label>
            <div className="position-relative">
              <CiSearch style={{ position: 'absolute', zIndex: 2, left: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'gray' }} />
              <select id="wd-student-names" className="form-select" style={{ paddingLeft: '35px' }}>
                <option>Search Students</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label htmlFor="wd-assignment-names" className="form-label"><b>Assignment Names</b></label>
            <div className="position-relative">
              <CiSearch style={{ position: 'absolute', zIndex: 2, left: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'gray' }} />
              <select id="wd-assignment-names" className="form-select" style={{ paddingLeft: '35px' }}>
                <option>Search Assignments</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-2 ms-1 row-cols-auto">
        <button className="btn btn-secondary">
          <CiFilter className="me-2 fs-4" /> Apply Filters
        </button>
      </div>
      <div className="row my-3">
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle">
            <thead>
              <tr>
                <th scope="col" className="fs-6 fw-normal" style={{width: "15%"}}>Student Name</th>
                {courseAssignments.map(assignment => (
                  <th key={assignment._id} scope="col" className="fs-6 fw-normal text-center" style={{width: "15%"}}>
                    {assignment.title}<br />
                    Out of {assignment.points}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enrolledStudents.map(student => (
                <tr key={student.id}>
                  <th scope="row" className="text-danger">{student.name}</th>
                  {courseAssignments.map(assignment => {
                    const grade = grades.find(g => g.student === student.id && g.assignment === assignment._id);
                    return (
                      <td key={assignment._id} className="text-center">{grade ? `${grade.grade}%` : 'N/A'}</td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
