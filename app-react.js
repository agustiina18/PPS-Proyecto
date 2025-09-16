import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

function App() {
  return (
    <div>
      <h1>Bienvenido a tu Agenda</h1>
      <p>Aquí verás tus turnos y el calendario.</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("react-app-root"));
