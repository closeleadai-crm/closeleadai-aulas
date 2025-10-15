// ===== CONFIGURAÇÃO =====
const SENHA_CORRETA = "CloseLead2025";

// ===== LOGIN =====
function login() {
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  if (senha === SENHA_CORRETA) {
    localStorage.setItem("autenticado", "true");
    window.location.href = "aulas.html";
  } else {
    erro.textContent = "Senha incorreta. Tente novamente.";
  }
}

// ===== PROTEÇÃO DE PÁGINA =====
if (window.location.pathname.includes("aulas.html")) {
  const autorizado = localStorage.getItem("autenticado");
  if (!autorizado) {
    window.location.href = "index.html";
  }
}

// ===== TROCAR AULA =====
function trocarAula(id, titulo) {
  const iframe = document.getElementById("videoPlayer");
  const title = document.getElementById("tituloAula");
  iframe.src = `https://drive.google.com/uc?export=preview&id=${id}`;
  title.innerText = titulo;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem("autenticado");
  window.location.href = "index.html";
}