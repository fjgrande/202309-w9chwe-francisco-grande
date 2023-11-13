import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li>
          <NavLink to="/users">users</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
