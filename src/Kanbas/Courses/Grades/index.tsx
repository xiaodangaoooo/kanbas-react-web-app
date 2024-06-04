import { BsDownload, BsGearFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { FaFileImport } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function GradesScreen() {
  return (
    <div className="container my-3">
      <div className="d-flex justify-content-end">
        <div className="ms-auto">
          <button className="btn btn-secondary me-2">
          <FaFileImport className="me-1 fs-6"/> Import
          </button>
        </div>
        <button className="btn btn-secondary me-2">
          <BsDownload /> Export <MdKeyboardArrowDown className="fs-5"/>

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
        <CiFilter className="me-2 fs-4" />
          Apply Filters
        </button>
    </div>
    <div className="row my-3">
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead>
            <tr>
              <th scope="col" className="fs-6 fw-normal" style={{width: "15%"}}>Student Name</th>
              <th scope="col" className="fs-6 fw-normal text-center" style={{width: "15%"}}>
                A1 SETUP<br/>
                Out of 100
              </th>
              <th scope="col" className="fs-6 fw-normal text-center" style={{width: "15%"}}>
                A2 HTML<br/>
                Out of 100
              </th>
              <th scope="col" className="fs-6 fw-normal text-center" style={{width: "15%"}}>
                A3 CSS<br/>
                Out of 100
              </th>
              <th scope="col" className="fs-6 fw-normal text-center" style={{width: "15%"}}>
                A4 BOOTSTRAP<br/>
                Out of 100
              </th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <th scope="row" className="text-danger">Jane Adams</th>
                <td className="text-center">100%</td>
                <td className="text-center">96.67%</td>
                <td className="text-center">
                  <input type="percentile" value="100%" className="form-control text-center"/>
                </td>
                <td className="text-center">100%</td>
              </tr>
              <tr>
                <th scope="row" className="text-danger">Christina Allen</th>
                <td className="text-center">100%</td>
                <td className="text-center">100%</td>
                <td className="text-center">
                  <input type="percentile" value="100%" className="form-control text-center"/>
                </td>
                <td className="text-center">100%</td>
              </tr>
              <tr>
                <th scope="row" className="text-danger">Samreen Ansari</th>
                <td className="text-center">100%</td>
                <td className="text-center">100%</td>
                <td className="text-center">
                  <input type="percentile" value="100%" className="form-control text-center"/>
                </td>
                <td className="text-center">92.18%</td>
              </tr>
              <tr>
                <th scope="row" className="text-danger">Han Bao</th>
                <td className="text-center">100%</td>
                <td className="text-center">100%</td>
                <td className="text-center">
                  <input type="percentile" value="86.1%" className="form-control text-center"/>
                </td>
                <td className="text-center">100%</td>
              </tr>
              <tr>
                <th scope="row" className="text-danger">Mahi Sai Srinivas Bobbili</th>
                <td className="text-center">100%</td>
                <td className="text-center">100%</td>
                <td className="text-center">
                  <input type="percentile" value="100%" className="form-control text-center"/>
                </td>
                <td className="text-center">100%</td>
              </tr>
              <tr>
                <th scope="row" className="text-danger">Siran Cao</th>
                <td className="text-center">100%</td>
                <td className="text-center">100%</td>
                <td className="text-center">
                  <input type="percentile" value="100%" className="form-control text-center"/>
                </td>
                <td className="text-center">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
