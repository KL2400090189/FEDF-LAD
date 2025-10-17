import React, { useState } from 'react';
import './ProductFilter.css'; // Optional: for styling

// 1. Predefined array of product data
const allProducts = [
  { id: 1, name: 'Laptop', price: 1200, category: 'Electronics' },
  { id: 2, name: 'Notebook', price: 5, category: 'Stationery' },
  { id: 3, name: 'Backpack', price: 75, category: 'Bags' },
  { id: 4, name: 'Smartphone', price: 800, category: 'Electronics' },
  { id: 5, name: 'Pens (10-pack)', price: 8, category: 'Stationery' },
  { id: 6, name: 'Mouse', price: 25, category: 'Electronics' },
  { id: 7, name: 'Highlighters', price: 6, category: 'Stationery' },
  { id: 8, name: 'Messenger Bag', price: 50, category: 'Bags' },
];

// Dynamically get unique categories and add "All"
const categories = ['All', ...new Set(allProducts.map(product => product.category))];

function ProductFilter() {
  // 2. Use useState to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 3. Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="product-container">
      <h1>Our Products</h1>
      <p>Filter by category to find what you need.</p>

      {/* 4. Filter buttons to update the state */}
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 5. Dynamically render the filtered list using map() */}
      <ul className="product-list">
        {filteredProducts.map(product => (
          <li key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p className="price">Price: ${product.price}</p>
            <p className="category">Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;
