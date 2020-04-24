var cookieCount = document.getElementById('cookieCount');                               
var score = 0;                                                                          
var cookieImage = document.getElementById('cookieImage');                               
var autoClick = document.getElementById('autoClick');
var tripleClick = document.getElementById('tripleClick');

function onClick(e) {   
    e.preventDefault();                                                               
    score++;                                                                            
    cookieCount.innerHTML = score + " Cookies";                             
};                                                                                      

cookieImage.addEventListener('click', onClick);
var hasAutoClick = false;
autoClick.addEventListener('click',  function() {


    //bug fixed 1 line below - use >= instead of >
   if (score >= 10 && hasAutoClick === false) {
     setInterval(function() {
       score++;
       cookieCount.textContent = score;
     }, 500);
     this.classList.add("disabled", "disabled");
     this.textContent = "Purchased";
     hasAutoClick = true;
   } else if (score < 50 && hasAutoClick === false) {
     alert("You don't have enough cookies!");
   }
 })