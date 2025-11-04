import React from "react";
import PostCard from "./PostCard";
import { staticPosts } from "./data"; 

function Exercise() {
  const posts = staticPosts; 

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-700">
          Post Cards 
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {posts.map((post) => (
            <PostCard 
              key={post.id} 
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;