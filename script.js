var b = document.querySelector(".btn-second");
b.addEventListener("mousemove",change);

function change()
{
let i = Math.floor(Math.random()*250)+1;
let j = Math.floor(Math.random()*500)+1;
console.log('here' , i ,j , b.style.left , b.style.top);
    b.style.left = i+'px';
    b.style.top = j + "px";
}
