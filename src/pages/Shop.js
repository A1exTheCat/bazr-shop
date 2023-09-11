import React from "react";
import ItemsList from "../components/ItemsList";
import OtherFilters from "../components/OtherFilters";
import TypeFilter from "../components/TypesFilter";

const Shop = () => {
  return (
    <div className="container">
      <TypeFilter />
      <OtherFilters />
      <ItemsList />
    </div>
  );
};

export default Shop;
