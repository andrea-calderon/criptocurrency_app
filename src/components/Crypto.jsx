/* eslint-disable react/prop-types */
import "../assets/styles/Crypto.css";

const Crypto = ({ name, priceUsd, symbol, rank, changePercent24Hr }) => {
  return (
    <div className="individual-crypto">
      <h2>
        {name} <span>{symbol}</span>
      </h2>
      <div className="info">
        <p>
          <span className="label">Price: </span>
          {parseFloat(priceUsd).toFixed(4)}
        </p>

        <p>
          <span className="label">Rank: </span>
          {rank}
        </p>
        <p>
          <span className="label">24Hr variation: </span>
          <span
            className={
              parseFloat(changePercent24Hr) > 0 ? "positive" : "negative"
            }
          >
            {parseFloat(changePercent24Hr).toFixed(3)}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default Crypto;
