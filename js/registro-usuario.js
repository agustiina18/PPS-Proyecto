function registrarUsuario(event) {
  event.preventDefault();

  const nombre = document.getElementById("regNombre").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const telefono = document.getElementById("regTelefono").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if ( !nombre || !email || !telefono || !password) {
    alert("Por favor completá todos los campos.");
    return;
  }

  const usuario = {
    nombre,
    email,
    telefono,
    password
  };
 
  console.log("Usuario registrado:", usuario);

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

alert("¡Cuenta creada exitosamente!");

  document.getElementById("registroUsuarioForm").reset();
}
