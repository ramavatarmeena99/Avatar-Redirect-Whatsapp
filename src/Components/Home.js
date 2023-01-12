import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function Home() {
  const [user_Name, setuser_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [user_messege, setuser_messege] = useState("");
  const [user_Mobile_number, setuser_mobile_number] = useState("");
  const sendResponse = () => {
    if (
      user_Name === "" ||
      user_email === "" ||
      user_messege === "" ||
      user_Mobile_number === ""
    ) {
      alert("empty data");
      return;
    }
    var url =
      "https://api.whatsapp.com/send?phone=918824316660" +
      "&text=" +
      "Name: " +
      user_Name +
      "%0a" +
      "Email: " +
      user_email +
      "%0a" +
      "Messege: " +
      user_messege +
      "%0a" +
      "Contact Number : " +
      user_Mobile_number +
      "%0a";
    window.open(url, "_blank");
  };
  const sendEmail = () => {
    window.open(
      `mailto:meenaramavatar48@gmail.com?subject=${user_Name}&body=${user_messege}`
    );
  };
  return (
    <>
      <Header />

      <MainContainer>
        <ForMiddleDiv>
          <p
            style={{
              fontSize: "20px",
              borderBottom: "1px solid white",
              color: "#2a8ff7",
            }}
          >
            Contact Form
          </p>

          <UserDetails>
            <H1>Name</H1>
            <Input
              value={user_Name}
              onChange={(e) => setuser_name(e.target.value)}
              type="text"
              placeholder="Enter Name"
            />
          </UserDetails>
          <UserDetails>
            <H1>Email</H1>
            <Input
              value={user_email}
              onChange={(e) => setuser_email(e.target.value)}
              type="text"
              placeholder="Enter Email"
            />
          </UserDetails>
          <UserDetails>
            <H1>Contact Number</H1>
            <Input
              value={user_Mobile_number}
              onChange={(e) => setuser_mobile_number(e.target.value)}
              type="number"
              placeholder="Enter Your Contact Number"
            />
          </UserDetails>
          <UserDetails>
            <H1>Messege</H1>
            <TextArea
              value={user_messege}
              onChange={(e) => setuser_messege(e.target.value)}
              type="text"
              placeholder="Enter Messege"
            />
          </UserDetails>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WhatsappButton onClick={sendResponse}>
              {" "}
              <AiOutlineWhatsApp />
            </WhatsappButton>
            <GmailButton onClick={sendEmail}>
              {" "}
              <SiGmail />
            </GmailButton>
          </div>
          <p style={{ fontSize: "16px", color: "red", fontWeight: "bold" }}>
            ** Email or Age is not needed if you want to use Gmail **
          </p>
        </ForMiddleDiv>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #24292f;
`;

const ForMiddleDiv = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 3px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const UserDetails = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const WhatsappButton = styled.button`
  width: auto;
  padding: 5px 30px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  font-size: 28px;
  color: darkgreen;
`;
const GmailButton = styled.button`
  width: auto;
  padding: 5px 30px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  font-size: 28px;
  color: #c71610;
`;

const Input = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 3px;
  border: 1px solid black;
  padding-left: 10px;
  font-size: 16px;
  outline: none;
`;

const TextArea = styled.textarea`
  min-width: 90%;
  max-width: 90%;
  font-size: 16px;
  max-height: 150px;
  min-height: 40px;
  border-radius: 3px;
  border: 1px solid black;
  padding-left: 10px;
`;

const H1 = styled.h1`
  font-size: 16px;
  color: white;
`;
