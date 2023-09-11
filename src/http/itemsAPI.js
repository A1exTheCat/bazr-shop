import $host from "./index";

export const fetchItems = async () => {
  const { data } = await $host.get("api/items?populate=*");
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/types");
  return data;
};

export const fetchColors = async () => {
  const { data } = await $host.get("api/colors");
  return data;
};

export const fetchSizes = async () => {
  const { data } = await $host.get("api/sizes");
  return data;
};

export const fetchOneItem = async (id) => {
  const { data } = await $host.get(`api/items/${id}?populate=*`);
  return data;
};
