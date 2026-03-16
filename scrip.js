// ===== CADASTRO =====

const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {

cadastroForm.addEventListener("submit", function(e){

e.preventDefault();

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

localStorage.setItem("nome", nome);
localStorage.setItem("email", email);
localStorage.setItem("senha", senha);

alert("Conta criada com sucesso!");

window.location.href = "index.html";

});

}



// ===== LOGIN =====

const loginForm = document.getElementById("loginForm");

if (loginForm) {

loginForm.addEventListener("submit", function(e){

e.preventDefault();

const emailDigitado = document.getElementById("emailLogin").value;
const senhaDigitada = document.getElementById("senhaLogin").value;

const emailSalvo = localStorage.getItem("email");
const senhaSalva = localStorage.getItem("senha");

if(emailDigitado === emailSalvo && senhaDigitada === senhaSalva){

alert("Login realizado com sucesso!");

}else{

alert("Email ou senha incorretos");

}

});

}