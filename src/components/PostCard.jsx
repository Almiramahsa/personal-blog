import React from 'react';
import moment from 'moment/moment';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className=" mt-4 lg:p-8 lg:pb-10 mb-8">
      <div className="flex items-center justify-end text-sm mb-5 lg:mb-5 w-full lg:w-auto">
        <div className="font-medium text-gray-400 ">
          <span className="align-middle ">{moment(post.createdAt).format('MMMM DD, YYYY')}</span>
        </div>
      </div>
      <h1 className="transition duration-700 text-start mb-8 cursor-pointer hover:text-blue-900 text-3xl font-extrabold ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>

      <div className="relative overflow-hidden shadow-md pb-60 mb-6">
        {post.featuredImage && post.featuredImage.url ? (
          <Image src={post.featuredImage.url} width={800} height={600} alt={post.title} className="object-top absolute w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg " priority={true} />
        ) : null}
      </div>

      <div className="block lg:flex text-justify items-start justify-start mb-8 w-full">
        <div className="flex-1">
          <p className="text-left md:text-lg text-sm font-normal px-4 my-4">{post.excerpt}</p>
        </div>
      </div>
      <div className="text-left lg:mt-0 md:mt-4 px-4 my-4">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 font-medium text-sm text-violet-800  inline-block">Continue reading</span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#bfbfbf" stroke="#bfbfbf" className="inline-block w-4 h-4 md:ml-1">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title></title>
              <g id="Complete">
                <g id="arrow-up-right">
                  <g>
                    <polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                    <line fill="none" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line>
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
