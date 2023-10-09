export const summaryFunction = (itemsArray) => {
  return itemsArray.reduce((acc, item) => {
    const newAcc = acc + item.price;
    return newAcc;
  }, 0);
};
