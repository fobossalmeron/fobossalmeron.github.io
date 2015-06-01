//Eye

var mouseX = 0, mouseY = 0, limitX = 35-15, limitY = 20-15;
$(window).mousemove(function(e){
  var offset = $('.cajaOjo').offset();
   mouseX = Math.min(e.pageX - offset.left, limitX);
   mouseY = Math.min(e.pageY - offset.top, limitY);
   if (mouseX < 0) mouseX = 0;
   if (mouseY < 0) mouseY = 0;
});

// cache the selector
var follower = $("#cursorOjo");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    follower.css({left:xp, top:yp});
    
}, 30);


//Comment Animation

var domAnimator = new DomAnimator();

            var frame1 = ['       ,--.                               ',
                          '      ([ oo]                              ',
                          '       `- ^     RODRIGO                   ',
                          "    _   S`-'_    SALMERÓN                 ",
                          "   .o(`-S-´)o.                            ",
                          "   |( `-S-´ )|     Dentro de mi esqueleto ",
                          "   |(`--S--´)|                            ",
                          "                                          "];      



            var frame2 = ['       ,--.                               ',
                          '      ([ --]                              ',
                          '       `- ^     RODRIGO                   ',
                          "    _   S`-'_    SALMERÓN                 ",
                          "   .o(`-S-´)o.                            ",
                          "   |( `-S-´ )|     Dentro de mi esqueleto ",
                          "   |(`--S--´)|                            ",
                          "                                          "];    

domAnimator.addFrame(frame1);
domAnimator.addFrame(frame2);
domAnimator.animate();

//Scroll on mobile

function checkPosition() {
    if (window.matchMedia('(max-width: 980px)').matches) {
          $("html, body").animate({ scrollTop: 270 }, "6500");
          console.log(980);
      }
    if (window.matchMedia('(max-width: 470px)').matches) {
          $("html, body").animate({ scrollTop: 421 }, "2500");
          console.log(470);
      }
};