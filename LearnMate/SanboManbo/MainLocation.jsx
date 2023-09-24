import * as React from "react";
import "../styles/style.scss";
import "../styles/__root.scss";
import "../styles/mainLocation.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  width: "298px",
  height: "240px",
  lineHeight: "240px",
  borderRadius: "35px",
}));

export default function MainLocation() {
  return (
    <>
      <div className="sec02-container">
        <div className="sec02-title">
          <h4>일상 산책러를 위한</h4>
          <h4>산보만보의 프로그램을 만나보세요</h4>
          <p className="sec02-padTop">
            #관공사 추천 걷기여행길 #친구랑 걷기 좋은 코스 #커플 데이트 코스
          </p>
        </div>

        <Grid container spacing={4}>
          {/* xs=12가 가로 전체 */}
          <Grid item xs={12}>
            <Box
              sx={{
                gap: 2,
                display: "flex",
                paddingTop: "3rem",
                paddingBottom: "2rem",
              }}
            >
              <Item>
                <div className="sec02-box sec02-boxImg1">
                  <h5 className="sec02-white">등산로</h5>
                  <p className="sec02-padTop sec02-white">
                    트레킹하기 좋은 등산로
                  </p>
                </div>
              </Item>
              <Item>
                <div className="sec02-box sec02-boxImg2">
                  <h5 className="sec02-white">공원</h5>
                  <p className="sec02-padTop sec02-white">
                    몸도 마음도 쉬어가는 공원
                  </p>
                </div>
              </Item>
              <Item>
                <div className="sec02-box sec02-boxImg3">
                  <h5 className="sec02-white">둘레길</h5>
                  <p className="sec02-padTop sec02-white">
                    가볍게 걸을 수 있는 둘레길
                  </p>
                </div>
              </Item>
              <Item>
                <div className="sec02-box sec02-boxImg4">
                  <h5 className="sec02-white">자전거길</h5>
                  <p className="sec02-padTop sec02-white">
                    자전거 타기 좋은 코스
                  </p>
                </div>
              </Item>
            </Box>
          </Grid>
        </Grid>
        <Link class="sec02-button btn-large" to="/myLocation">
          <div style={{ color: "white" }}>
            내 위치에서 가까운 트레킹 장소 보기
          </div>
        </Link>
      </div>
    </>
  );
}
