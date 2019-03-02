    //criando uma variavel velha para ser alternada com a variavel nova
    var velha
    var nova = "texto que nao é a lampada"
    /* criando uma funcao "toggle()" cria x para pegar um elemento id( tal)
    //define que velha=x.innerHTML ( conteudo do html)

    */

    function toggle(){
    x=document.getElementById("1")
    velha=x.innerHTML
    x.innerHTML= nova
    nova=velha
    }