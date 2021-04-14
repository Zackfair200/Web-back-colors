function aleatorio(){
    var lista = ["#FF5733","#DAF7A6","#FFC300","#C70039"];
    var numRandom = (Math.floor(Math.random()*lista.length));
    var valor = lista[numRandom];
    var elBody = document.getElementById("web");
    elBody.style.background = valor;
}