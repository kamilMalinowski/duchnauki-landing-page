import { NavLink } from "react-router";
import "./Lesson.scss"

function Lesson({path}) {
  return (
  <NavLink to={path} className="lesson-card">
Zobacz grę
  </NavLink>
  );
}

export default Lesson;