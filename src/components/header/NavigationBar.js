import { Link } from "react-router-dom";

export default function NavigationBar() {

   return (
      <>
         <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container">
               <Link className="navbar-brand" to="/">
                  English Tutor
               </Link>

               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThisNavbar"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="collapseThisNavbar">
                  <ul className="navbar-nav me-auto">

                     <li className="nav-item">
                        <Link className="nav-link disabled" to="/fuckthisshit">
                           About
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link className="nav-link" to="/gep_mcq">
                           GEP MCQ
                        </Link>
                     </li>

                  </ul>

                  <span className="navbar-text">
                     Signed in as: <strong>John Doe</strong>
                  </span>
               </div>
            </div>
         </nav>
      </>
   );
}
