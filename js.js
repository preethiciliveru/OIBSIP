if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    var target = document.getElementById("head");
    target.innerHTML += "<link  rel="icon" type="image/x-icon" href="/images/icon.png">";
  } else {
    var target = document.getElementById("head");
    target.innerHTML += "<link  rel="icon" type="image/x-icon" href="/images/icon1.png">";
  };