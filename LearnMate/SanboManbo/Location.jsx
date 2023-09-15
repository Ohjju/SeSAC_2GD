import * as React from "react";
import "../styles/style.scss";
import "../styles/__root.scss";
import "../styles/location.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
//위에랑 이름 겹쳐서 style로 함
import style from "styled-components";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "250px",
  height: "150px",
  lineHeight: "150px",
  borderRadius: "35px",
}));

const SmallP = style.p`
  font-size: 1.2rem;
  color: #ccceca;
`;

const MedP = style.p`
  font-size: 1.3rem;
  line-height: 1.3rem;
`;

export default function Location() {
  return (
    <>
      <div className="sec-container">
        <Grid
          container
          spacing={3}
          padding={3}
          // justifyContent={"end"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          {/* xs 조절 (12가 끝) */}
          <nav className="sec-gotoMain">⬅</nav>
          <Grid item xs={3}>
            <Box
              sx={{
                bgcolor: "background.default",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 2,
              }}
            >
              <Item>
                <div className="sec-box">
                  <h6>서달산 자락길</h6>
                  <SmallP>지역구</SmallP>
                  <div className="sec-info">
                    <MedP>소요기간: 1시간</MedP>
                    <MedP>거리: 2km</MedP>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="sec-box">
                  <h6>서달산 자락길2</h6>
                  <SmallP>지역구</SmallP>
                  <div className="sec-info">
                    <MedP>소요기간: 1시간</MedP>
                    <MedP>거리: 2km</MedP>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="sec-box">
                  <h6>서달산 자락길3</h6>
                  <SmallP>지역구</SmallP>
                  <div className="sec-info">
                    <MedP>소요기간: 1시간</MedP>
                    <MedP>거리: 2km</MedP>
                  </div>
                </div>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
