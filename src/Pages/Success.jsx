import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return <div>Successful</div>;
};

export default Success;
