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

        var smoke = new Image();
            smoke.src = 'http://s4.postimg.org/atxdou6u1/smoke.png';

            $.fn.emitter = function(opts) {
                var particles = [];
                var canvases = [];

                var particle = function(canvas) {
                    var x, y, size, speedX, speedY, opacity;
                    reset();

                    this.update = function() {
                        if (opacity > 0) {
                            opacity -= (Math.random() / opts.speed.fade);
                        }

                        if (opacity <= 0) {
                            reset();
                        }

                        speedX -= Math.random() / opts.speed.acceleration;
                        speedY -= Math.random() / opts.speed.acceleration;
                        x += speedX;
                        y += speedY;
                        size += Math.random();
                        drawParticle(x, y, size, opacity);
                    };

                    function drawParticle(x, y, size, opacity) {
                        canvas.globalAlpha = opacity/5;
                        canvas.drawImage(smoke, 0, 0, opts.size, opts.size, x, y, size, size);
                    }

                    function reset() {
                        x = opts.x;
                        y = opts.y;
                        size = opts.size;
                        speedX = Math.random() * opts.speed.x;
                        speedY = Math.random() * opts.speed.y;
                        opacity = Math.random();
                    }
                };

                var canvas = function(el) {
                    var canvas = el[0].getContext('2d');

                    canvas.width = el.width();
                    canvas.height = el.height();

                    for (var c = 0; c < opts.particles; c++) {
                        particles.push(new particle(canvas));
                    }

                    this.clear = function() {
                        canvas.clearRect(0, 0, canvas.width, canvas.height);
                    };
                };

                $(this).each(function() {
                    canvases.push(new canvas($(this)));
                });

                function render() {
                    canvases.forEach(function(canvas) {
                        canvas.clear();
                    });

                    particles.forEach(function(particle) {
                        particle.update();
                    });

                    window.requestAnimationFrame(render);
                }

                return {
                    render: render
                }
            };

            $('canvas').emitter({
                x: 0,
                y: 0,
                size: 300,
                particles: 100,
                speed: {
                    x: 2,
                    y: 2.5,
                    fade: 150,
                    acceleration: 100
                }
            }).render();
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




anime({
  targets: 'path',
  strokeDashoffset: function(el) {
    var pathLength = el.getTotalLength();
    el.setAttribute('stroke-dasharray', pathLength);
    return [-pathLength, 0];
  },
  stroke: {
    value: function(el, i) {
      return 'rgb(200,'+ i * 8 +',150)'; 
    },
    easing: 'linear',
    duration: 2000,
  },
  strokeWidth: {
    value: 6,
    easing: 'linear',
    delay: function(el, i) { 
      return 1200 + (i * 40); 
    },
    duration: 800,
  },
  delay: function(el, i) { 
    return i * 60; 
  },
  duration: 1200,
  easing: 'easeOutExpo',
  loop: true,
  direction: 'alternate'
});



var $speed1 = $(".prop2, .prop5");
var $speed2 = $(".prop1, .prop4");
var $speed3 = $(".prop3-mid");

setInterval(function() {
    $speed1.velocity({ 
      rotateZ: 100080 }, {easing: "linear", duration: 600000 });
}, 0);


setInterval(function() {
    $speed2.velocity({ 
      rotateZ: 100080 }, {easing: "linear", duration: 700000 });
}, 0);

setInterval(function() {
    $speed3.velocity({ 
      rotateZ: 100080 }, {easing: "linear", duration: 550000 });
}, 0);



