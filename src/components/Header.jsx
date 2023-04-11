import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web Development', slug: 'web-dev' },
];
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <Image src="/AM_plain_w.png" alt="logo" width={50} height={50} />{' '}
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span
                className="md:float-right mt-2 align-middle text-black ml-4 font-semibold
                 cursor-pointer"
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
