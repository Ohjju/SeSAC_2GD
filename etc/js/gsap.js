let tl1 = gsap.timeline();
tl1
  .to(".cloud1", {
    scale: 1.5,
    opacity: 0,
    xPercent: 200,
  })
  .to(
    ".cloud2",
    {
      scale: 2,
      opacity: 0,
      xPercent: -100,
    },
    "<"
  )
  .to(".sun", {
    scale: 1.2,
    opacity: 0.5,
    xPercent: -600,
    yPercent: 300,
  });

ScrollTrigger.create({
  animation: tl1,
  trigger: ".section1",
  start: "top top",
  end: "bottom top",
  scrub: true,
  //   markers: true,
  pin: true,
  end: "+=5000",
});

//밑에 실습
//animation 적용할 요소가 하나 뿐이기 때문에 from 내부에 scrollTrigger 작성해도 됨
let tl2 = gsap.timeline();
tl2.from(".section2 div", {
  scrollTrigger: {
    animation: tl2,
    trigger: ".section2",
    start: "top top",
    end: "bottom 100%",
    scrub: true,
    markers: true,
    pin: true,
    end: "+=3000",
  },
  rotate: 720,
  opacity: 0,
});
