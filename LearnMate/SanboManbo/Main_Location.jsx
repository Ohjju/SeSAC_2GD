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
  height: "13rem",
  lineHeight: "13rem",
  borderRadius: "35px",
}));

export default function MainLocation() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "10vw",
          paddingRight: "10vw",
        }}
      >
        <h4>일상 산책러를 위한</h4>
        <h4>산보만보의 프로그램을 만나보세요</h4>
        <p>#태그 #태그 #태그</p>
        <Grid container spacing={3} paddingBottom={5} paddingTop={5}>
          <Grid item xs={6}>
            <Box
              sx={{
                p: 6,

                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
                padding: 0,
              }}
            >
              <Item>elevation1</Item>
              <Item>elevation2</Item>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                p: 6,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
                padding: 0,
              }}
            >
              <Item>elevation3</Item>
              <Item>elevation4</Item>
            </Box>
          </Grid>
        </Grid>

        <button
          class="btn-large"
          style={{
            backgroundColor: "green",
            color: "white",
            lineHeight: "48px",
            textAlign: "center",
            width: "100%",
            borderRadius: "35px",
            border: "none",
          }}
        >
          내 위치에서 가까운 트레킹 장소 보기
        </button>
      </div>
    </>
  );
}
