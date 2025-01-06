import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((data) => {
        setCryptos(data.data.data);
      })
      .catch(() => {
        console.error("la peticion fallo");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cryptos) return <span>Loading...</span>;

  return (
    <>
      <h2>Cryptocurrency real-time activity </h2>

      <ol>
        {cryptos.map(({ id, name, priceUsd }) => (
          <li key={id}>
            Nombre: {name} Precio: {priceUsd}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
