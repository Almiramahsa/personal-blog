import React from 'react';
import moment from 'moment/moment';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PostCard = ({ post, category }) => {
  return (
    <div className="card-container mt-4  lg:pb-10 mb-8 border rounded  hover:shadow-md hover:rounded">
      {' '}
      <div className="relative overflow-hidden  lg:pb-80 pb-40 mb-6">
        {post.featuredImage && post.featuredImage.url ? (
          <Image src={post.featuredImage.url} width={800} height={600} alt={post.title} className="object-top absolute w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg p-0" priority={true} />
        ) : null}
      </div>
      <p className="px-4 lg:px-8 mb-4">
        {post.categories.map((category) => (
          <Link className="text-md font-semibold  text-emerald-500 " key={category.slug} href={`/category/${category.slug}`}>
            {category.name}
          </Link>
        ))}
      </p>
      <h1 className="transition duration-700 text-start mb-4 lg:px-8  px-4 cursor-pointer hover:text-blue-900 text-xl lg:text-3xl font-bold ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="flex items-center justify-end text-sm lg:mb-5 mb-8 w-full lg:px-8 px-4 lg:w-auto">
        <div className="font-medium text-gray-400 ">
          <span className="align-middle ">{moment(post.createdAt).format('MMMM DD, YYYY')}</span>
        </div>
      </div>
      <div className="block lg:flex text-justify items-start justify-start mb-8 w-full">
        <div className="flex-1">
          <p className="text-left md:text-lg text-sm font-normal lg:px-8 px-4 my-4">{post.excerpt}</p>
        </div>
      </div>
      <div className="text-left lg:mt-0 md:mt-4 lg:px-8 px-4 my-4">
        <Link href={`/post/${post.slug}`}>
          <motion.span whileHover={{ y: -2 }} className="transition duration-500 transform hover:-translate-y-1 font-medium text-sm text-emerald-500   inline-block">
            Continue reading
          </motion.span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#bfbfbf" stroke="#bfbfbf" className="inline-block w-4 h-4 md:ml-1">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title></title>
              <g id="Complete">
                <g id="arrow-up-right">
                  <g>
                    <polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
                    <line fill="none" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
