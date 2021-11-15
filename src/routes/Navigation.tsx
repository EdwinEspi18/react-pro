import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "../logo.svg";
export default function App() {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='Logo' />
          <ul>
            <li>
              <NavLink to='/' end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' end>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' end>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/users' element={<h1>Users</h1>} />
          <Route path='/' element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
