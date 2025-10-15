function login() {
  const senha = document.getElementById("senha").value;
  const senhaCorreta = "closelead"; // altere conforme sua senha

  if (senha === senhaCorreta) {
    localStorage.setItem("auth", "true");
    window.location.href = "aulas.html";
  } else {
    alert("Senha incorreta! Tente novamente.");
  }
}

// Bloqueio de acesso sem login
if (window.location.pathname.includes("aulas.html")) {
  if (localStorage.getItem("auth") !== "true") {
    window.location.href = "index.html";
  }
}

function loadVideo(url) {
  const iframe = document.getElementById("videoFrame");
  iframe.src = url;
  localStorage.setItem("ultimaAula", url);
}

function logout() {
  localStorage.removeItem("auth");
  localStorage.removeItem("ultimaAula");
  window.location.href = "index.html";
}

// Retomar última aula assistida
window.onload = () => {
  const ultima = localStorage.getItem("ultimaAula");
  if (ultima) {
    const iframe = document.getElementById("videoFrame");
    if (iframe) iframe.src = ultima;
  }
};
