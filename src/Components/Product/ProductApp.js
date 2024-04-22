import React, { useState } from "react";
import ProductList from "./ProductList";

const ProductApp = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      image: "https://via.placeholder.com/300",
    },

    {
      id: 3,
      name: "Product 3",
      description: "Description for Product 3",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description for Product 4",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description for Product 5",
      image: "https://via.placeholder.com/300",
    },
  ]);

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleEdit = (productId) => {
    // Handle edit functionality here
    console.log("Editing product with id:", productId);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Product List</h1>
      <ProductList
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ProductApp;
