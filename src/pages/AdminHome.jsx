// import React, { useContext, useEffect, useState } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { allWorkoutsAPI, removeWorkoutAPI } from "../services/allAPI";
// import SERVER_URL from "../services/serverURL";
// import Edit from "../components/Edit";
// import { editWorkoutResponseContext } from "../contexts/ContextApi";

// const AdminHome = () => {
//   const {editWorkoutResponse, setEditWorkoutResponse}=useContext(editWorkoutResponseContext)

//   const [searchKey, setSearchKey] = useState("");
//   const [allWorkouts, setAllWorkouts] = useState([]);
//   console.log(allWorkouts);

//   useEffect(() => {
//     getAllWorkouts();
//   }, [searchKey,editWorkoutResponse]);

//   const getAllWorkouts = async () => {
//     const token = localStorage.getItem("adminToken");
//     if (token) {
//       const reqHeader = {
//         Authorization: `Bearer ${token}`,
//       };
//       try {
//         const result = await allWorkoutsAPI(searchKey, reqHeader);
//         if (result.status === 200) {
//           setAllWorkouts(result.data);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const deleteWorkout= async (id)=>{
//     const token = localStorage.getItem('adminToken')
//     if(token){
//       //api call
//       const reqHeader={
//         "Authorization": `Bearer ${token}`
//       }
//       try{
//         await removeWorkoutAPI(id,reqHeader)
//         getAllWorkouts()

//       }catch(err){
//         console.log(err);

//       }
//    }
//   }

//   return (
//     <Container>
//       {/* upload button */}
//       <Link to={"/adminAddWorkout"}>
//         <div className="text-end mt-3">
//           <Button variant="warning">
//             <i className="fa-solid fa-plus rounded-circle bg-white text-black p-2 me-1"></i>{" "}
//             <span className="fw-bold">Upload Workout</span>
//           </Button>
//         </div>
//       </Link>

//       {/* search block */}
//       <div className="d-flex justify-content-between mt-3 mb-3">
//         <h2 className="text-danger ">Uploaded Workouts</h2>
//         <input
//           onChange={(e) => setSearchKey(e.target.value)}
//           placeholder="Search workouts"
//           type="text"
//           className="form-control w-25  "
//           style={{backgroundColor:"pink"}}
//         />
//       </div>



//       {allWorkouts.length > 0 ? (
//         allWorkouts.map(workout => (
//           <Row key={workout?._id} className="p-2 bg-black text-white align-items-center rounded mb-2">
//             <Col md={1} className="text-start">
//               <i className="fa-solid fa-bars"></i>
//             </Col>
//             <Col md={4} className="text-start">
//               <img height={'200px'}
//                 className="w-50"
//                 src={`${SERVER_URL}/uploads/${workout?.workoutImg}`}
//                 alt='no image'
//               />
//             </Col>
//             <Col md={3} className="text-start">
//               <h3 className="mb-0 ">{workout?.workoutName }</h3>
//             </Col>
//             <Col md={2} className="text-center">
//                <Edit workout={workout}/>
//             </Col>
//             <Col md={2} className="text-center">

//               <button onClick={()=>deleteWorkout(workout?._id)} className='btn ' style={{color:"red"}}> <i className='fa-solid fa-trash'></i></button>
//             </Col>
//           </Row>
//         ))
//       ) : (
//         <p className="text-center text-muted">No workouts found.</p>
//       )}
//     </Container>
//   );
// };

// export default AdminHome;



// import React, { useContext, useEffect, useState } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { allWorkoutsAPI, removeWorkoutAPI } from "../services/allAPI";
// import SERVER_URL from "../services/serverURL";
// import Edit from "../components/Edit";
// import { editWorkoutResponseContext } from "../contexts/ContextApi";

// const AdminHome = () => {
//   const { editWorkoutResponse } = useContext(editWorkoutResponseContext);
//   const [searchKey, setSearchKey] = useState("");
//   const [allWorkouts, setAllWorkouts] = useState([]);

//   useEffect(() => {
//     getAllWorkouts();
//   }, [searchKey, editWorkoutResponse]);

//   const getAllWorkouts = async () => {
//     const token = localStorage.getItem("adminToken");
//     if (token) {
//       const reqHeader = {
//         Authorization: `Bearer ${token}`,
//       };
//       try {
//         const result = await allWorkoutsAPI(searchKey, reqHeader);
//         if (result.status === 200) {
//           setAllWorkouts(result.data);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const deleteWorkout = async (id) => {
//     const token = localStorage.getItem("adminToken");
//     if (token) {
//       try {
//         await removeWorkoutAPI(id, { Authorization: `Bearer ${token}` });
//         getAllWorkouts();
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   return (
//     <Container fluid className="bg-dark text-light min-vh-100 py-4">
//       {/* Upload button */}
//       <div className="d-flex justify-content-end mb-3">
//         <Link to="/adminAddWorkout">
//           <Button variant="danger">
//             <i className="fa-solid fa-plus bg-white text-dark p-2 rounded-circle me-1"></i>
//             <span className="fw-bold">Upload Workout</span>
//           </Button>
//         </Link>
//       </div>



//       {/* Search block */}
//       <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
//         <h2 className="text-danger ">Uploaded Workouts</h2>
//         <input
//           onChange={(e) => setSearchKey(e.target.value)}
//           placeholder="Search workouts"
//           type="text"
//           className="form-control w-25 w-md-50 w-sm-100 mt-2 mt-md-0"
//           style={{ color: "black", borderColor: "red" }}
//         />
//       </div>


//       {/* Workouts list */}
//       {allWorkouts.length > 0 ? (
//         <Row className="g-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
//           {allWorkouts.map((workout) => (
//             <Col key={workout?._id}>
//               <div className="p-3 bg-black text-white rounded shadow-sm">
//                 <div className="d-flex justify-content-between align-items-center">
//                   <i className="fa-solid fa-bars"></i>
//                   <Edit workout={workout} />
//                 </div>

//                 {/* Centering the image */}
//                 <div className="d-flex justify-content-center mt-2">
//                   <img
//                     className="img-fluid rounded"
//                     style={{ maxHeight: "200px", objectFit: "cover" }}
//                     src={`${SERVER_URL}/uploads/${workout?.workoutImg}`}
//                     alt="Workout"
//                   />
//                 </div>

//                 <h4 className="mt-3 text-center">{workout?.workoutName}</h4>
//                 <div className="text-end">
//                   <button onClick={() => deleteWorkout(workout?._id)} className="btn btn-danger">
//                     <i className="fa-solid fa-trash"></i>
//                   </button>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       ) : (
//         <p className="text-center text-muted">No workouts found.</p>
//       )}

//     </Container>
//   );
// };

// export default AdminHome;
