import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./containers/Public";
import { PATH } from "./utils/path";
import Rent from "./containers/Public/Rent";
import HomePage from "./containers/Public/HomePage";
import { useAppDispatch } from "./store/store";
import * as actionFilter from "./features/filter/filter.slice";
import DetailPost from "./containers/Public/DetailPost";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actionFilter.filterPrice());
    dispatch(actionFilter.filterAcreage());
  }, [dispatch]);
  return (
    <div>
      <Router>
        <Routes>
          <Route path={PATH.HOME} element={<Home />}>
            <Route path="*" element={<HomePage />} />
            <Route path={PATH.REGISTER} element={<Register />} />
            <Route path={PATH.LOGIN} element={<Login />} />
            <Route path={PATH.CHO_THUE_PHONG_TRO} element={<Rent />} />
            <Route path={PATH.CHO_THUE_CAN_HO} element={<Rent />} />
            <Route path={PATH.CHO_THUE_MAT_BANG} element={<Rent />} />
            <Route path={PATH.NHA_CHO_THUE} element={<Rent />} />
            <Route path={PATH.DETAIL_POST} element={<DetailPost />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
