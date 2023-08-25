const flowers = ["rose", "sunflower", "tulip"];
function getFlowers(idx) {
  if (idx >= flowers.length || idx < 0) return "잘못된 인덱스 번호입니다.";
  return flowers[idx];
}

//es6에서는 exports 아니고 export로 한번에 내보냄
// export { flowers, getFlowers };

//as 이용 별칭
export { flowers as flr, getFlowers as getFlr };
