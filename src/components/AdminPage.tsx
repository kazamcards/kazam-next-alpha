import React, { useState } from 'react';

interface Product {
  productName: string;
  price: number;
  category: string;
  era: string;
  set: string;
  stockVolume: number;
}

const AdminPage: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    productName: '',
    price: 0,
    category: '',
    era: '',
    set: '',
    stockVolume: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product submitted:', product);
    // Here you can handle the form submission, e.g., send the data to a server
  };

  return (
    <div>
      <h1>Admin Page - Upload Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={product.productName}
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
          <label htmlFor="stockVolume">Stock Volume:</label>
          <input
            type="number"
            id="stockVolume"
            name="stockVolume"
            value={product.stockVolume}
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