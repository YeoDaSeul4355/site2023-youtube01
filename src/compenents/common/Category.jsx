import React from 'react';
import { categories } from '../../utils/content';

const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categories.map(category => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? '#ffe1e1' : 'transparent',
          }}
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span className="icon">{category.icon}</span>
          <span className="name">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Category;
