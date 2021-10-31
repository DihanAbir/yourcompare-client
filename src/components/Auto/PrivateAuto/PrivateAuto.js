import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import InsuranceStepper from "../../StepperInsuranceAuto";

function PrivateAuto({ privateAuto }) {
  return (
    <Grid container>
      <Grid lg={5} className="GridDiv">
        <div>
          <h1 className="BannerHeader">Private Car</h1>
          <p>
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img src={privateAuto} alt="" />
      </Grid>
      <Grid lg={7}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default PrivateAuto;
