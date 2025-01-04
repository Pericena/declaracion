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
$div.innerHTML = "<h4>¡No puedo creer que dijiste que sí! 😍 Eres la clave para desbloquear mi felicidad. 💖</h4><h4>¿Listos para iniciar juntos esta épica aventura? 🚀🎮</h4>";
    $div.style.backgroundColor="red";
    $fragment.appendChild($div);
    
    document.querySelector(".container").appendChild($fragment);
})