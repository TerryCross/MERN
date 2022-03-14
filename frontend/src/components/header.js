

import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';   /// font awesome
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="header">
          <div className="logo"></div>
          <Link to="/">GoalSettter</Link>
          <ul>
            <li>
              <Link to="/login">
                <FaSignOutAlt />Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaSignInAlt />Register
              </Link>
            </li>
          </ul>
        </header>
    )
}

export default Header;
