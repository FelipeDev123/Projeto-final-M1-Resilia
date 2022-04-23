function verificaResposta(respostaCerta) {
    
    
    var tentativas = 1;
    while (tentativas >= 0) {
        var resposta = prompt("");
    if(resposta.toLowerCase() === respostaCerta) {
        alert("");
        location.href = "file:///C:/Users/Felipe/OneDrive/%C3%81rea%20de%20Trabalho/Pojeto%20final%20M1/Fim/fim.html"
        break;
    } else {
        alert(`Ops, resposta errada, você  tem ${tentativas} chance`);
        location.href = "../gameover/gameover.html"
        tentativas--;
        break
    }
}
 
}