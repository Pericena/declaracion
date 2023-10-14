// const sibtn =document.querySelector('#sibtn');

// sibtn.addEventListener('click',function() {
//     alert('Estaba más seguro de tu sí que de que el chocolate es delicioso. Soy un tipo con suerte y buen gusto, ¿verdad?')
// });
// const nobnt = document.querySelector('#nobnt');
// nobnt.addEventListener('mouseover', function(){
//     const randdomX = parseInt(Math.random()*100);
//     const randomY = parseInt(Math.random()*100);
//     nobnt.style.setProperty('top',randomY+'%');
//     nobnt.style.setProperty('left',randdomX+'%');
//     nobnt.style.setProperty('transform',`translate(-${randdomX}%,-${randomY}%)`);
// })









const $btnYes=document.querySelector("#btnYes"),
      $btnNo=document.querySelector("#btnNo");

$btnNo.addEventListener("mouseover",()=>{
    let x=window.innerWidth,
        y=window.innerHeight;
        console.log(x)
    let newX=Math.floor(Math.random()*x)+1,
        newY=Math.random()*y;
  
    $btnNo.style.position="absolute";
    $btnNo.style.left=newX+"px";
    $btnNo.style.top=newY+"px"

})


$btnYes.addEventListener("click",()=>{
    let $div=document.createElement("div"),
        $fragment=document.createDocumentFragment();
    $div.innerHTML="<h4>Estaba seguros que dirias que si xd , eres la tuerca que encaja perfectamente en el engranaje de mi vida.</h4>";
    $div.style.backgroundColor="white";
    $fragment.appendChild($div);
    
    document.querySelector(".container").appendChild($fragment);
})