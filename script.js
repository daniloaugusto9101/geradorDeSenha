const containerIcos = document.querySelector(".container-icos");
const icoCopiar = document.querySelector(".ico-copiar");
const icoCopiarOk = document.querySelector(".ico-copiar-ok");
const range = document.querySelector(".range");
const btn = document.querySelector(".btn")
const texto = document.querySelector(".texto")
const icoSenha = document.querySelector(".ico-senha")


const chave = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ!@#$%&*";

// Texto total caracter
range.addEventListener("input", function(){
    texto.innerHTML = this.value;
})

// efeito copiar
containerIcos.addEventListener("click", function(){
    icoCopiar.style.display = "none";
    icoCopiarOk.style.display = "block";
    navigator.clipboard.writeText(icoSenha.innerHTML);
})

// Gerador de senha
btn.addEventListener("click", function(){
    let pass ="";
    n = chave.length;
    for (let i = 0; i < range.value; i++) {
        pass += chave.charAt(Math.floor(Math.random() * n))
    }
    icoSenha.innerHTML = pass;

    icoCopiar.style.display = "block";
    icoCopiarOk.style.display = "none";
})

