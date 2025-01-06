import { useState, useEffect } from "react";
import Crypto from "./components/Crypto";
import axios from "axios";
import "./assets/styles/App.css";

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
        console.error("The petutuin failed");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cryptos) return <span>Loading...</span>;

  return (
    <div className="app-container">
      <h1 className="app-title">Cryptocurrencies real-time prices</h1>

      <div className="crypto-container">
        {cryptos.map(
          ({ id, name, priceUsd, symbol, rank, changePercent24Hr }) => (
            <Crypto
              key={id}
              name={name}
              symbol={symbol}
              priceUsd={priceUsd}
              rank={rank}
              changePercent24Hr={changePercent24Hr}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
