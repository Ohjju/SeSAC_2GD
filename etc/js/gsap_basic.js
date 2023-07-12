gsap.from(".circle1", {
  x: -500,
  duration: 3,
  backgroundColor: "green",
  yPercent: 100,
  rotation: 180,
  scale: 2,
  repeat: 3, //몇번 추가!!(3이면 3회 추가이므로 총 4번 실행됨)
  yoyo: true, //가는 거 오는 거가 1회!
  ease: "linear",
  //   ease: "bounce.in",
  //   ease: "bounce.out",
  ease: "bounce.inOut",
  ease: "power1.out", //점점 느려짐
});

const staggerAll = document.querySelectorAll(".stagger");
//from, to의 target으로는 배열 형태가 와도 된다! => staggerAll이 지금 배열 형태
gsap.from(staggerAll, {
  ease: "elastic",
  duration: 3,
  scale: 0.5,
  stagger: 1.5, // 1.5s씩 차이나게 애니메이션 각각 적용
  repeat: -1, //-1 주면 infinite와 같음
});

staggerAll.forEach((circle) => {
  circle.addEventListener("click", () => {
    gsap.to(".stagger", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
});

/* timeline 사용 */
// 연속적인 애니메이션을 만들기 위해 사용

let tl = gsap.timeline();

//방법1
// tl.to(".skyblue", {
//   x: 400,
//   duration: 2,
// });

// tl.to(".gray", {
//   x: 500,
//   duration: 2,
// });

// tl.to(".yellow", {
//   x: 600,
//   duration: 2,
// });

//방법2
// tl.to(".skyblue", {
//   x: 400,
//   duration: 2,
// })

//   .to(".gray", {
//     x: 500,
//     duration: 2,
//   })

//   .to(".yellow", {
//     x: 600,
//     duration: 2,
//   });

tl.to(".skyblue", {
  x: 400,
  duration: 2,
})

  .to(
    ".gray",
    {
      x: 500,
      duration: 2,
    },
    "<"
  )
  // 부등호 넣어주면 skyblue랑 gray가 동시에 움직임

  .to(
    ".yellow",
    {
      x: 600,
      duration: 2,
    },
    "+=5"
  );
//+=숫자 : 지연시간

/* 
    to/from의 세 번째 매개변수
    = 같은 타임라인 내부에서 한 번에 동작하는 방법
    - 2(숫자) : 전체 타임라인에 대해서 ~초 뒤에 시작한다는 의미
              (absolutely)
    - "<" : 이전 움직임과 동시에 시작
    - "+=숫자" : 마지막에 끝난 움직임보다 ~초 뒤에 시작    
*/
