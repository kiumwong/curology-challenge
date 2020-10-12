import React, { useState } from 'react';

function Product(props) {
  const [quantity, setQuantity] = useState([]);
  const [total, setTotal] = useState(0);

  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const getTotal = () => {
    return total.toLocaleString(undefined, currencyOptions);
  };

  return (
    <div className="wrapper">
      <div>Shopping Cart: {quantity.length} total items.</div>
      <div>Total {total}</div>
      <div className="product">
        <span role="img" aria-label="ice cream">
          🍦
        </span>
      </div>
      <button>Add</button> <button>Remove</button>
    </div>
  );
}

export default Product;
