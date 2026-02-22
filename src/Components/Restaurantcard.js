const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    product_id,
    product_name,
    product_imageUrl,
    price_without_tax,
    rating,
    product_code,
  } = resData;

  return (
    <div className="res-card">
      <img className="res-card-logo" src={product_imageUrl}></img>
      <h3>{product_id}</h3>
      <h3>{product_name}</h3>
      <h3>{rating}</h3>
      <h3>{price_without_tax}</h3>
      <h3>{product_code}</h3>
    </div>
  );
};

export default RestaurantCard;
