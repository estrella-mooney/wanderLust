// import { Link } from 'react-scroll'
// import AddHikeForm from './AddHikeForm'

// export default function Nav() {
//   return (
//     // <div className="nav-bar">
//     <>
//       <header className="nav">
//         <nav className="nav__container__actions">
//           <ul>
//             <li>
//               <Link activeClass="active" smooth spy to="home">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link activeClass="active" smooth spy to="hikes">
//                 Hikes
//               </Link>
//             </li>
//             <li>
//               <Link activeClass="active" smooth spy to="addhike">
//                 Add your own hike
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <section id="home">HOME</section>
//       <section id="hikes">HIKES</section>
//       <section id="addhike">ADD YOUR OWN HIKE</section>
//     </>
//     // </div>
//   )
// }

import { Link } from 'react-scroll'
import AddHikeForm from './AddHikeForm'

export default function Nav() {
  return (
    // <div className="nav-bar">
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
      {/* <section id="home">HOME</section>
      <section id="hikes">HIKES</section>
      <section id="addhike">ADD YOUR OWN HIKE</section> */}
    </>
    // </div>
  )
}
