var cssProperties = anime({
  targets: '#cssProperties .el',
  left: '240px',
  backgroundColor: '#FFF',
  borderRadius: 40,
  easing: 'easeInOutQuad'
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

var timelineParameters = anime.timeline({
  direction: 'alternate',
  loop: true
});

timelineParameters
  .add({
    targets: '#timelineParameters .square.el',
    translateX: [ { value: 10 }, { value: 25 }, { value: -25 } ],
    translateY: [ { value: 10 }, { value: 15 }, { value: 80 } ],
    duration: 3000
  })
  .add({
    targets: '#timelineParameters .circle.el',
    translateX: [ { value: 30 }, { value: -60 }, { value: -100 } ],
    translateY: [ { value: 20 }, { value: 5 }, { value: 5 } ],
    duration: 3000,
    offset: 200
  })
  .add({
    targets: '#timelineParameters .triangle.el',
    translateX: [ { value: -80/2 }, { value: -250/2 } ],
    translateY: [ { value: -40 }, { value: -10 }, { value: -10 } ],
    duration: 3000,
    offset: 400
  });



;

