import React from "react";
// import React, { useState, useEffect } from 'react'
// // import axios from "axios";
import { Link } from 'react-router-dom';
// import Validation from './Validation';

// const Dashboard = () => {

//   const [profile, setProfile] = useState([]);


//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
//       setProfile(response.data);

//     });

//   }, []);

//   return (

//     <div>
      
//       <h2>User Page</h2>

//       {profile.map((user) => (
//         <tr key={user.id}> 
//         <td> {user.id} </td>
//         <td> {user.name} </td>
        
//         </tr>
     

//       ))}
//          <button><Link to = "/Validation">back to login </Link></button>

//     </div>
//   );
// }

// export { Dashboard }
import "./Login.css"
function Dashboard() {
  return (
    <div className="ref1">
      <h1 className="ref3">Dashboard</h1>
      <button className="ref2">Bag Receive</button>
      <button className="ref2">Bag Open</button>
      <button className="ref2">Bag Close</button>
      <button className="ref2">Bag Despatch</button>
      <button className="back"><Link to="/Login"> Back to login page </Link> </button>
      {/* <button className="back">Back to login</button> */}

    </div>
  );
}

export default Dashboard;


