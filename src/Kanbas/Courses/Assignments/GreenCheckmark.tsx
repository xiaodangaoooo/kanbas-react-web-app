import { FaCheckCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle 
        className="text-success me-1 position-absolute me-4 fs-3" />
      <FaCircle className="text-white me-4 fs-3" />
    </span>
  );
}
