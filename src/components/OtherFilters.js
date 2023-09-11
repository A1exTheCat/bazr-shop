import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import arrowDown from "../assets/icons/arrow-down.svg";
import {
  setColorIds,
  removeColorIds,
  setSizeIds,
  removeSizeIds,
  defaultColors,
  defaultSizes,
} from "../store/shopSlice";

const OtherFilters = () => {
  const dispatch = useDispatch();
  const [activeColor, setActiveColor] = useState(false);
  const [activeSize, setActiveSize] = useState(false);

  const colors = useSelector((state) => state.shop.colors.data);
  const sizes = useSelector((state) => state.shop.sizes.data);

  useEffect(() => {
    return () => {
      dispatch(defaultColors());
      dispatch(defaultSizes());
    };
  }, [dispatch]);

  return (
    <section className="filters">
      <div className="menu-wrapper">
        <div
          className="menu-button"
          onClick={() => {
            setActiveColor(!activeColor);
            setActiveSize(false);
          }}
        >
          <span>Цвет</span>
          <img src={arrowDown} alt="стрелка вниз" />
        </div>
        <div className={`menu-content ${activeColor && "active"}`}>
          {colors.map((color) => {
            const handleCheckboxChange = (event) => {
              const isChecked = event.target.checked; // Получаем состояние чекбокса (true или false)
              const colorId = color.id;

              if (isChecked) {
                dispatch(setColorIds(colorId));
              } else {
                dispatch(removeColorIds(colorId));
              }
            };
            return (
              <label key={color.id}>
                <input
                  type="checkbox"
                  id={color.id}
                  onChange={handleCheckboxChange}
                />
                <span>{color.attributes.name}</span>
              </label>
            );
          })}
        </div>
      </div>
      <div className="menu-wrapper">
        <div
          className="menu-button"
          onClick={() => {
            setActiveSize(!activeSize);
            setActiveColor(false);
          }}
        >
          <span>Размер</span>
          <img src={arrowDown} alt="стрелка вниз" />
        </div>
        <div className={`menu-content ${activeSize && "active"}`}>
          {sizes.map((size) => {
            const handleCheckboxChange = (event) => {
              const isChecked = event.target.checked; // Получаем состояние чекбокса (true или false)
              const sizeId = size.id;

              if (isChecked) {
                dispatch(setSizeIds(sizeId));
              } else {
                dispatch(removeSizeIds(sizeId));
              }
            };
            return (
              <label key={size.id}>
                <input
                  type="checkbox"
                  id={size.id}
                  onChange={handleCheckboxChange}
                ></input>
                <span>{size.attributes.name}</span>
              </label>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherFilters;
