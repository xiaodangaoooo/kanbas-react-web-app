import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from 'react-icons/bs';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import ControlButtons from "./ControlButtons";
import "./index.css";

export default function Assignments() {
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
          <button id="wd-add-assignment" className="btn btn-lg btn-danger me-2">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </button>
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
              <li className="wd-assignment-info list-group-item d-flex align-items-center">
                <div className="ms-auto">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="text-success me-4 fs-3" />
                </div>
                <div className="flex-grow-1">
                  <a className="wd-assignment-link d-block mb-1"
                    href="#/Kanbas/Courses/1234/Assignments/123" 
                    style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                    A1 - ENV + HTML
                  </a>
                  <span className="wd-assignment-date-info letter-spacing">
                  <span style={{ color: 'red'}}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                    <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </span>
                </div>
                <div className="ms-auto">
                  <ControlButtons />
                </div>
              </li>
              <li className="wd-assignment-info list-group-item d-flex align-items-center">
                <div className="ms-auto">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="text-success me-4 fs-3" />
                </div>
                <div className="flex-grow-1">
                  <a className="wd-assignment-link d-block mb-1"
                    href="#/Kanbas/Courses/1234/Assignments/123" 
                    style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                    A2 - CSS + BOOTSTRAP
                  </a>
                  <span className="wd-assignment-date-info letter-spacing">
                  <span style={{ color: 'red'}}>Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |
                    <br />
                    <b>Due</b> May 20 at 11:59pm | 100 pts
                  </span>
                </div>
                <div className="ms-auto">
                  <ControlButtons />
                </div>
              </li>
              <li className="wd-assignment-info list-group-item d-flex align-items-center">
                <div className="ms-auto">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="text-success me-4 fs-3" />
                </div>
                <div className="flex-grow-1">
                  <a className="wd-assignment-link d-block mb-1 "
                    href="#/Kanbas/Courses/1234/Assignments/123" 
                    style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                    A3 - JAVASCRIPT + REACT
                  </a>
                  <span className="wd-assignment-date-info letter-spacing">
                  <span style={{ color: 'red'}}>Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |
                    <br />
                    <b>Due</b> May 27 at 11:59pm | 100 pts
                  </span>
                </div>
                <div className="ms-auto">
                  <ControlButtons />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
