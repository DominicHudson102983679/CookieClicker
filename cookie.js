var cookieCount = document.getElementById('cookieCount');                               
var score = 0;                                                                       
var cookieImage = document.getElementById('cookieImage');                             

// upgrades
var autoClick = document.getElementById('autoClick');
// Cost variables are to be subtracted from total cookie count on click
var acCost = 10;
var tripleClick = document.getElementById('tripleClick');
var tcCost = 25;
var doubleScore = document.getElementById('doubleScore');
var dsCost = 50;
var timesTwo = 2;

// single click function
function plusOne(e) {   
    // prevent page from resetting after click
    e.preventDefault();                                                               
    score++;                                                                         
    cookieCount.innerHTML = score + " Cookies";
  };                                                                                      

// attaching the function plusOne to the cookie image
cookieImage.addEventListener('click', plusOne);

// attaching a 'click' listening function to the auto-clicker button
autoClick.addEventListener('click', function() {
    // if user has 10 cookies or more AND the auto-clicker is off, run this function
    if (score >= 10 && score <= 1000) {
        // cost of the upgrade is deducted from cookie count before entering loop
        score = score - acCost;
        cookieCount.innerHTML = score + " Cookies";
        // continuously repeats this function by adding 1 cookie per second
        setInterval(function() {
        score++;
        cookieCount.innerHTML = score + " Cookies";
      }, 1000);
      autoClick.innerHTML = "Purchased";
      } else if (score < 10) {
          alert("Need more cookies!");
          }
        }
      );



// attaching a 'click' listening function to the triple-clicker button
tripleClick.addEventListener('click', function() {

// if user has 10 cookies or more, run the plusThree function
if (score >= 25 && score <= 1000) {
    score = score - tcCost;
    cookieCount.innerHTML = score + " Cookies";
    function plusThree(e) {                                 
        // cookie count (score) increases by an additional 2 each click (totalling 3 per click)
        score += 2;                                                                     
        cookieCount.innerHTML = score + " Cookies";                             
      };
      // another listening event is added to the cookie image. functions plusOne and plusThree now both active    
      cookieImage.addEventListener('click', plusThree);
      tripleClick.innerHTML = "Purchased";
    } else if (score < 25) {
     alert("Need more cookies!");
    }
  }
);

doubleScore.addEventListener('click', function() {
    if (score >= 50 && score <= 1000) {
      score = score - dsCost;
      cookieCount.innerHTML = score + " Cookies";
      // continuously repeats this function by adding 1 cookie every .5 seconds
      setInterval(function() {
      score = score * timesTwo;
      cookieCount.innerHTML = score + " Cookies";
    }, 5000);
    doubleScore.innerHTML = "Purchased";
    } else if (score < 50) {
        alert("Need more cookies!");
        }
      }
    );

if (score >= 1000) {
  cookieCount.innerHTML = "THANK YOU FOR THE 1000 COOKIES";
}