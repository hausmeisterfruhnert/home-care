(function(){
  // mobile menu
  var h=document.getElementById('hamburger'),n=document.getElementById('navLinks');
  if(h){h.addEventListener('click',function(){n.classList.toggle('open');});}
  if(n){[].forEach.call(n.querySelectorAll('a'),function(a){a.addEventListener('click',function(){n.classList.remove('open');});});}

  // contact form -> FormSubmit (AJAX, stays on page)
  var f=document.getElementById('contactForm');
  if(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var ok=document.getElementById('formNote'), err=document.getElementById('formErr');
      var btn=f.querySelector('button[type=submit]');
      if(ok)ok.style.display='none'; if(err)err.style.display='none';
      if(btn)btn.disabled=true;
      fetch(f.action,{method:'POST',body:new FormData(f),headers:{'Accept':'application/json'}})
        .then(function(r){return r.json();})
        .then(function(d){
          if(d && (d.success===true || d.success==='true')){ if(ok)ok.style.display='block'; f.reset(); }
          else { if(err)err.style.display='block'; }
        })
        .catch(function(){ if(err)err.style.display='block'; })
        .then(function(){ if(btn)btn.disabled=false; });
    });
  }
})();
