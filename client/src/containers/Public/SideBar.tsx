import React, { useEffect } from "react";
import SideBarItem from "../../components/SideBarItem";
import * as action from "../../features/filter/filter.slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import RelatedPost from "../../components/RelatedPost";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const { listPrice, listAcreage } = useAppSelector((state) => state.filter);
  const categories = useAppSelector((state) => state.app.categories);
  useEffect(() => {
    dispatch(action.filterPrice());
    dispatch(action.filterAcreage());
  }, [dispatch]);
  return (
    <div>
      <SideBarItem title="Xem theo gia" data={listPrice} />
      <SideBarItem title="Xem dien tich" data={listAcreage} />
      <SideBarItem title="Danh muc cho thue" data={categories} />
      <RelatedPost />
    </div>
  );
};

export default SideBar;
