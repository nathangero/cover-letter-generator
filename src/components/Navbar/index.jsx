import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../../firebase.js";
import ROUTES from "../../utils/routes";

export default function Nav() {

  const location = useLocation();

  return (
    <header>
      <nav className="nav nav-underline justify-content-end">
        <ul className="list-unstyled list-group list-group-horizontal fs-2">
          <li className="mx-3">
            <Link to={ROUTES.HOME}
              className="nav-link"
            >
              Home
            </Link>
          </li>

          {auth?.currentUser ?
            <div>
              <li className="mx-3">
                <Link
                  to={ROUTES.PROFILE}
                  className={
                    location.pathname === ROUTES.PROFILE ?
                      "nav-link active" :
                      "nav-link"
                  }
                >
                  My Profile
                </Link>
              </li>


              <li className="mx-3">
                <button className="nav-link">
                  Logout
                </button>
              </li>

            </div> :
            <li className="mx-3">
              <button className="nav-link">
                Login
              </button>
            </li>
          }
        </ul>


      </nav>
    </header>
  )
}