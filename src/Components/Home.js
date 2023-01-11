import React, { useState } from "react";

export default function Home() {
  const [user_Name, setuser_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [user_messege, setuser_messege] = useState("");
  const [user_age, setuser_age] = useState("");
  const sendResponse = () => {
    var url =
      "https://api.whatsapp.com/send?phone=8824316660" +
      "&text=" +
      "Your Name: " +
      user_Name +
      "%0a" +
      "Your Email: " +
      user_email +
      "%0a" +
      "Your Messege: " +
      user_messege +
      "%0a" +
      "Your Age: " +
      user_age +
      "%0a";
    window.open(url, "_blank");
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "14px" }}>Name</h1>
          <input
            value={user_Name}
            onChange={(e) => setuser_name(e.target.value)}
            style={{ width: "90%", height: "40px" }}
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div
          style={{
            width: "90%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "14px" }}>Email</h1>
          <input
            value={user_email}
            onChange={(e) => setuser_email(e.target.value)}
            style={{ width: "90%", height: "40px" }}
            type="text"
            placeholder="Enter Email"
          />
        </div>
        <div
          style={{
            width: "90%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "14px" }}>Messege</h1>
          <input
            value={user_messege}
            onChange={(e) => setuser_messege(e.target.value)}
            style={{ width: "90%", height: "40px" }}
            type="text"
            placeholder="Enter Messege"
          />
        </div>

        <div
          style={{
            width: "90%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "14px" }}>Age</h1>
          <input
            value={user_age}
            onChange={(e) => setuser_age(e.target.value)}
            style={{ width: "90%", height: "40px" }}
            type="text"
            placeholder="Enter YOur Age"
          />
        </div>

        <button
          style={{
            width: "20%",
            height: "40px",
            margin: "20px",
            cursor: "pointer",
          }}
          onClick={sendResponse}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
