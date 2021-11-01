import React from "react";
import { Typography, Box } from "@mui/material";
import { borderRadius, styled } from "@mui/system";

const InsuranceBox = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.text.hover}`,
  borderRadius: theme.spacing(1)
}))

const ImageBox = styled('div')(({ theme }) => ({
  width: "300px",
  height: "150px",
  margin: "0 auto",
  padding: theme.spacing(4),
  [theme.breakpoints.only('xs')]: {
    width: "inherit"
  }
}))


function SubCard({ i, insurance }) {
  // const insuranceDiv = {
  //   display: "inline-grid",
  //   width: "90%",
  //   border: "1px solid lightgray",
  //   margin: "1rem 1%",
  //   padding: "2%",
  //   height: "250px",
  //   cursor: "pointer",
  //   borderRadius: "5px",
  //   backgroundColor: "white",
  // };
  return (
    <InsuranceBox>
      <Typography sx={{
        textAlign: "left",
        px: 2, pt: 1,
        fontWeight: "medium",
        textTransform: "none",
        color: "text.secondary",
        fontSize: ".9rem"
      }}>
        {insurance.title}
      </Typography>
      <ImageBox>
        <img style={{ width: "100%", height: "100%" }} src={insurance.image} alt="" />
      </ImageBox>
    </InsuranceBox>
  );
}

export default SubCard;
