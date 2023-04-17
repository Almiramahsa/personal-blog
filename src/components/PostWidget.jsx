import React, { useState, useEffect } from 'react';
import { getRecentPosts, getSimiliarPosts } from '../../services';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimiliarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [categories, slug]);

  return (
    <div className=" border rounded-md p-8 mb-8">
      <h3 className="text-md mb-8 font-medium border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post) => {
        return (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <Image alt={post.title} height={80} width={60} className="align-middle rounded-sm" src={post.featuredImage.url} />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 text-xs">{moment(post.createAt).format('MMM DD, YYYY')}</p>
              <Link className="text-md" key={post.title} href={`/post/${post.slug}`}>
                {post.title}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostWidget;
