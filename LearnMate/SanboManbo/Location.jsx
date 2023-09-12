import * as React from "react";
import "../styles/style.scss";
import "../styles/__root.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "250px",
  height: "150px",
  lineHeight: "150px",
  borderRadius: "35px",
}));

export default function Location() {
  return (
    <>
      <Grid
        container
        spacing={3}
        paddingBottom={5}
        paddingTop={5}
        justifyContent={"end"}
      >
        <Grid item xs={6}>
          <Box
            sx={{
              p: 6,
              bgcolor: "background.default",
              display: "grid",
              gap: 2,
              padding: 0,
            }}
          >
            <Item>서달산 자락길</Item>
            <Item>서달산 자락길2</Item>
            <Item>서달산 자락길3</Item>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
