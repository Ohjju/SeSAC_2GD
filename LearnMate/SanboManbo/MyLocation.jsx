import * as React from "react";
import "../styles/style.scss";
import "../styles/__root.scss";
import "../styles/myLocation.scss";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
//위에랑 이름 겹쳐서 style로 함
import style from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const { kakao } = window;

const SmallP = style.p`
  font-size: 1.2rem;
  color: #ccceca;
`;

const MedP = style.p`
  font-size: 1.3rem;
  line-height: 1.3rem;
`;

export default function MyLocation() {
  // kakao API
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(잘됐을때 실행할 함수, 에러가 발생했을때 실행할 함수);
    navigator.geolocation.getCurrentPosition(function (position) {
      const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    });
  }, []);

  return (
    <>
      <div className="sec-container">
        <div
          id="map"
          style={{ overflow: "visible", width: "100vw", height: "100vh" }}
        ></div>

        <Link className="sec-gotoMain" to="/">
          <div style={{ color: "white" }}>⬅</div>
        </Link>

        <div
          style={{
            height: "65%",
            position: "absolute",
            zIndex: "10",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            top: "4rem",
            right: "2rem",
          }}
        >
          <div className="sec-box">
            <div className="sec-boxContent">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h6>서달산 자락길</h6>
                <i
                  class="fa-solid fa-arrow-right"
                  style={{
                    margin: "0 1.5rem",
                    fontSize: "1.5rem",
                    color: "var(--text-gray-40)",
                  }}
                ></i>
              </div>
              <SmallP>지역구</SmallP>
              <div className="sec-info">
                <MedP>소요기간: 1시간</MedP>
                <MedP>거리: 2km</MedP>
              </div>
            </div>
          </div>
          <div className="sec-box">
            <div className="sec-boxContent">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h6>서달산 자락길</h6>
                <i
                  class="fa-solid fa-arrow-right"
                  style={{
                    margin: "0 1.5rem",
                    fontSize: "1.5rem",
                    color: "var(--text-gray-40)",
                  }}
                ></i>
              </div>
              <SmallP>지역구</SmallP>
              <div className="sec-info">
                <MedP>소요기간: 1시간</MedP>
                <MedP>거리: 2km</MedP>
              </div>
            </div>
          </div>
          <div className="sec-box">
            <div className="sec-boxContent">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h6>서달산 자락길</h6>
                <i
                  class="fa-solid fa-arrow-right"
                  style={{
                    margin: "0 1.5rem",
                    fontSize: "1.5rem",
                    color: "var(--text-gray-40)",
                  }}
                ></i>
              </div>
              <SmallP>지역구</SmallP>
              <div className="sec-info">
                <MedP>소요기간: 1시간</MedP>
                <MedP>거리: 2km</MedP>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
