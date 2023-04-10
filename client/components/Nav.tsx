import { Link } from 'react-scroll'
import AddHikeForm from './AddHikeForm'

export default function Nav() {
  return (
    <div className="nav-bar">
      <>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#hikes">Hikes</a>
            </li>
            <li>
              <a href="#addhike">Add your own hike</a>
            </li>
          </ul>
        </nav>
      </>
    </div>
  )
}
