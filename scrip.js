function gerarMensagem() {

    let nome = document.getElementById("nomeUsuario").value;

    if(nome === "") {
        document.getElementById("resultado").innerText = 
        "Por favor, digite seu nome!";
    } else {

        let mensagem = nome + 
        ", você tem potencial para criar algo incrível!";

        document.getElementById("resultado").innerText = mensagem;
    }
}
