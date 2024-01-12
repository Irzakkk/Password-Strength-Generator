const inputField=document.querySelector("#input");
const btn= document.querySelector(".btn");
const para= document.querySelector('.para');

btn.addEventListener('click',()=>{
    var lengthOfpw= inputField.value.length;
    if(lengthOfpw>=0 && lengthOfpw<8){
        para.innerHTML="Password is weak";
        para.classList.add("weak");
        inputField.style.borderColor='red';
    }
    else if(lengthOfpw>8 && lengthOfpw<12){
        para.innerHTML="Password is Medium";
        para.classList.add("medium");
        inputField.style.borderColor='yellow';
    }
    else{
        para.innerHTML="Password is Strong";
        para.classList.add("strong");
        inputField.style.borderColor='green';
    }
})