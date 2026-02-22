import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  //useState Hook use to update the UI of the component whenever the local variable changes it re-render the component.
  //state variable
  const [listOfRestaurants, setFilteredListOfRestaurants] = useState(resList);
  //normal variable
  //let ListofRestaurants = [];

  return (
    <div className="Body">
      <div className="search-bar">
        <input type="text" placeholder="search restaurants"></input>
        <button>Search</button>
      </div>

      <button
        className="filter-btn"
        onClick={() => {
          //it takes the callback function.
          console.log("Button Clicked");
          const topRatedRestaurant = resList.filter(
            (resaturant) => resaturant.rating > 4,
          );
          console.log("Top Rated Restaurants -> ", topRatedRestaurant);
          setFilteredListOfRestaurants(topRatedRestaurant);
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.product_id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
