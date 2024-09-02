import { client } from "@/apollo/client";
import { QBlogs } from "@/apollo/queries";
import React from "react";

async function getBlogs() {
  const response = await client.query({
    query: QBlogs,
  });
  const blogs = response.data.blogs;
  return {
    blogs,
  };
}
const Blogs = async () => {
  const { blogs } = await getBlogs();
  return <div>Blogs</div>;
};

export default Blogs;
