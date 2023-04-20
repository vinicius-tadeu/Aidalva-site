var aberto = false;

function abrir(){
    var menu = document.getElementById("burger");
    if(aberto){
        aberto = false;
        menu.style.height = "0px";
    }else{
        aberto = true;
        menu.style.height = "110px";
    }
}