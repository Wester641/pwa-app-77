// "use client";
// import axios from "axios";
// // import axios from "axios";
// // import React, { useState } from "react";

// // function UsersList() {
// //   const getUserList = () => {
// //     const [users, setUsers] = useState();
// //     //     fetch("https://jsonplaceholder.typicode.com/todos/1")
// //     //       .then((res) => res.json())
// //     //       .then((json) => console.log(json));
// //     //   };
// //     // axios
// //     //   .get("https://jsonplaceholder.typicode.com/todos/1")
// //     //   .then((res) => setUsers(res.json()));
// //     console.log(users);

// //     return (
// //       <div className="bg-indigo-500">
// //         {/* <button onClick={getUserList}>Click User!</button> */}
// //         <p>
// //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos officia
// //           eveniet doloribus omnis rerum libero ipsa saepe odio minima molestiae!
// //         </p>
// //       </div>
// //     );
// //   };
// // }

// // export default UsersList;

// import React, { useState } from "react";

// function UsersList() {
//   const [users, setUsers] = useState([]);

//   const getUsers = (e) => {
//     e.preventDefault();
//     try {
//       axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
//         const data = res.data;
//         setUsers(data);
//       });
//     } catch (error) {
//       console.log(error || "Произошла ощибка!");
//     }
//   };
//   console.log(users);

//   return (
//     <div className="bg-indigo-500 w-full h-2/5 text-center p-5">
//       <h2>UsersList</h2>
//       <button className=" bg-orange-400 rounded px-5 my-5" onClick={getUsers}>
//         Click me!
//       </button>
//       <div>
//         {/* {users.map((el) => (
//           <ul className="flex gap-5" key={el.id}>
//             <li>{el.name}</li>
//             <li>{el.username}</li>
//             <li>{el.email}</li>
//           </ul>
//         ))} */}
//       </div>
//     </div>
//   );
// }

// export default UsersList;
import React from "react";

function UsersList() {
  return <div>UsersList</div>;
}

export default UsersList;
