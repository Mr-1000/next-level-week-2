

var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("time");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
   
   
}

move();


function redirecionar() {
  
  location.href = "http://localhost:8080/study";
 
}

setTimeout(redirecionar, 1200);


