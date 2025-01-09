import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to Cryptocurrencies</h1>
      <p>Get to know the rank of the 100 most famous cryptocurrencies</p>
      <Link to="/cryptocurrency">Check out cryptos</Link>
    </>
  );
};

export default Home;
