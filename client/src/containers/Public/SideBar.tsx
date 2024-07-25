import React from "react";
import SideBarItem from "../../components/SideBarItem";

import { useAppSelector } from "../../store/store";
import RelatedPost from "../../components/RelatedPost";

const SideBar = () => {
  const { listPrice, listAcreage } = useAppSelector((state) => state.filter);
  const categories = useAppSelector((state) => state.app.categories);

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
