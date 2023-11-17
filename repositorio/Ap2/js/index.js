function click(){
    let senha = document.getElementById('entrada-senha').value;

    if (hex_md5(senha) === "20e1b9b3b8a3d352837b983010f90bd3") {
      window.sessionStorage.setItem("token", "logado");
      window.location = "home.html";
    } else {
      alert("Senha incorreta!");
    }
};

document.getElementById("btnLogin").addEventListener("click", click);
