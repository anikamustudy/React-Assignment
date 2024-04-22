import React from "react";

const Product = ({ product, onDelete, onEdit }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => onEdit(product.id)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
