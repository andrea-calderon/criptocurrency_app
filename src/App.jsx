import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Outlet /> {/* Este es un componente de react-router-dom*/}
    </>
  );
};

export default App;
