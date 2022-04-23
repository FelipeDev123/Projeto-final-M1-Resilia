function verificaResposta(respostaCerta, proximaFase) {
    
    
    var tentativas = 1;
    while (tentativas >= 0) {
        var resposta = prompt("");
    if(resposta.toLowerCase() === respostaCerta) {
        alert("");
        location.href = proximaFase
        break;
    } else {
        alert(`Ops, resposta errada, você  tem ${tentativas} chance`);
        location.href = "../gameover/gameover.html"
        tentativas--;
        break
    }
}
 
}