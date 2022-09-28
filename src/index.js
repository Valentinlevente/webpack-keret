import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


let url = document.getElementById("url");
let width = document.getElementById("szelesseg");
let thickness = document.getElementById("vastagsag");
let color = document.getElementById("szin");
let image = document.getElementById("kep");
let mode = document.getElementById("darkmode")
let backGround = document.body;


function init(){
    url.addEventListener('change', changeImg);
    width.addEventListener('input', changeWidth);
    thickness.addEventListener('input', changeBorder);
    color.addEventListener('input', changeBorder);
    mode.addEventListener('click', toggleMode);
}

function changeImg(){
    image.src = url.value; 
}

function changeWidth(){
    image.width = width.value;
}

function changeBorder(){
    image.style.border = thickness.value + "px solid " + color.value;
   
}
let i = 0;
function toggleMode(){
    
    if(i == 0){
        backGround.className = "light";
        i++;
        mode.innerHTML = "Dark mode"; 
    }else{
        backGround.className = "dark";
        i = 0;
        mode.innerHTML = "Light mode"; 
    }
}


document.addEventListener('DOMContentLoaded' , init);

//http://ocdn.eu/images/pulscms/Zjc7MDA_/e0987d91497259e5de180d55a1166b72.jpg