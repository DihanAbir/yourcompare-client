import React from "react";
import { Grid, Button, Input, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
import InputBox from "../../customStyledComponents/InputBox";
import {
  CustomTextField as TextField,
  CustomAutocomplete as Autocomplete,
} from "../../../components/customStyledComponents/inputs";
// import { FIELD_CHANGE } from "../../constants/autoCompare.constant";

function Cover() {
  const dispatch = useDispatch();
  const autoQuery = useSelector((state) => state.autoQuery);
  const { brand, model, year } = autoQuery;

  // Default model & year selection during initial rendering
  // Value should come from local storage(if exist)
  React.useEffect(() => {
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "model", value: "190" },
    });
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "year", value: "2021" },
    });
  }, []);

  // form field change (controlled input)
  const handleChange = (e) => {
    dispatch({
      type: FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div style={{ marginTop: "4%" }}>
      {/* Model Selection */}

      <form spacing={2} style={{ textAlignLast: "left" }}>
        <Grid item container spacing={2}>
          <Grid item xl={6} lg={6} md={5} sm={5} xs={4}>
            <label for="html">Gender</label>
            <div style={{ textAlign: "left" }}>
              {["Male", "Female"].map((elem, i) => (
                <Button
                  sx={{ mr: 1, fontSize: ".8rem", py: 0.5 }}
                  key={i}
                  variant="round"
                  color={elem === model ? "primary" : "text"}
                  name="model"
                  value={elem}
                  onClick={() =>
                    dispatch({
                      type: FIELD_CHANGE,
                      payload: { field: "model", value: elem },
                    })
                  }
                >
                  {elem}
                </Button>
              ))}
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={7} sm={7} xs={8}>
            <label for="html">How many people are Travelling</label>
            <div style={{ textAlign: "left" }}>
              {["One", "Couple", "Family", "Group"].map((elem, i) => (
                <Button
                  sx={{ mr: 1, fontSize: ".8rem", py: 0.5, my: 0.5 }}
                  key={i}
                  variant="round"
                  color={elem === model ? "primary" : "text"}
                  name="model"
                  value={elem}
                  onClick={() =>
                    dispatch({
                      type: FIELD_CHANGE,
                      payload: { field: "model", value: elem },
                    })
                  }
                >
                  {elem}
                </Button>
              ))}
            </div>
          </Grid>
        </Grid>
      </form>
      <form style={{ textAlignLast: "left", marginBottom: "6%" }}>
        <br />
        <Grid container style={{ display: "" }}>
          <Grid lg={4} md={6} sm={6} xs={12} style={{ padding: "0% 1%" }}>
            <label for="html">Full Name </label>
            <br />
            <TextField
              fullWidth
              placeholder="John Doe"
              type="text"
              size="small"
              name="brand"
              sx={{ width: "100%" }}
              //   value={brand}
              //   onChange={handleChange}
            />
          </Grid>
          <Grid lg={4} md={6} sm={6} xs={12} style={{ padding: "0% 3%" }}>
            <label for="html">Pre-Existing Condition</label>
            <Autocomplete
              options={["Yes", "No"]}
              // onChange={(e, value) => setMaritalStatus(value)}
              renderOption={(props, option) => (
                <Typography {...props} variant="body2" color="text.secondary">
                  {option}
                </Typography>
              )}
              // sx={{ mb: 0.75 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  fullWidth
                  placeholder="Condition"
                  inputProps={{
                    ...params.inputProps,
                    style: { padding: "0.2rem 1rem" },
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>
          <Grid lg={4} md={6} sm={6} xs={12} style={{ padding: "0% 1%" }}>
            <label for="html">Marital Status </label>

            <Autocomplete
              options={["Married", "Single", "Diverced"]}
              // onChange={(e, value) => setMaritalStatus(value)}
              renderOption={(props, option) => (
                <Typography {...props} variant="body2" color="text.secondary">
                  {option}
                </Typography>
              )}
              // sx={{ mb: 0.75 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  fullWidth
                  placeholder="Select Gender"
                  inputProps={{
                    ...params.inputProps,
                    // style: { padding: "0.2rem 1rem" },
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Cover;
