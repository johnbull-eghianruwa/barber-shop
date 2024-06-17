import React, { useState } from 'react';
import { FaEuroSign, FaPlus } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
  onAdd: (product: any) => void;
  onRemove: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ id, title, description, price, duration, onAdd, onRemove }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    const product = { id, title, description, price, duration };
    onAdd(product);
    setAdded(true);
  };

  const handleRemoveFromCart = () => {
    onRemove(id);
    setAdded(false);
  };

  return (
    <div>
      <h3>{title}</h3>
      <div className="price">
        <p>
          {added ? (
            <GrStatusGood onClick={handleRemoveFromCart} />
          ) : (
            <FaPlus onClick={handleAddToCart} />
          )}
          <FaEuroSign />{price}
        </p>
        {added && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Product;
