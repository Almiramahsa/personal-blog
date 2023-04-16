import React from 'react';
import Image from 'next/image';
const Author = ({ author }) => {
  return (
    <div className="text-center mt-10 mb-8 p-12 relative rounded-lg bg-gray-200 bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14"></div>
      <Image alt={author.name} height={60} width={60} src={author.photo.url} className="align-middle rounded-full " />
      <h3 className="text-black mt-4 my-4 text-xl font-bold">Almira Mahsa</h3>
      <p className="text-black text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
