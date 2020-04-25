var cookieCount = document.getElementById('cookieCount');                               
var score = 0;                                                                          
var cookieImage = document.getElementById('cookieImage');                             

// upgrades
var autoClick = document.getElementById('autoClick');
var tripleClick = document.getElementById('tripleClick');

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
    if (score >= 10) {
        // continuously repeats this function by adding 1 cookie every .5 seconds
        setInterval(function() {
        score++;
        cookieCount.innerHTML = score + " Cookies";
      }, 500);
      autoClick.innerHTML = "Purchased";
      } else if (score < 10) {
          alert("Need more cookies!");
          }
        }
      );

// attaching a 'click' listening function to the triple-clicker button
tripleClick.addEventListener('click', function() {

// if user has 10 cookies or more, run the plusThree function
if (score >= 25) {
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

/*
// attaching a 'click' listening function to the auto-clicker button
autoClick.addEventListener('click', function() {
  // if user has 10 cookies or more AND the auto-clicker is off, run this function
  if (score >= 10) {
      // continuously repeats this function by adding 1 cookie every .5 seconds
      setInterval(function() {
      score++;
      cookieCount.innerHTML = score + " Cookies";
    }, 500);
    autoClick.innerHTML = "Purchased";
    } else if (score < 10) {
        alert("Need more cookies!");
        }
      }
    );
  */
