document.getElementById("reg").addEventListener("click", registarse);
document.getElementById("ent").addEventListener("click", entrar);

function registarse() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "660px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

function entrar() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "660px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

const nombre = document.getElementById("myname");
const email = document.getElementById("email");
const celular = document.getElementById("mobile");
const usuario = document.getElementById("user");
const password = document.getElementById("password");
const terminos = document.getElementById("terms");
const formulario_login = document.getElementById("formulario_login");
const formulario_register = document.getElementById("formulario_register");
const list = document.querySelectorAll(".form-input");
const parrafo = document.getElementById("warning");

formulario_register.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nombre.Value.length < 1 || nombre.Value.trim() == "") {
    console.error("error");
  }
});
