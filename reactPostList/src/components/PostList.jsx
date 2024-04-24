
import React from 'react';
import Post from './Post';

export default function PostList({ postList }) {
  return (
    <div>
      {postList.map((post, idx) => {
        return <Post title={post.title} info={post.info} key={idx} />;
      })}
      
    </div>
  );
}
