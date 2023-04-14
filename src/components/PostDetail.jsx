import React from 'react';
import Image from 'next/image';
import moment from 'moment/moment';
import Link from 'next/link';
const PostDetail = ({ post }) => {
  return (
    <div className="shadow-md rounded-md lg:p-8  pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <Image src={post.featuredImage.url} alt={post.title} className="object-top h-full w-full rounded-t-lg" width={800} height={300} />
      </div>
      <div></div>
      <div className="flex items-center justify-end text-sm mb-5 lg:mb-5 w-full lg:w-auto">
        <div className="font-medium text-gray-400 ">
          <span className="align-middle mr-8">{moment(post.createdAt).format('MMMM DD, YYYY')}</span>
        </div>
      </div>
      <h1 className="transition duration-700 text-start mb-8 ml-8 cursor-pointer hover:text-blue-900 text-3xl font-extrabold ">{post.title}</h1>
    </div>
  );
};

export default PostDetail;
