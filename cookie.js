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
function plusOne(e) {   
    // prevent page from resetting after click
    e.preventDefault();                                                               
    // cookie count (score) increases by 1 each click
    score++;
    // changes the initial cookie count text to "# cookies"                                                                            
    cookieCount.innerHTML = score + " Cookies";                             
};                                                                                      

// attaching a single click listener function to the cookie image
cookieImage.addEventListener('click', plusOne);


// attaching a 'click' listening function to the auto-clicker button
autoClick.addEventListener('click', function() {

    // if user has 10 cookies or more AND the auto-clicker is off, run this function
    if (score >= 10 & autoClickFunc == false) {
      // continuously repeats this function by adding 1 cookie every .5 seconds
      setInterval(function() {
       score++;
       cookieCount.innerHTML = score + " Cookies";
     }, 500);
     autoClick.innerHTML = "Purchased";
     // turns auto-clicker on
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
    if (score >= 25 && tripleClickFunc == false) {
        function plusThree(e) {   
        // prevent page from resetting after click
                                                             
        // cookie count (score) increases by an additional 2 each click (totalling 3 per click)
        score += 2;
        // changes the initial cookie count text to "# cookies"                                                                            
        cookieCount.innerHTML = score + " Cookies";                             
    };

// another listening event is added to the cookie image. functions plusOne and plusThree now both active    
cookieImage.addEventListener('click', plusThree);


     // change triple-click upgrade box to purchased
     tripleClick.innerHTML = "Purchased";
     // changes triple-click variable to true
     /////// tripleClickFunc = true;

      }
      
     // if user has less than 25 cookies AND the triple-click function is off, alert user
    
     else if (score < 25 & tripleClickFunc == false) {
     alert("Need more cookies!");
   }
 }
);
 