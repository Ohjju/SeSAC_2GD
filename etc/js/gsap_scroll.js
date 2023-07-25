gsap.from(".box1", {
  scrollTrigger: {
    trigger: ".box1",
    start: "top 80%",
    end: "100% 50%",
    scrub: 1,
    //markers: true,
  },
  y: 800,
  opacity: 0,
});

gsap.to(".box2", {
  scrollTrigger: {
    trigger: ".box2",
    start: "top top",
    scrub: 1,
    // markers: true,
  },
  rotate: 720,
  x: 500,
});

//timeline과 함께 써보기
const tl = gsap.timeline();
//scroll trigger 내부에 작성

//타임라인이 동작하지 않는다! -> 2개 이상의 요소에 애니메이션을 적용할 때는 create() 메소드 필수!!!!
// tl.to(".circle1", {
//   scrollTrigger: {
//     trigger: "section", //스크롤 기줁ㅁ
//     animaion: tl, //타임라인
//     start: "top top",
//     end: "bottom 50%",
//     scrub: true,
//     markers: true,
//   },
//   scale: 2,
//   opacity: 0,
// }).to("circle2", {
//   scrollTrigger: {
//     trigger: "section", //스크롤 기줁ㅁ
//     animation: tl, //타임라인
//     start: "top top",
//     end: "bottom 50%",
//     scrub: true,
//     markers: true,
//   },
// });

tl.to(".circle1", {
  scale: 2,
  opacity: 0,
})
  .to(".circle2", {
    scale: 2,
    opacity: 0,
  })
  .to(".circle3", {
    scale: 2,
    opacity: 0,
  });
//create 메소드 사용
ScrollTrigger.create({
  trigger: "section",
  animation: tl, //타임라인
  start: "top top",
  end: "bottom 50%",
  scrub: 1,
  markers: true,
  pin: true,
});
