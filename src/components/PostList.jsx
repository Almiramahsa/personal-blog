import React from 'react';
import { getPostsByCategory } from '../../services/index.js';
import { PostCard, Layout } from '../../components';

const PostList = ({ posts }) => {
  return (
    <Layout>
      <div className="container mx-auto px-10 mb-8">
        <h2 className="text-xl font-medium mb-6">Category: {posts[0].categories[0].name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PostList;

export async function getStaticProps({ params }) {
  const posts = await getPostsByCategory(params.slug);
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
