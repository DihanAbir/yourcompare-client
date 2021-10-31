import React from "react";
import { Grid, Button, Input } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
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
      <form style={{ textAlignLast: "left", marginBottom: "6%" }}>
        <br />
        <Grid container style={{ display: "" }}>
          <Grid md={6}>
            <label for="html">Who is the cover for?</label>
            <br /> <br />
            {["Personal", "Business"].map((elem, i) => (
              <Button
                style={{ margin: "0px 5px" }}
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
          </Grid>
          <Grid md={6}>
            <label for="html">Who is the cover for?</label>
            <br /> <br />
            {["One Person", "Couple", "Family", "Group"].map((elem, i) => (
              <Button
                style={{ margin: "0px 4px" }}
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
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Cover;
