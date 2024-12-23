import React from 'react';
import './style.css';

function ItemListContainer({ props }) {
  return (
    <div className="item-list-container">
      <h2>{props}</h2>
    </div>
  );
}

export default ItemListContainer;