import React from 'react';
import Image from 'next/image';
import moment from 'moment/moment';
import Link from 'next/link';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }
    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'image':
        return <Image key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />;
      default:
        return modifiedText;
    }
  };
  return (
    <>
      <div className="shadow-md rounded-md lg:p-8  pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <Image src={post.featuredImage.url} alt={post.title} className="object-top h-full w-full rounded-t-lg" width={800} height={300} />
        </div>

        <div className="flex items-center justify-end text-sm mb-5 lg:mb-5 w-full lg:w-auto">
          <div className="font-sm  text-gray-400 ">
            <span className="align-middle mr-8">{moment(post.createdAt).format('MMMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="transition duration-700 text-start mb-8 mx-4 cursor-pointer hover:text-blue-900 lg:text-3xl text-xl font-extrabold ">{post.title}</h1>
        <div className="mx-4">
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
