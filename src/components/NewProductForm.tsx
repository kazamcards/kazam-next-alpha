"use client";
// @ts-nocheck

import React, { useState, useRef } from "react";
import { CategoryType, EraType, SetType } from "./types";
import { UploadNewProduct } from "@/app/lib/UploadNewProduct";

interface Product {
  product_name: string;
  description: string;
  price: number;
  category: string;
  era: string;
  set: string;
  imageUrl: string;
  inventory: number;
}
// @ts-ignore
export default function NewProductForm({
  categories,
  era,
  set
}: {
  categories: CategoryType[];
  era: EraType[];
  set: SetType[];
}) {
  // @ts-nocheck

  const [formStatus, setFormStatus] = useState<{ pending: boolean }>({
    pending: false
  });

  const formRef = useRef(null);

  const [product, setProduct] = useState<Product>({
    product_name: "",
    description: "",
    price: 0,
    category: "",
    era: "",
    set: "",
    imageUrl: "",
    inventory: 0
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  // @ts-ignore
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormStatus({ pending: true });

    try {
      const formData = new FormData(e.currentTarget);
      await UploadNewProduct(formData);
      setTimeout(() => {
        setFormStatus({ pending: false });
      }, 2000);
    } catch (error) {
      console.error(error);
    } finally {
      setFormStatus({ pending: false });
    }
  };

  return (
    <div>
      <form
        ref={formRef}
        className="product-form flex flex-col"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between">
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
        <div className="flex justify-between">
          <label htmlFor="product_name">Description:</label>
          <textarea
            rows={4}
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between">
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
        <div className="flex justify-between">
          <label htmlFor="category">Category:</label>
          <select
            //@ts-ignore
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
                <option key={cat.id} value={cat.id}>
                  {cat.category_name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-between">
          <label htmlFor="era">Era:</label>
          <select
            //@ts-ignore
            type="select"
            id="era"
            name="era"
            defaultValue=""
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Choose the best suited...
            </option>
            {era.map((era) => {
              return (
                <option
                  key={era.id}
                  value={era.id}
                  //@ts-ignore
                  name={era.era_name}
                >
                  {era.era_name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-between">
          <label htmlFor="set">Set:</label>
          <select
            //@ts-ignore
            type="select"
            id="set"
            name="set"
            defaultValue=""
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Choose the best suited...
            </option>
            {set.map((set) => {
              return (
                <option
                  key={set.id}
                  value={set.id}
                  //@ts-ignore
                  name={set.set_name}
                >
                  {set.set_name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-between">
          <label htmlFor="product_name">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between">
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
        <button
          disabled={formStatus.pending}
          type="submit"
          className={`${
            formStatus.pending ? "hover:bg-slate-500 cursor-not-allowed" : ""
          }`}
        >
          {formStatus.pending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
