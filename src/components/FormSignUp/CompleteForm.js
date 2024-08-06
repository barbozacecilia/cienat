import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

const Img = styled.img`
     width: 70%;
     color: palevioletred;
     background: #6277F7;
     padding: 20px;
     margin: 2vh;
`;

const Complete = (props) => {
  const{ updateStep } =props
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Gracias por tu registro {updateStep}</h1>
      <Img src="/img/cienat-logo.png" />
    </Box>
  );
};

export default Complete;