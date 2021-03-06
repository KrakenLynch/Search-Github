import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper className="container">
      <img
        className="center"
        src="https://icons-for-free.com/iconfiles/png/512/svg+github+hub+logo+icon-1320190542448952806.png"
        alt="github User"
      ></img>
      <h1>Github User</h1>
      <button className="btn" onClick={loginWithRedirect}>
        Login / SignUp
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;
