import { NavLink, Outlet } from "react-router-dom";
import data from "../assets/data";
function About() {
  const linkData = data.map((item, index) => (
    <div key={item.id}>
      <NavLink to={`${index + 1}`}>Lets see {item.name}</NavLink>
    </div>
  ));
  return (
    <div>
      {linkData}
      About content is here <Outlet />
    </div>
  );
}

export default About;
