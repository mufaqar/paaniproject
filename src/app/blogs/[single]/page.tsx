import { client } from "@/apollo/client";
import { QBlogs, QSingleBlog } from "@/apollo/queries";
import React from "react";

async function getBlogs(slug:any) {
  const response = await client.query({
    query: QSingleBlog,
    variables: {
      slug
    },
  });
  const blog = response.data.blog;
  return {
    blog,
  };
}

const SingleBlog = async ({params}:any) => {
  const { blog } = await getBlogs(params?.single);
  return <div>Blogs</div>;
};

export default SingleBlog;
