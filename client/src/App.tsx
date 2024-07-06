import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./containers/Public";
import { PATH } from "./utils/path";
import RoomForRent from "./containers/Public/RoomForRent";
import HouseForRent from "./containers/Public/HouseForRent";
import OfficeSpace from "./containers/Public/OfficeSpace";
import RentalDepartment from "./containers/Public/RentalDepartment";
import HomePage from "./containers/Public/HomePage";
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={PATH.HOME} element={<Home />}>
            <Route path="*" element={<HomePage />} />
            <Route path={PATH.REGISTER} element={<Register />} />
            <Route path={PATH.LOGIN} element={<Login />} />
            <Route path={PATH.CHO_THUE_PHONG_TRO} element={<RoomForRent />} />
            <Route path={PATH.CHO_THUE_CAN_HO} element={<RentalDepartment />} />
            <Route path={PATH.CHO_THUE_MAT_BANG} element={<OfficeSpace />} />
            <Route path={PATH.NHA_CHO_THUE} element={<HouseForRent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
