var cookieCount = document.getElementById('cookieCount');                               
var count = 0;                                                                          
var cookieImage = document.getElementById('cookieImage');                               


function onClick(e) {   
    e.preventDefault();                                                               
    count++;                                                                            
    cookieCount.innerHTML = count + " Cookies";                             
};                                                                                      

cookieImage.addEventListener('click', onClick);

