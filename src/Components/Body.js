import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  //useState Hook use to update the UI of the component whenever the local variable changes it re-render the component.
  //state variable
  const [listOfRestaurants, setFilteredListOfRestaurants] = useState([]); //earlier we were passing here resList but after passing the limitedProduct to setFilterLis function its taking automatically.
  //normal variable
  //let ListofRestaurants = [];

  //second Hook useEffect. takes 2 arguments 1st argument is arrow function second is dependency array.
  //the callback function of this use effect is called after body/Components gets renedered.
  useEffect(() => {
    console.log("Use Effect Hook called");
    fetchData();
  }, []);

  const fetchData = async () => {
    //API call it returns a promise
    const data = await fetch(
      "https://www.ovenstory.in/v1/api/get_all_products/brand_id/21/store_id/10240/source_id/10",
    );
    //console.log(data);
    //converting data into json
    const json = await data.json();
    //console.log(json);
    //console.log(json);
    //console.log(json.data.collections);
    //console.log(json.collections[0]);
    //console.log(json.collections[0].products);
    //console.log(json.data.collections[0].products[0]);
    console.log(json?.data?.collections?.[0]?.products?.[0]); //optional chainnig
    const collections = json.data.collections; //array of object
    //const apiData = collections.map((collection) => collection.products); // this will returnt the array of products.
    const allProduct = collections.flatMap((collection) => collection.products);

    //const productsArray = apiData.map((products) => products);
    console.log(allProduct);
    const limitedProducts = allProduct.slice(20, 40);
    console.log(limitedProducts);
    setFilteredListOfRestaurants(limitedProducts);
  };

  // console.log("Body Rendered");

  // if (listOfRestaurants.length === 0) {//rendering a component like this on condition - this is known as conditional rendering.
  //   return <ShimmerUI />;
  // }

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="Body">
      <div className="search-bar">
        <input type="text" placeholder="search restaurants"></input>
        <button>Search</button>
      </div>

      <button
        className="filter-btn"
        onClick={() => {
          //it takes the callback function.
          //console.log("Button Clicked");
          const topRatedRestaurant = resList.filter(
            (resaturant) => resaturant.rating > 4,
          );
          //console.log("Top Rated Restaurants -> ", topRatedRestaurant);
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
