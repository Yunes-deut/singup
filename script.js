
// main 0
const mainBtn=document.querySelector(".next");
const mainActive=document.querySelector('.main');
const cerclEl=document.querySelectorAll('.cercl');
const inputName=document.querySelector('[name=vorname');
const inputNachName=document.querySelector('[name=nachname');
//main 1
const main1=document.querySelector('.main1');
const btnNext=document.querySelector('.btn-previos');
const btnPrevios=document.querySelector('.btn-next');
//main 2

const main2=document.querySelector('.main2');
const man2BtnPrevios=document.querySelector(".man2-btn-previos")
const man2BtnNext=document.querySelector(".man2-btn-next");
// main 3
const main3=document.querySelector('.main3')
const man3BtnPrevios=document.querySelector(".man3-btn-previos");
const man3BtnNext=document.querySelector(".man3-btn-submit");

let index=0;
window.addEventListener("DOMContentLoaded",function(){ 
    validation();
});
// fonction list style
function greenStyl(a){
    let Color="hsl(205, 72%, 37%)"
    a.style.borderColor=Color;
    a.style.color=Color;
}
function blackStyl(b){
    b.style.borderColor="black"
    b.style.color="black";
}
//fonction to next step
function validation(){
    if(inputName.value !="" && inputNachName.value !=""){
        mainBtn.addEventListener('click',()=>{
           console.log('hallo');
            mainActive.classList.toggle("active");
            main1.classList.toggle("active");
            greenStyl(cerclEl[index]);
            index++;
            })
    }
}
//event previos main1
btnPrevios.addEventListener('click',()=>{
    index--;
    main1.classList.remove("active");
    mainActive.classList.add("active");
    blackStyl(cerclEl[index]);
})
//event next main1
btnNext.addEventListener('click',()=>{
    main1.classList.toggle("active");
    main2.classList.toggle("active");
    greenStyl(cerclEl[index]);
    index++;
})
//event previos main2
man2BtnPrevios.addEventListener('click',()=>{
    index--;
    main2.classList.remove("active");
    main1.classList.add("active");
    blackStyl(cerclEl[index]);
})
//event next main2
man2BtnNext.addEventListener('click',()=>{
    main2.classList.toggle("active");
    main3.classList.toggle("active");
    greenStyl(cerclEl[index]);
    index++;
 
})
//event previos main3
man3BtnPrevios.addEventListener('click',()=>{
    index--;
    main3.classList.remove("active");
    main2.classList.add("active");
    blackStyl(cerclEl[index]);
})
man3BtnNext.addEventListener('click',()=>{
    setTimeout(() => {
        alert("your form succely sing up");
        location.reload();
    }, 100);
})