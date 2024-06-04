import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Courses() {
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop();
  const courseName = "Course 1234";

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <nav aria-label="breadcrumb" className="d-flex align-items-center">
          <HiBars3 className="me-3 fs-2" />
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">{courseName}</li>
          <MdOutlineKeyboardArrowRight className="mx-2" style={{ color: 'gray' }} />
          <li className="breadcrumb-item active" aria-current="page">
            {currentPage}
          </li>
        </ol>
        </nav>
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}