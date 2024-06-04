"use client";
import { allCategories } from "@/app/lib/AllCategories";
import React, { useState } from "react";

interface Product {
  product_name: string;
  price: number;
  category: string;
  era: string;
  set: string;
  inventory: number;
}

export default function NewProductForm({ categories, era, set }) {
  console.log(categories);

  const [product, setProduct] = useState<Product>({
    product_name: "",
    price: 0,
    category: "",
    era: "",
    set: "",
    inventory: 0,
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
          <select
            type="select"
            id="category"
            name="category"
            defaultValue=""
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Choose the best suited...
            </option>
            {categories.map((cat) => {
              return (
                <option
                  key={cat.id}
                  value={parseInt(cat.id)}
                  name={cat.category_name}
                >
                  {cat.category_name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="era">Era:</label>
          <select
            type="select"
            id="era"
            name="era"
            defaultValue=""
            
            onChange={handleChange}
            required>
            <option disabled value="">
            Choose the best suited...
          </option>
          {era.map((era) => {
              return (
                <option
                  key={era.id}
                  value={parseInt(era.id)}
                  name={era.era_name}
                >
                  {era.era_name}
                </option>
              )})}
              </select>
        </div>
        <div>
          <label htmlFor="set">Set:</label>
          <select
            type="select"
            id="set"
            name="set"
            defaultValue=""
            
            onChange={handleChange}
            required>
            <option disabled value="">
            Choose the best suited...
          </option>
          {set.map((set) => {
              return (
                <option
                  key={set.id}
                  value={parseInt(set.id)}
                  name={set.set_name}
                >
                  {set.set_name}
                </option>
              )})}
              </select>
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
}
