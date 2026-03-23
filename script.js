// ===== PEGAR ELEMENTOS =====

const cadastroForm = document.getElementById("cadastroForm");
const loginForm = document.getElementById("loginForm");

const loginTela = document.getElementById("loginTela");
const dashboard = document.getElementById("dashboard");
const nomeUsuario = document.getElementById("nomeUsuario");


// ===== CADASTRO =====

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

if (loginForm) {
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        const emailDigitado = document.getElementById("emailLogin").value;
        const senhaDigitada = document.getElementById("senhaLogin").value;

        const emailSalvo = localStorage.getItem("email");
        const senhaSalva = localStorage.getItem("senha");

        if(emailDigitado === emailSalvo && senhaDigitada === senhaSalva){

            alert("Login realizado com sucesso!");

            localStorage.setItem("logado", "true");

            // Mostra dashboard sem precisar recarregar
            mostrarDashboard();

        } else {
            alert("Email ou senha incorretos");
        }
    });
}


// ===== FUNÇÃO MOSTRAR DASHBOARD =====

function mostrarDashboard(){
    if(loginTela && dashboard){
        loginTela.style.display = "none";
        dashboard.style.display = "block";

        const nome = localStorage.getItem("nome");
        if(nomeUsuario){
            nomeUsuario.innerText = "E aí, " + nome + " 👊";
        }
    }
}


// ===== VERIFICAR AO ABRIR O SITE =====

if(localStorage.getItem("logado") === "true"){
    mostrarDashboard();
}


// ===== LOGOUT =====

function logout(){
    localStorage.removeItem("logado");
    window.location.reload();
}