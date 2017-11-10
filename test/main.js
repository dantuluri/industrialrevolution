// anime({
//   targets: 'div.box.red',
//   translateY: [
//     { value: 200, duration: 500 },
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine'
//   }
// });

// anime({
//   targets: 'div.box.blue',
//   translateY: [
//     { value: 200, duration: 500, delay: 1000},
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 1000
//   }
// });

// anime({
//   targets: 'div.box.green',
//   translateY: [
//     { value: 200, duration: 500, delay: 2000},
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 2000
//   }
// });

// anime({
//   targets: 'div.box.yellow',
//   translateY: [
//     { value: 200, duration: 500, delay: 3000},
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 3000
//   }
// });
var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}
var playPause = anime({
  targets: 'div.box',
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }
  ],
  rotate:{
    value: '1turn',
    easing: 'easeInOutSine'
  },
  delay: function(el, i, l){ return i * 1000},
  autoplay:false,
  loop:true
});
var unitlessValue = anime({
  targets: '#unitlessValue .el',
  translateX: 250,
  rotate: 540
});



var timelineParameters = anime.timeline({
  direction: 'alternate',
  loop: true
});

timelineParameters
  .add({
    targets: '#timelineParameters .square.el',
    translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
    translateY: [ { value: 30 }, { value: 60 }, { value: 60 } ],
    duration: 3000
  })
  .add({
    targets: '#timelineParameters .circle.el',
    translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
    translateY: [ { value: 30 }, { value: -30 }, { value: -30 } ],
    duration: 3000,
    offset: 200
  })
  .add({
    targets: '#timelineParameters .triangle.el',
    translateX: [ { value: 80 }, { value: 250 } ],
    translateY: [ { value: -60 }, { value: -30 }, { value: -30 } ],
    duration: 3000,
    offset: 400
  });









document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;