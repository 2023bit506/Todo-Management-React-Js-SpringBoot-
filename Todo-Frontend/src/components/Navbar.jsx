// import React from 'react';
// import { Link } from 'react-router-dom'; // import Link
// import Addtodo from './Addtodo';
// import Home from './Home';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">TODO Management</Link>
        
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link to="/" className="nav-link active" aria-current="page">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/addtodo" className="nav-link">
//                 Add To-DO
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // get current path for active link

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          TODO Management
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link
                to="/"
                className={`nav-link px-3 py-2 rounded ${
                  location.pathname === '/' ? 'active' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                to="/addtodo"
                className={`nav-link px-3 py-2 rounded ${
                  location.pathname === '/addtodo' ? 'active' : ''
                }`}
              >
                Add TODO
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Custom CSS ===== */}
      <style>
        {`
          .nav-link {
            transition: all 0.3s ease;
            color: #ffffff !important;
          }
          .nav-link:hover {
            background-color: #1c1c1c;
            color: #ffd700 !important;
            transform: translateY(-2px);
          }
          .nav-link.active {
            background-color: #333333;
            color: #ffd700 !important;
            font-weight: 600;
          }
          .navbar-brand {
            transition: all 0.3s ease;
          }
          .navbar-brand:hover {
            color: #ffd700 !important;
            transform: scale(1.05);
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
