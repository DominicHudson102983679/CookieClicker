var cookieCount = document.getElementById("cookieCount"),
var cookieCount = 0;
var cookieImage = document.getElementById("cookieImage");

// cookieImage.addEventListener('click', oneClick);



cookieImage.onclick = function() {
    cookieCount++;
    cookieCount.innerHTML = cookieCount + "Cookies";
};

