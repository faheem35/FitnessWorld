
// import React, { useEffect, useRef, useState } from "react";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// function randomID(len = 5) {
//   let result = "";
//   const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
//   for (let i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return result;
// }

// // Function to check if the current time is within the allowed range (8 AM - 10 AM)
// function isWithinAllowedTime() {
//   const now = new Date();
//   const hours = now.getHours();
//   return hours >= 8 && hours < 10; // 8 AM to 10 AM
// }

// const TrainerHome = () => {
//   const [joined, setJoined] = useState(false);
//   const meetingContainerRef = useRef(null);
//   const roomID = "trainingRoom123"; // Fixed Room ID for consistency

//   const joinMeeting = () => {
//     if (!isWithinAllowedTime()) {
//       alert("You can only join between 8 AM and 10 AM.");
//       return;
//     }

//     const appID = 691848548;
//     const serverSecret = "f21303cc94bab5be58a0f42d20a537e3";

//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomID,
//       randomID(5),
//       randomID(5)
//     );

//     const zp = ZegoUIKitPrebuilt.create(kitToken);

//     zp.joinRoom({
//       container: meetingContainerRef.current,
//       scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
//     });

//     setJoined(true);
//   };

//   return (
//     <div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
//       {!joined ? (
//         <button onClick={joinMeeting} style={{ padding: "10px 20px", fontSize: "16px" }}>
//           Join Meeting
//         </button>
//       ) : (
//         <div className="myCallContainer" ref={meetingContainerRef} style={{ width: "100%", height: "100%" }}></div>
//       )}
//     </div>
//   );
// };

// export default TrainerHome;


import React, { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function randomID(len = 5) {
  let result = "";
  const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Function to check if the current time is within the allowed range (8 AM - 10 AM)
function isWithinAllowedTime() {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 7 && hours < 16; // 8 AM to 10 AM
}

const TrainerHome = () => {
  const [joined, setJoined] = useState(false);
  const meetingContainerRef = useRef(null);
  const roomID = "trainingRoom123"; // Fixed Room ID for consistency

  const joinMeeting = () => {
    if (!isWithinAllowedTime()) {
      alert("You can only join between 8 AM and 10 AM.");
      return;
    }

    const appID = 691848548;
    const serverSecret = "f21303cc94bab5be58a0f42d20a537e3";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: meetingContainerRef.current,
      scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
    });

    setJoined(true);
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 text-center">
      {!joined ? (
        <Button variant="primary" onClick={joinMeeting} className="px-4 py-2 fs-5">
          Join Session
        </Button>
      ) : (
        <div ref={meetingContainerRef} className="w-100 h-100"></div>
      )}
    </Container>
  );
};

export default TrainerHome;
