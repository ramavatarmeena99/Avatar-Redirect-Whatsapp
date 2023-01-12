import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Div
     
    >
      <h1>Redirect to whatsapp/Gmail</h1>
    </Div>
  );
}
const Div = styled.div`
width: 100%;
        height: 7vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid black;
        @media (max-width: 768px) {

font-size:9px ;
  }
`;