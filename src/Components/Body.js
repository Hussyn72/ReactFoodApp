import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import Counter from "./Counter";
import CounterTwo from "./Counter2";

const Body = () => {
  //useState Hook use to update the UI of the component whenever the local variable changes it re-render the component.
  //state variable
  const [listOfRestaurants, setFilteredListOfRestaurants] = useState([]); //earlier we were passing here resList but after passing the limitedProduct to setFilterLis function its taking automatically.
  //normal variable
  //let ListofRestaurants = [];
  const [listOfAllProducts, setlistOfAllProducts] = useState();

  //search Bar
  const [searchText, setSearchText] = useState("");

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
    setlistOfAllProducts(limitedProducts);
  };

  //whenever state variable update, react triggers a reconciliation cycle(re-renders the components).
  console.log("Body Rendered");

  // if (listOfRestaurants.length === 0) {//rendering a component like this on condition - this is known as conditional rendering.
  //   return <ShimmerUI />;
  // }

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search-bar">
          <input
            className="search-bax-textbox"
            type="text"
            placeholder="search restaurants"
            //binding the search text to this input box
            value={searchText}
            //input box will not change unless we change the searchtext because its a state variable.
            //whenever you change the local state variable react re-renders the component
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              //filter the restaurant cards and filter the UI
              console.log(searchText);
              const searchedText = listOfAllProducts.filter((restaurant) => {
                return restaurant.product_name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(searchedText);
              setFilteredListOfRestaurants(searchedText);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            //it takes the callback function.
            //console.log("Button Clicked");
            const topRatedRestaurant = listOfAllProducts
              .filter((resaturant) => resaturant.rating > 4)
              .sort((a, b) => b.rating - a.rating);
            //console.log("Top Rated Restaurants -> ", topRatedRestaurant);
            setFilteredListOfRestaurants(topRatedRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.product_id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
