function verificaResposta(respostaCerta) {
    
    
    var tentativas = 1;
    while (tentativas >= 0) {
        var resposta = prompt("Veronica responde:");
    if(resposta.toLowerCase() === respostaCerta) {
        alert("Parabéns você achou Veronica!,clique em Ok va para a parte final");
        location.href = "../Fim/fim.html"
        break;
    } else {
        alert(`Ops, resposta errada, você só tem ${tentativas} chance`);
        location.href = "../gameover/gameover.html"
        tentativas--;
        break
    }
}
 
}