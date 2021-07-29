$("#hands").mouseenter(function(){
    var tl = gsap.timeline();
      tl.to("#left-hand", 1, {x: 20, ease: Elastic.easeOut});
      tl.to("#left-hand", 1, {delay: -1, scale: .9, transformOrigin: "center", ease: Elastic.easeOut});
      tl.to("#left-hand", .15, {delay: -1, fill: "#00d4ff", ease: Power3.easeIn});
      tl.to("#right-hand", 1, {delay: -1, x: -10, transformOrigin: "center", ease: Elastic.easeOut});
  });
  
  $("#hands").mouseleave(function(){
    var tl = gsap.timeline();
      tl.to("#left-hand", 1, {x: 5, ease: Elastic.easeOut, });
      tl.to("#left-hand", 1, {delay: -1, scale: 1, transformOrigin: "center", ease: Elastic.easeOut});
      tl.to("#left-hand", .25, {delay: -1, fill: "#0095b3", ease: Power1.easeInOut});
    tl.to("#right-hand", 1, {delay: -1, x: 0, transformOrigin: "center", ease: Elastic.easeOut});
  });