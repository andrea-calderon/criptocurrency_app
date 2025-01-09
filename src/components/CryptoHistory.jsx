/* eslint-disable react/prop-types */
const CryptoHistory = ({ history }) => {
  return (
    <div className="history">
      <table>
        <thread>
          <tr>
            <th>Date: </th>
            <th>Price: </th>
          </tr>
        </thread>
        <tbody>
          {history.map(({ date, priceUsd, time }) => (
            <tr key={time}>
              <td className="label">{new Date(date).toDateString()}</td>
              <td className="price">{parseFloat(priceUsd).toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoHistory;
