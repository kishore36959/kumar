// import React from 'react';
// // import './App.css';
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from 'react-toastify';
// import Login from './LoginPage/Login';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Dashboard } from './Validation/Dashboard';
// // import Signup from './Signup';

// function App() {
//   return (
//     <div>
//       <ToastContainer />
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/Dashboard" element={<Dashboard />} />
//           {/* <Route path="/Signup" element={<Signup />} /> */}

//         </Routes>
// //       </Router>
//     </div>
//   );
// }
// export default App;


// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './LoginPage/Login';
import Dashboard from './LoginPage/Dashboard';
import Navbar from './LoginPage/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          
          {/* <Route path="/Signup" element={<Signup />} /> */}

        </Routes>
        </div>
              {/* <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
       */}
    </Router>
  );
}

export default App;



// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import Home1 from './Lazyload/Home'
// // import About from './Lazyload/About'

// const HomePage = React.lazy(() => import('./Lazyload/Home'));
// const AboutPage = React.lazy(() => import('./Lazyload/About'));

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>

//         <hr />
//         </div>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//           </Routes>
//         </Suspense>
      
//     </Router>
//   );
// };

// export default App;