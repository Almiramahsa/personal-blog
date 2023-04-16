import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '../../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-grey-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <Image src="/AM_plain_w.png" alt="logo" width={50} height={50} />
          </Link>
        </div>
        {/* <div className="hidden md:float-left md:contents ">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-normal cursor-pointer">{category.name}</span>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
