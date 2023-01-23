import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// const filterData = (text, restaurants) => {
//   // if(text==='') {
//   //   return RESTAURANT_LIST;
//   // }
//   return restaurants.filter(r => r.data.name.includes(text));
// }
const Body = () => {
    // variables like this will not work if you wnat to update them , use state vars
    const [searchText, setSearchText] = useState(''); // To create state variables
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    // Empty dependency array will be called once after render
    // dependency array [seartchText] => once after initial render and everytime after rerender when searchTxt changes
    useEffect(()=> {
      console.log('Render only once because dependency array is []');
    },[]);
    useEffect(()=> {
      console.log('Render whenever searchText changes');
    },[searchText]);

    useEffect(()=> {
      console.log('Render whenever restaurants changes ,means on click of btn');
    },[restaurants])  ;
    
    useEffect(()=> {
      getRestaurants();
    },[])
    // pass initaial value like this 
    // const [searchText] = useState('KFC'); // To create state variables
    const restaurant1 = filteredRestaurants.map(r => <Link to={'restaurant/'+r?.data?.id}><RestaurantCard restaurant={r}/></Link>)
    console.log('render');
    async function getRestaurants() {
      const data =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5956161&lng=76.6167212&page_type=DESKTOP_WEB_LISTING');
      const json = await data.json();
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    // Conditional Rendering
    //  If restaurant is emoty load shimmer UI 
    // If restaurant has data load actual UI
    const online = useOnline();
    if(!online){
      return <h1>Network down!!</h1>
    }
    return (filteredRestaurants.length === 0)?  <Shimmer /> : (
    <>
    
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search" value={ searchText} 
      onChange={(e) => {
        setSearchText(e.target.value);
      }}/>
      <button className="search-btn" onClick={() => {
        const filteredList = filterData(searchText, restaurants);
        setFilteredRestaurants(filteredList)
      }} >Search </button>
    </div>
    <div className="restraunt-list">
        {restaurant1}
        
    </div></>)
  
}


export default Body;