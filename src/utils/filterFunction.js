const filterFunction = (items, type, colors, sizes) => {
  const typeFiltered =
    type === "all"
      ? items
      : items.filter((item) => {
          const itemType = item.attributes.type.data.id;
          if (itemType === type) {
            return true;
          }
          return false;
        });

  const colorFiltered =
    colors.length === 0
      ? typeFiltered
      : typeFiltered.filter((item) => {
          return colors.includes(item.attributes.color.data.id);
        });

  const filteredItems =
    sizes.length === 0
      ? colorFiltered
      : colorFiltered.filter((item) => {
          return sizes.includes(item.attributes.size.data.id);
        });

  return filteredItems;
};

export default filterFunction;
