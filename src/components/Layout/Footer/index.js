import { Typography, Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
export default function Footer() {
  const items = {
    insurances: [
      { item: "Auto Insurance" },
      { item: "Life Insurance" },
      { item: "Travel Insurance" },
      { item: "Health Insurance" },
    ],
    support: [
      { item: "Claims" },
      { item: "Manage Policy" },
      { item: "Renew Policy" },
    ],
    about: [
      { item: "About" },
      { item: "What We Do" },
      { item: "Blog" },
      { item: "Contanct" },
    ],
    contact: [
      { item: "Road 7, Sector 11, Uttara, Dhaka, Bangladesh" },
      { item: "youcompare@gmail.com" },
    ],
  };

  return (
    <Box
      sx={{
        bgcolor: "#000000",
      }}
    >
      <Container>
        <Grid container sx={{ px: 2 }}>
          {Object.keys(items).map((elem, i) => (
            <Grid item xs={6} sm={4} md={3} sx={{ py: 4 }}>
              <Typography
                sx={{
                  color: "#eeeeee",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "32px",
                }}
              >
                {elem.toUpperCase()}
              </Typography>
              {items[elem].map((child, i) => (
                <Typography
                  sx={{
                    color: "#eeeeee",
                    fontWeight: "normal",
                    fontSize: "13px",
                    lineHeight: "24px",
                  }}
                >
                  {child.item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        <div
          style={{
            background: "white",
            height: "1px",
            width: "100%",
          }}
        ></div>
        <Typography
          sx={{
            fontSize: "13px",
            lineHeight: "24px",
            fontSize: "14px",
            fontWeight: 400,
            color: "#eeeeee",
            pt: 2,
            pb: 3,
            textAlign: "center",
          }}
        >
          All rights reserved by youcompares
        </Typography>
      </Container>
    </Box>
  );
}
