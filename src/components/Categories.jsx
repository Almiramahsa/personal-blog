import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="border rounded-md p-8 mb-8">
      <h3 className="text-md mb-8 font-medium border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer hover:text-emerald-500  block ${index === categories.length - 1 ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
