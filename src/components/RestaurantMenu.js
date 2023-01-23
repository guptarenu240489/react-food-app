import { useParams } from 'react-router-dom';
import useRestraunt from '../../utils/useRestarunt';
import { IMG_CDN_URL } from '../constant';
import Shimmer from './Shimmer';
const RestaurantMenu = () => {
  // useParam hook to read dynamic url
  const { id } = useParams();
  // const [restaurant, setRestaurant] = useState(null);
  const restaurant = useRestraunt(id);
  console.log('Params', id);

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <>
      <h2>{restaurant.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <h2>{restaurant.city}</h2>
      <h2>{restaurant.area}</h2>
      <h2> {restaurant?.avgRating}</h2>
      <h2>{restaurant?.costForTwoMsg}</h2>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}> {item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
