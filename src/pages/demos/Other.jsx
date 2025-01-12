import { NavLink } from "react-router";
import Lesson from "../../components/ui/Lesson";
import "./Other.scss";

function Other() {
  return (
    <>
      <div className="other">
        <header>
          <nav>
            <NavLink to="/" className="button secondary maxContent">
              Powrót
            </NavLink>
          </nav>
        </header>
        <div className="other-section">
          <Lesson target="_blank" path="/demos/other/game_1" />
          <Lesson path="/" />
          <Lesson path="/" />
          <Lesson path="/" />
          <Lesson path="/" />
          <Lesson path="/" />
        </div>
      </div>
    </>
  );
}

export default Other;
