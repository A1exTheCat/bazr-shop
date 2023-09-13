import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTypeId } from "../store/shopSlice";

const TypeFilter = () => {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.shop.types.data);
  const activeTypeId = useSelector((state) => state.shop.typeId);

  return (
    <section className="catalog">
      <ul className="catalog-menu">
        <li
          onClick={() => dispatch(setTypeId("all"))}
          className={`catalog-menu-link ${
            activeTypeId === "all" ? "active" : ""
          }`}
        >
          Вся одежда
        </li>
        {types.map((type) => {
          return (
            <li
              key={type.id}
              id={type.id}
              className={`catalog-menu-link ${
                activeTypeId === type.id ? "active" : ""
              }`}
              onClick={() => dispatch(setTypeId(type.id))}
            >
              {type.attributes.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TypeFilter;
