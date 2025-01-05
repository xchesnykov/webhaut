import React from 'react';
import '../styles/Categories.css';

const Categories = () => {
  const categories = ['Action', 'Adventure', 'Romance', 'Comedy', 'Horror', 'Sci-Fi'];

  return (
    <section className="categories">
      <h3 className="categories-title">Genres</h3>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
