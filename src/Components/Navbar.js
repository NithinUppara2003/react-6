import {Link} from 'react-router-dom'
import './Content.css'
function Navbar() {
    return (
        <div className='main'>
            <nav className="navbar bg-info" id='main'>
          
          <div className="nav">
              <Link to="/" class="nav-link">Home</Link>
              <Link to="/educationalinfo" class="nav-link">EducationalInfo</Link>
              <Link to="/skill" class="nav-link">Skills</Link>
              <Link to="/contact" class="nav-link">Contact</Link>
        </div>
      </nav>
        </div>
    )
}
export default Navbar;