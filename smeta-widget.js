(function(){
  if(document.getElementById('shashune-smeta-root')) return;
  var wrap = document.createElement('div');
  wrap.id = 'shashune-smeta-root';
  var scriptTag = document.currentScript;
  if(scriptTag && scriptTag.parentNode) {
    scriptTag.parentNode.insertBefore(wrap, scriptTag);
  } else {
    document.body.appendChild(wrap);
  }
  fetch('https://cdn.jsdelivr.net/gh/snesterov/shashune@main/tilda_embed_code.html')
    .then(function(r){ return r.text(); })
    .then(function(html){
      wrap.innerHTML = html;
      var scripts = wrap.getElementsByTagName('script');
      for(var i=0; i<scripts.length; i++){
        var s = document.createElement('script');
        s.text = scripts[i].innerText;
        document.body.appendChild(s);
      }
    });
})();