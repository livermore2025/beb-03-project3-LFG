import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../App";

const LoginWrapper = styled.div`
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogin = async () => {
    if (user === null) {
      if (typeof window.klaytn !== "undefined") {
        const accounts = await window.klaytn.enable();
        setUser((prev) => accounts[0]);
      } else {
        alert("Install Kaikas!!");
      }
    } else {
      navigate("/profile/wallet");
    }
  };

  return (
    <LoginWrapper onClick={handleLogin}>
      {user === null ? "Login" : `${user.slice(2, 5)}...${user.slice(-3)}`}
    </LoginWrapper>
  );
};

export default Login;
