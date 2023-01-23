export const filterData = (text, restaurants) => {
  // if(text==='') {
  //   return RESTAURANT_LIST;
  // }
  return restaurants.filter((r) => r.data.name.includes(text));
};
