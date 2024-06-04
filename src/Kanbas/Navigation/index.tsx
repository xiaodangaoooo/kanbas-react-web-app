import { useLocation } from "react-router";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  return (
    <div
      id="wd-kanbas-navigation"
      className="list-group rounded-0"
      style={{ 
        backgroundColor: "black", 
        height: "100vh", 
        width: "110px", 
        position: "fixed", 
        top: 0,
        left: 0,
      }}
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>
      <a
        id="wd-account-link"
        href="#/Kanbas/Account"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Kanbas/Account") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser className={`fs-1 ${pathname.includes("/Kanbas/Account") ? "text-danger" : "text-white"}`} />
        <br /> Account
      </a>
      <a
        id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Kanbas/Dashboard") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <AiOutlineDashboard
          className={`fs-1 ${pathname.includes("/Kanbas/Dashboard") ? "text-danger" : "text-white"}`}
        />
        <br /> Dashboard
      </a>
      <a
        id="wd-course-link"
        href="#/Kanbas/Courses"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Kanbas/Courses") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <LiaBookSolid className={`fs-1 ${pathname.includes("/Kanbas/Courses") ? "text-danger" : "text-white"}`} />
        <br /> Courses
      </a>
      <a
        id="wd-course-link"
        href="#/Kanbas/Calendar"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Kanbas/Calendar") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <IoCalendarOutline
          className={`fs-1 ${pathname.includes("/Kanbas/Calendar") ? "text-danger" : "text-white"}`}
        />
        <br /> Calender
      </a>
      <a
        id="wd-course-link"
        href="#/Kanbas/Inbox"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Kanbas/Inbox") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <FaInbox className={`fs-1 ${pathname.includes("/Kanbas/Inbox") ? "text-danger" : "text-white"}`} />
        <br /> Inbox
      </a>
      <a
        id="wd-course-link"
        href="#/Labs"
        className={`list-group-item text-center border-0 ${
          pathname.includes("/Labs") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <LiaCogSolid className={`fs-1 ${pathname.includes("/Labs") ? "text-danger" : "text-white"}`} />
        <br /> Labs
      </a>
    </div>
  );
}