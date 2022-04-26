function verificaResposta(respostaCerta, proximaFase) {
    
    
    var tentativas = 1;
    while (tentativas >= 0) {
        var resposta = prompt("Jughead então:");
    if(resposta.toLowerCase() === respostaCerta) {
        alert("Isso mesmo, Jughead vai para a casa do lago para ver se Veronica está lá, clique em Ok e vá para a fase 2");
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