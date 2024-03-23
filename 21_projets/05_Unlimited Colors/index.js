const randomColor = function () {
    let hex = "123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
    //   console.log(color);
  };
  let intravel;
  const startcolorchangeing = function () {
    if (intravel == null) {
      intravel = setInterval(colorchnge, 1000);
    }
    function colorchnge() {
      document.querySelector("body").style.backgroundColor = randomColor();
    }
  };
  
  const stopcolorchangeing = function () {
    clearInterval(intravel);
    intravel = null;
  };
  
  document.querySelector("#start").addEventListener("click", startcolorchangeing);
  document.querySelector("#stop").addEventListener("click", stopcolorchangeing);
  