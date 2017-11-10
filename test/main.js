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

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;