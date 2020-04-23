var cookieCount = document.getElementById('cookieCount');                               
var count = 0;                                                                          
var cookieImage = document.getElementById('cookieImage');                               


function onClick() {                                                                  
    count++;                                                                            
    cookieCount.innerHTML = count + " Cookies";                                         
};                                                                                      

cookieImage.addEventListener('click', onClick);