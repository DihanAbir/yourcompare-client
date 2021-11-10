import { Grid } from "@mui/material";
import React from "react";
import InsuranceStepper from "../../StepperInsuranceLife";

function TempLife({ Life }) {
  return (
    <Grid style={{ paddingTop: "4vh" }} container>
      <Grid lg={5} md={5} xl={5} sm={12} xs={12} className="GridDiv">
        <div style={{ justifyContent: "space-around" }}>
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "-1rem",
            }}
            className="BannerHeader"
          >
            Group Life
          </h4>
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "-1rem",
            }}
            className="BannerHeader"
          >
            Insurance
          </h4>
          <p
            className="BannerSubHeader"
            style={{
              width: "100%",
              marginTop: "1rem",
              color: "#74769E",
            }}
          >
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img className="imgpermanentLife" src={Life} alt="" />
      </Grid>
      <Grid lg={7} md={7} xl={7} sm={12} xs={12}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default TempLife;
