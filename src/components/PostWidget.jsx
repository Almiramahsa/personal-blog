import React, { useState, useEffect } from 'react';
import { getRecentPosts, getSimiliarPosts } from '../../services';
import Image from 'next/image';
const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimiliarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [categories, slug]);

  console.log(relatedPosts);
  return (
    <div className=" shadow-md rounded-md p-8 mb-8">
      <h3 className="text-md mb-8 font-medium border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post) => {
        return (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <Image alt={post.title} height={40} width={60} className="align-middle rounded-md" src={post.featuredImage.url} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostWidget;
