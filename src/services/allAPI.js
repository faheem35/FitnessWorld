//all api codes here . this file name is allAPI.js

import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";


//registerAPI called by auth page when user clicks on register button
export const registerAPI=async(reqBody)=>{
          return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

//resendOtpAPI called by otp page when user clicks on resend otp button
export const resendOtpAPI=async(reqBody)=>{
          return await commonAPI("POST",`${SERVER_URL}/resendotp`,reqBody)
}


//otpVerificationAPI called by otp page when user clicks on verify otp button
export const otpVerificationAPI=async(reqBody)=>{
          return await commonAPI("POST",`${SERVER_URL}/otpverification`,reqBody)
}


//loginAPI called by Auth page when user clicks on login button
export const loginAPI=async(reqBody)=>{
          return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}


//adminLoginAPI called by AdminAuth page when user clicks on login button
export const adminLoginAPI=async(reqBody)=>{
          return await commonAPI("POST",`${SERVER_URL}/adminlogin`,reqBody)
}

//adminAddWorkoutAPI called by AdminAddWorkout page when user clicks on  Add Workout button
export const adminAddWorkoutAPI=async(reqBody,reqHeader)=>{
          return await commonAPI("POST",`${SERVER_URL}/adminAddWorkout`,reqBody,reqHeader)
}

//allWorkoutsAPI called by projects page when page loaded in browser (useEffect())
export const allWorkoutsAPI=async(searchKey,reqHeader)=>{
          return await commonAPI("GET",`${SERVER_URL}/all-workouts?search=${searchKey}`,{},reqHeader)
}

//removeWorkoutAPI called by View compoenent when user clicked on delete button (/workouts/6799e19dd12049f0300fc494/remove)
export const removeWorkoutAPI=async(id,reqHeader)=>{
          return await commonAPI("DELETE",`${SERVER_URL}/workouts/${id}/remove`,{},reqHeader)
}

//updateWorkoutAPI called by Edit compoenent when user clicked on update button (/workouts/6799e19dd12049f0300fc494/edit)
export const updateWorkoutAPI=async(id,reqBody,reqHeader)=>{
          return await commonAPI("PUT",`${SERVER_URL}/workouts/${id}/edit`,reqBody,reqHeader)
}


//allWorkoutsUsersideAPI 
export const allWorkoutsUsersideAPI=async()=>{
          return await commonAPI("GET",`${SERVER_URL}/all-workouts-userSide`,{})
}

//userlistAPI 
export const userlistAPI=async()=>{
          return await commonAPI("GET",`${SERVER_URL}/userlist`,{})
}


// //usereditAPI
// export const usereditAPI=async(id,reqBody)=>{
//           return await commonAPI("PATCH",`${SERVER_URL}/workouts/${id}`,reqBody)
// }

export const usereditAPI = async (id, reqBody) => {
          return await commonAPI("PATCH", `${SERVER_URL}/useredit/${id}`, reqBody);
      };
      