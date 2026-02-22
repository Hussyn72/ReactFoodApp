import RestaurantCard from "./Restaurantcard";
import resObj from "../utils/mockdata";

const Body = () => {
  return (
    <div className="Body">
      <div className="search-bar">
        <input type="text" placeholder="search restaurants"></input>
        <button>Search</button>
      </div>
      <button>Top Rated Restaurants</button>
      <div className="res-container">
        {resObj.map((res) => (
          <RestaurantCard key={res.product_id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
