import { useState } from "react";
import "./ItemCount.css";
import PropTypes from "prop-types";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const addCount = (num) => {
    setCount(count + num);
  };

  return (
    <div className="count-Container">
      <button
        disabled={count <= 1}
        className="button-count"
        onClick={() => {
          addCount(-1);
        }}
      >
        -
      </button>
      <div>{count}</div>
      <button
        disabled={count >= stock}
        className="button-count"
        onClick={() => {
          addCount(1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default ItemCount;