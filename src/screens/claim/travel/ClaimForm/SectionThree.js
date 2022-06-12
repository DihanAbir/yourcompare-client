import React from "react";
// import { CustomTextField as Input } from "../../../components/customStyledComponents/inputs";
// import InputBox from "../../../components/customStyledComponents/InputBox";
import { Grid, Box, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import styles from "../travelClaim.module.css";

const Label = ({ children, width }) => {
    return (
        <Typography
            sx={{
                color: "text.secondary",
                lineHeight: "25px",
                fontWeight: "medium",
                fontSize: ".8rem",
                width: width ? width : 0.3
            }}
        >
            {children}
        </Typography>
    );
};

const InputGrid = ({ children }) => {
    return (
        <Box sx={{ display: "flex", mb: 2 }}>
            {children}
        </Box>
    )
}

const SectionThree = () => {
    return (
        <React.Fragment>
            <Typography
                variant="h5"
                sx={{ letterSpacing: "1px", mb: 2 }}
            >
                Details of the claimant (person who had to cancel, curtail, alter, disrupt or delay their trip ):
            </Typography>

            <Grid container>
                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Full Name</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>
                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Address</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Postcode</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Telephone</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Email</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <InputGrid>
                        <Label width={.5}>Relationship to policyholder</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SectionThree;