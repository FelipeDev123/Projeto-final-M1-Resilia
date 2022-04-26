function verificaResposta(respostaCerta, proximaFase) {
    
    
    var tentativas = 1;
    while (tentativas >= 0) {
        var resposta = prompt("Jughead rapidamente:");
    if(resposta.toLowerCase() === respostaCerta) {
        alert("Muito bem, Jughead começa a seguir as pegadas que podem levar até a Veronica, clique em ok e vá para a fase 3");
        location.href = proximaFase
        break;
    } else {
        alert(`Ops, resposta errada, você só tem ${tentativas} chance`);
        location.href = "../gameover/gameover.html"
        tentativas--;
        break
    }
}
 
}