(function(){
  var h=document.getElementById('hamburger'),n=document.getElementById('navLinks');
  if(h){h.addEventListener('click',function(){n.classList.toggle('open');});}
  if(n){[].forEach.call(n.querySelectorAll('a'),function(a){a.addEventListener('click',function(){n.classList.remove('open');});});}
  var f=document.getElementById('contactForm');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var m=document.getElementById('formNote');if(m){m.style.display='block';}});}
})();
