function verificaResposta(respostaCerta, proximaFase) {
    
    
    var tentativas = 1;
    while (tentativas >= 0) {
        var resposta = prompt("Betty se assusta e:");
    if(resposta.toLowerCase() === respostaCerta) {
        alert("Isso mesmo, Betty se aproxima para ver oque é, clique em Ok e vá para a fase 3");
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