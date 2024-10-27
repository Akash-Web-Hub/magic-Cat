let bulbImgEl = document.getElementById("bulbImg");

let catImgEl = document.getElementById("catImg");

let  msgEl = document.getElementById("msg");


console.log(bulbImgEl)

function onHideCate(){

    bulbImgEl.src = "images/light-bulb-931979_1920-removebg-preview.png";

     msgEl.textContent = "switch OFF"
    
     catImgEl.src = "images/cat eye.png";

}




function onShowCate(){

    bulbImgEl.src = "images/light-bulb-931979_1920.jpg" ;

    catImgEl.src = "images/cat-removebg-preview.png";

     msgEl.textContent = "switch ON"

}
    
