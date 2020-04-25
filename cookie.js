var cookieCount = document.getElementById('cookieCount');                               
var score = 0;                                                                          

var cookieImage = document.getElementById('cookieImage'); 
// setting var as singleClick so it can be turned off and tripleClick can be turned on later
var singleClick = true;                              

// upgrades
var autoClick = document.getElementById('autoClick');
// creating and setting variable for the function of auto clicking as automatically OFF
var autoClickFunc = false;

var tripleClick = document.getElementById('tripleClick');
// creating and setting variable for the function of triple clicking as automatically OFF
var tripleClickFunc = false;


// single click function
function onClick(e) {   
    // prevent page from resetting after click
    e.preventDefault();                                                               
    // cookie count (score) increases by 1 each click
    score++;
    // changes the initial cookie count text to "# cookies"                                                                            
    cookieCount.innerHTML = score + " Cookies";                             
};                                                                                      

// attaching a single click listener function to the cookie image
cookieImage.addEventListener('click', onClick);


// attaching a 'click' listening function to the auto-clicker button
autoClick.addEventListener('click', function() {
    // if user has 10 cookies or more AND the auto-clicker is off, run this function
    if (score >= 10 & autoClickFunc == false) {
      // continuously repeats this function by adding 1 cookie every .5 seconds
      setInterval(function() {
       score++;
       cookieCount.innerHTML = score + " Cookies";
     }, 500);
     // change auto-click upgrade box to purchased
     autoClick.innerHTML = "Purchased";
     // changes auto-click variable to true
     autoClickFunc = true;
    }
     // if user has less than 10 cookies AND the auto-click function is off, alert user
    else if(score < 10 & autoClickFunc == false) {
     alert("Need more cookies!");
   }
 });


// attaching a 'click' listening function to the triple-clicker button
tripleClick.addEventListener('click', function() {
    // if user has 10 cookies or more AND the auto-clicker is off, run this function
    if (score >= 25 & tripleClickFunc == false & singleClick == true ) {
 
      function plusThree() {
        
        score += 3;
        cookieCount.innerHTML = score + " Cookies";
      };
     // change triple-click upgrade box to purchased
     tripleClick.innerHTML = "Purchased";
     // changes triple-click variable to true
     tripleClickFunc = true;
        singleClick = false;
      }
      
     // if user has less than 25 cookies AND the triple-click function is off, alert user
    
     else if(score < 25 & tripleClickFunc == false) {
     alert("Need more cookies!");
   }
 }
);
 