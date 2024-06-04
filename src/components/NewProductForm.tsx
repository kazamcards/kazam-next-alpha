"use client";
import React, { useState } from "react";

interface Product {
  product_name: string;
  price: number;
  category: string;
  era: string;
  set: string;
  inventory: number;
}

const AdminPage: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    product_name: "",
    price: 0,
    category: "",
    era: "",
    set: "",
    inventory: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product submitted:", product);
    // Here you can handle the form submission, e.g., send the data to a server
  };

  return (
    <div>
      <h1>Admin Page - Upload Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product_name">Product Name:</label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            value={product.product_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="era">Era:</label>
          <input
            type="text"
            id="era"
            name="era"
            value={product.era}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="set">Set:</label>
          <input
            type="text"
            id="set"
            name="set"
            value={product.set}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="inventory">Stock Volume:</label>
          <input
            type="number"
            id="inventory"
            name="inventory"
            value={product.inventory}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPage;
