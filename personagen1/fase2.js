function verificaResposta(respostaCerta, proximaFase) {
    
    
    var tentativas = 1;
    while (tentativas >= 0) {
        var resposta = prompt("Archie então:");
    if(resposta.toLowerCase() === respostaCerta) {
        alert("Muito bem, Archie segue as pegadas que podem ser de Veronica!, clique em Ok e vá para a fase 3");
        location.href = proximaFase
        break;
    } else {
        alert(`Ops, resposta errada, você só tem ${tentativas} chance`);
        location.href = "../gameover/gameover.html"
        tentativas--;
        
    }
}
 
}
