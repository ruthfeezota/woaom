import React from "react";
import "./Factory.css"
import { useStateValue } from "../StateProvider"

function Factory({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
      },
    });
  };
 
  return (
    <div className="factory">
      

      <img src={image} alt="" />
      <div className="factory__info">
        <p>{title}</p>
        <div className="factory__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <button>View Factory</button>

    </div>
  );
}

export default Factory;