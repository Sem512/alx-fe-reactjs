import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts, 
    cacheTime: 5 * 60 * 1000, 
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 10000
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
