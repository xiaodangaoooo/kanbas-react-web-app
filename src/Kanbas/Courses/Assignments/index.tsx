import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from 'react-icons/bs';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
import ControlButtons from "./ControlButtons";
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setAssignments, deleteAssignment } from './reducer';
import * as client from "./client";
import "./index.css";

export default function Assignments() {
  const { cid } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<string | null>(null);  
  const assignments = useSelector((state: any) => state.assignments.assignments);
  const cidAssignments = assignments.filter((assignment: any) => assignment.course === cid);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAssignments = async () => {
      const fetchedAssignments = await client.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(fetchedAssignments));
    };
    fetchAssignments();
  }, [cid, dispatch]);

  const handleDelete = (assignmentId: string) => {
    setSelectedAssignmentId(assignmentId);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (selectedAssignmentId) {
      await client.deleteAssignment(selectedAssignmentId);
      dispatch(deleteAssignment(selectedAssignmentId));
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="ms-5">
      <div className="d-flex align-items-center mb-3">
        <div className="search-container me-2">
          <input
            type="text"
            id="SearchForAssignments"
            className="form-control"
            placeholder="Search..."
          />
          <CiSearch className="search-icon fs-5" />
        </div>
        <div className="d-flex ms-auto p-4">
          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-2">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>
          <Link to={`/Kanbas/Courses/${cid}/Assignments/new`} className="btn btn-lg btn-danger me-2">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Link>
        </div>
      </div>
      <div id="wd-assignments" className="pd-4">
        <ul id="wd-assignments" className="list-group rounded-0 me-2">
          <li className="wd-assignments list-group-item p-0 me-4 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-light d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown className="me-2 fs-3" />
              ASSIGNMENTS
              <div className="ms-auto">
                <span className="badge rounded-pill text-dark border-gray px-3 py-2">
                  40% of Total
                </span>
                <BsPlus className="fs-2 ms-2" />
                <IoEllipsisVertical className="fs-2 ms-2" />
              </div>
            </div>
            <ul className="wd-assignment-list list-group rounded-0">
              {cidAssignments.map((assignment: any) => (
                <li key={assignment._id} className="wd-assignment-info list-group-item d-flex align-items-center">
                  <div className="ms-auto">
                    <BsGripVertical className="me-2 fs-3" />
                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    <PiNotePencilBold className="text-success me-4 fs-3" style={{ cursor: 'pointer' }}/>
                    </Link>
                  </div>
                  <div className="flex-grow-1">
                  <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link d-block mb-1"
                    style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}
                  >
                    {assignment.title}
                  </Link>
                    <span className="wd-assignment-date-info letter-spacing">
                      <span style={{ color: 'red' }}>Multiple Modules</span> |{' '}
                      <b>Not available until</b> {assignment.availableDate} |
                      <br />
                      <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                    </span>
                  </div>
                  <div className="ms-auto">
                  <FaRegTrashAlt
                className="text-danger me-3"
                onClick={() => handleDelete(assignment._id)}
                style={{ cursor: 'pointer' }}
              />
                    <ControlButtons />
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this assignment?</Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>No</Button>
          <Button onClick={confirmDelete}>Yes</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
}