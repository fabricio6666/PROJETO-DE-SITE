// ===== CADASTRO =====
if (window.location.pathname.includes("cadastro")) {

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const nome = document.querySelector('input[type="text"]').value;
const email = document.querySelector('input[type="email"]').value;
const senha = document.querySelector('input[type="password"]').value;

// salva no navegador
localStorage.setItem("nome", nome);
localStorage.setItem("email", email);
localStorage.setItem("senha", senha);

alert("Conta criada com sucesso!");

window.location.href = "index.html";

});

}


// ===== LOGIN =====
if (window.location.pathname.includes("index")) {

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const emailDigitado = document.querySelector('input[type="email"]').value;
const senhaDigitada = document.querySelector('input[type="password"]').value;

const emailSalvo = localStorage.getItem("email");
const senhaSalva = localStorage.getItem("senha");

if(emailDigitado === emailSalvo && senhaDigitada === senhaSalva){

alert("Login realizado com sucesso!");

}else{

alert("Email ou senha incorretos");

}

});

}