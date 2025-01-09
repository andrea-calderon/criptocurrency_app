import { useParams } from "react-router-dom";
import "../assets/styles/CryptoPage.css";
import usePetition from "../hooks/usePetition";
import CryptoDetails from "./CryptoDetails";
import CryptoHistory from "./CryptoHistory";

const CryptoPage = () => {
  const params = useParams();

  const crypto = usePetition(`/${params.id}`);
  const history = usePetition(`/${params.id}/history?interval=d1`);

  if (!crypto) return <span>Loading...</span>;

  return (
    <div className="crypto-page-container">
      {crypto && <CryptoDetails crypto={crypto} />}
      <br />
      {history && <CryptoHistory history={history} />}
    </div>
  );
};

export default CryptoPage;
