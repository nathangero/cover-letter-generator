import { Link } from "react-router-dom";
import ROUTES from "../../utils/routes";

export default function Nav() {

  return (
    <nav className="nav navbar">
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.PROFILE}>My Profile</Link>
    </nav>
  )
}