import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";

//create header
//logo
//about,contact,home,cart links
//body
//search bar
//resaturant container
//restaurant cards
//img,name,cuisine.price,delivery time
//footer
// links

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
