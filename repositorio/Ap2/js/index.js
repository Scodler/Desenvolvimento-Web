function click(){
    let senha = document.getElementById('entrada-senha').value;

    if (hex_md5(senha) === "ff64a1c43498d955147518733ac88c7c") {
      window.sessionStorage.setItem("token", "logado");
      window.location = "home.html";
    } else {
      alert("Senha incorreta!");
    }
};


document.getElementById("btnLogin").addEventListener("click", click);