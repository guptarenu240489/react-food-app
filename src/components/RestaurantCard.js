import { IMG_CDN_URL } from "../constant";
const RestaurantCard = (props) => {
    // or destructure props
    const {restaurant} = props;
    const {name, cuisines,lastMileTravelString, cloudinaryImageId} = restaurant.data;
    return (
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{lastMileTravelString} star</h4>
        </div>
    )
}
export default RestaurantCard;