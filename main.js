
$(document).ready(function(){
  $('.your-class').slick({
    responsive: [
      {
        breakpoint: 700,
        settings: {
          // unslick: true
          slidesToShow: 2,
          // slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 660,
        settings: {
          unslick: false,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          dots: false,
          prevArrow: '<img src="/madia/left.png">',
          nextArrow: '<img src="/madia/right.png">'
        }
      }
    ]
  });
});

// function open () {
//   document.getElementById("shareIt").style="display:block";
// };
// function close () {
//   document.getElementById("shareIt").style="display:none";
// };
document.getElementById('shareIt').onclick = openShare;
function openShare() {
  var shareList = document.getElementById('shareList');
  shareList.style="display:block";
}
document.getElementById('close').onclick = closeShare;
function closeShare() {
  var closeShare = document.getElementById('shareList');
  closeShare.style="display:none";
}
// document.getElementById('size').onclick = checkSize;
// function checkSize() {
//   var sizes = document.getElementById('size');
//   var sizes.style="box-shadow: 0 0 10px rgba(0,0,0,0.5)";
  
// }