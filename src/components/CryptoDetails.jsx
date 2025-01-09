/* eslint-disable react/prop-types */
const CryptoDetails = ({ crypto }) => {
  return (
    <div className="crypto-info">
      <div className="main-info">
        <h1>
          {crypto.name}
          <span className="symbol">{` (${crypto.symbol})`} </span>
        </h1>
        <h2>
          <span className="label">Ranking: {crypto.rank}</span>
        </h2>
      </div>
      <div className="details">
        <ul>
          <li className="main-detail">
            <span className="label">Current Price: </span>
            <span>{parseFloat(crypto.priceUsd).toFixed(4)}</span>
          </li>
          <li className="main-detail">
            <span className="label">Max Supply: </span>
            <span>{parseFloat(crypto.maxSupply).toFixed(4)}</span>
          </li>
          <li className="main-detail">
            <span className="label">Market Cap (USD): </span>
            <span>{parseFloat(crypto.marketCapUsd).toFixed(4)}</span>
          </li>
          <li className="main-detail">
            <span className="label">Volume (USD - 24Hrs.): </span>
            <span>{parseFloat(crypto.volumeUsd24Hr).toFixed(4)}</span>
          </li>
          <li className="main-detail">
            <span className="label">Variation (24Hrs.): </span>
            <span>{parseFloat(crypto.changePercent24Hr).toFixed(3)}%</span>
          </li>
          <li className="main-detail">
            <span className="label">Vwap (24Hrs.): </span>
            <span>{parseFloat(crypto.vwap24Hr).toFixed(3)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CryptoDetails;
