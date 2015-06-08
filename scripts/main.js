//Eye

var mouseX = 0, mouseY = 0, limitX = 38-15, limitY = 23-15;
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
    if (window.matchMedia('(max-width: 470px)').matches) {
       if($(window).scrollTop() < 421){
          $("html, body").animate({ scrollTop: 421 }, "2500");
          //var scrolled = 421 - $(window).scrollTop() ;
          //console.log("Me deslizé " + scrolled + "px para que me vieras mejor." );
          }
    }
        else if (window.matchMedia('(max-width: 980px)').matches) {
       if($(window).scrollTop() < 270){
          $("html, body").animate({ scrollTop: 270 }, "6500");
          //var scrolled = 270 - $(window).scrollTop() ;
          //console.log("Me deslizé " + scrolled + "px para que me vieras mejor." );
          }
    }
};

//eso de los iconos
var morpheus = new SVGMorpheus('#icon');

function morpheusScroll(){
    setTimeout(function() {
      morpheus.to('red', {duration: 750, easing: 'circ-in', rotation: 'none'});
     },2000);
      setTimeout(function() {
      morpheus.to('participa', {duration: 750, easing: 'circ-in', rotation: 'none'});
     },4000);
      setTimeout(function() {
      morpheus.to('saludable', {duration: 750, easing: 'circ-in', rotation: 'none'});
     },6000);
      setTimeout(function() {
      morpheus.to('creativa', {duration: 750, easing: 'circ-in', rotation: 'none'});
     },8000);
      setTimeout(function() {
      morpheus.to('sustentable', {duration: 750, easing: 'circ-in', rotation: 'none'});
     },10000);
      setTimeout(function() {
      morpheus.to('lee', {duration: 750, easing: 'circ-in', rotation: 'none'});
     },12000);
};

morpheusScroll();
window.setInterval(function(){
morpheusScroll();
}, 12000);
