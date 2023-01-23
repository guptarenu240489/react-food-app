import { useEffect, useState } from 'react';
import { FETCH_MENU } from '../src/constant';

const useRestraunt = (id) => {
  // if resId chaneg, data should also change so use state
  const [restarant, setRestaurant] = useState(null);
  // GEt date from api
  useEffect(() => {
    fetchRestaurantData(id);
  }, []);
  async function fetchRestaurantData(id) {
    const data = await fetch(FETCH_MENU + id);
    const result = await data.json();
    console.log('result', result);
    setRestaurant(result.data);
  }
  // return restarant data

  return restarant;
};

export default useRestraunt;
