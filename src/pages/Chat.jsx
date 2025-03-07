

// import React, { useState } from "react";
// import axios from "axios";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [error, setError] = useState(null);

//   const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
//   const API_URL = "https://openrouter.ai/api/v1/chat/completions";

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessage = { role: "user", content: input };
//     const updatedMessages = [...messages, newMessage];

//     setMessages(updatedMessages);
//     setInput("");
//     setError(null);

//     try {
//       const response = await axios.post(
//         API_URL,
//         {
//           model: "openai/gpt-3.5-turbo",
//           messages: updatedMessages,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${API_KEY}`,
//             "Content-Type": "application/json",
//             "HTTP-Referer": window.location.origin,
//             "X-Title": "My Chatbot",
//           },
//         }
//       );

//       if (response.data?.choices?.[0]?.message) {
//         setMessages([...updatedMessages, response.data.choices[0].message]);
//       } else {
//         setError("Unexpected API response.");
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setError(
//         `API Error: ${error.response ? error.response.data.error.message : error.message}`
//       );
//     }
//   };

//   return (
//    <div className="bg-black">
//       <Container fluid className="vh-100 d-flex flex-column justify-content-center">
//         <Row className="justify-content-center">
//           <Col xs={12} md={8} lg={6}>
//             <h2 className="text-center mb-3 text-danger">FitBuddy</h2>
//             <Card className="chat-box p-3 border rounded overflow-auto bg-dark" style={{ height: "70vh" }}>
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`d-flex ${msg.role === "user" ? "justify-content-end" : "justify-content-start"} my-2`}
//                 >
//                   <p
//                     className={`p-2 rounded text-white ${msg.role === "user" ? "bg-secondary" : "bg-warning"}`}
//                     style={{ maxWidth: "70%", textAlign: "justify", wordBreak: "break-word" }}
//                   >
//                     {msg.content}
//                   </p>
//                 </div>
//               ))}
//             </Card>
//             {error && <p className="text-danger mt-2 text-center">{error}</p>}
//           </Col>
//         </Row>
//         <Row className="justify-content-center mt-3">
//           <Col xs={12} md={8} lg={6} className="d-flex">
//             <Form.Control
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               placeholder="Type a message..."
//             />
//             <Button onClick={sendMessage} variant="success" className="ms-2">
//               Send
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//    </div>
//   );
// };

// export default Chat;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Header from "../components/Header";

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Welcome to FitBuddy! Ask me anything about fitness, workouts, or nutrition." }
  ]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
  const API_URL = "https://openrouter.ai/api/v1/chat/completions";

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages);
    setInput("");
    setError(null);

    try {
      const response = await axios.post(
        API_URL,
        {
          model: "openai/gpt-3.5-turbo",
          messages: updatedMessages,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": window.location.origin,
            "X-Title": "FitBuddy",
          },
        }
      );

      if (response.data?.choices?.[0]?.message) {
        setMessages([...updatedMessages, response.data.choices[0].message]);
      } else {
        setError("Unexpected API response.");
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setError(
        `API Error: ${error.response ? error.response.data.error.message : error.message}`
      );
    }
  };

  return (
  <>
      <Header />
      <div className="bg-black text-white pt-3">
        <Container fluid className="vh-100 d-flex flex-column justify-content-center">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <h2 className="text-center mb-3 text-warning fw-bold">🏋️ FitBuddy</h2>
              <Card className="chat-box p-3 border rounded overflow-auto bg-black" style={{ height: "70vh" }}>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`d-flex ${msg.role === "user" ? "justify-content-end" : "justify-content-start"} my-2`}
                  >
                    <p
                      className={`p-2 rounded ${msg.role === "user" ? " text-white" : "bg-secondary text-white"}`}
                      style={{ maxWidth: "70%", textAlign: "justify", wordBreak: "break-word" }}
                    >
                      {msg.content}
                    </p>
                  </div>
                ))}
              </Card>
              {error && <p className="text-danger mt-2 text-center">{error}</p>}
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col xs={12} md={8} lg={6} className="d-flex">
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about workouts, diet, or fitness tips..."
              />
              <Button onClick={sendMessage} variant="success" className="ms-2">
                Send
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
  </>
  );
};

export default Chat;

