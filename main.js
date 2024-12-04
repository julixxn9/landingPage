document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("card");
  const userForm = document.getElementById("userForm");
  const userInfo = document.getElementById("userInfo");
  const backButton = document.getElementById("backButton");

  const usuario = {
      nombre: "",
      correo: "",
      edad: "",
      direccion: "",
      formaPago: "",
      contraseña: ""
  };

  function manejarFormulario(event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto

      // Obtener los valores del formulario
      usuario.nombre = document.getElementById("name").value;
      usuario.correo = document.getElementById("email").value;
      usuario.edad = document.getElementById("age").value;
      usuario.direccion = document.getElementById("address").value;
      usuario.formaPago = document.getElementById("paymentMethod").value;
      usuario.contraseña = document.getElementById("password").value;

      // Verificar que todos los campos estén completos
      if (!usuario.nombre || !usuario.correo || !usuario.edad || !usuario.direccion || !usuario.formaPago || !usuario.contraseña) {
          alert("Por favor, completa todos los campos.");
          return;
      }

      // Mostrar la información en la tarjeta posterior
      userInfo.innerHTML = `
      <h2>Información del usuario</h2>
          <p><strong>Nombre:</strong> ${usuario.nombre}</p>
          <p><strong>Correo:</strong> ${usuario.correo}</p>
          <p><strong>Edad:</strong> ${usuario.edad}</p>
          <p><strong>Dirección:</strong> ${usuario.direccion}</p>
          <p><strong>Forma de Pago:</strong> ${usuario.formaPago}</p>
      `;

      // Voltear la tarjeta
      card.classList.add("flipped");
  }

  // Botón de Volver
  backButton.addEventListener("click", () => {
      // Volver a la tarjeta inicial
      card.classList.remove("flipped");

      // Resetear el formulario
      userForm.reset();

      // Borrar la información
      userInfo.innerHTML = "";
  });

  // Añadir el evento de envío del formulario
  userForm.addEventListener("submit", manejarFormulario);
});

function sus(event){
  event.preventDefault();
  alert("¡Gracias por registrarte, mi love 😗");
}
