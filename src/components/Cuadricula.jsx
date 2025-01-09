import Crypto from "./Crypto";
import "../assets/styles/Cuadricula.css";
import usePetition from "../hooks/usePetition";

function Cuadricula() {
  const cryptos = usePetition("");

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
              symbol={`(${symbol})`}
              priceUsd={priceUsd}
              rank={rank}
              changePercent24Hr={changePercent24Hr}
              id={id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Cuadricula;
