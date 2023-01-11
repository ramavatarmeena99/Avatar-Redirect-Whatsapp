import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

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
    <>
     <Header/>

<MainContainer>
      <ForMiddleDiv>
        <UserDetails>
          <h1 style={{ fontSize: "14px" }}>Name</h1>
          <Input
            value={user_Name}
            onChange={(e) => setuser_name(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
        </UserDetails>
        <UserDetails>
          <h1 style={{ fontSize: "14px" }}>Email</h1>
          <Input
            value={user_email}
            onChange={(e) => setuser_email(e.target.value)}
            type="text"
            placeholder="Enter Email"
          />
        </UserDetails>
        <UserDetails>
          <h1 style={{ fontSize: "14px" }}>Messege</h1>
          <Input
            value={user_messege}
            onChange={(e) => setuser_messege(e.target.value)}
            type="text"
            placeholder="Enter Messege"
          />
        </UserDetails>

        <UserDetails>
          <h1 style={{ fontSize: "14px" }}>Age</h1>
          <Input
            value={user_age}
            onChange={(e) => setuser_age(e.target.value)}
            type="number"
            placeholder="Enter Your Age"
          />
        </UserDetails>

        <Button onClick={sendResponse}>Submit</Button>
      </ForMiddleDiv>
    </MainContainer>
    </>
   
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForMiddleDiv = styled.div`
  width: 50%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius:3px ;
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
const Button = styled.button`
  width: auto;
  padding:5px 30px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  
`;

const Input = styled.input`
  width: 90%;
  height: 40px;
  border-radius:3px ;
  border:1px solid black ;
  padding-left:10px;
`;
