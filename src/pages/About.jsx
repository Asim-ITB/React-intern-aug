import { NavLink, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <div>
        <NavLink to={"principal"}>Lets see principal</NavLink>
      </div>
      <div>
        <NavLink to={"sajal"}>Lets see sajal</NavLink>
      </div>
      About content is here <Outlet />
    </div>
  );
}

export default About;
