import { Route, Routes } from "react-router-dom";
import Wallet from "../pages/Wallet/Wallet";

const RouteConfig = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path={"/"} element={<Wallet />} />
    </Routes>
  );
};

export default RouteConfig;
