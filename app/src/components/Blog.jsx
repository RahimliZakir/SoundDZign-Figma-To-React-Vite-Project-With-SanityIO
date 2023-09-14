import { useState, useEffect } from "react";

import { client, urlFor } from "../client";

// import { DawBlog, GuitarBlog, GroupBlog } from "../assets/images";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const query = '*[_type == "blog"]';

    client.fetch(query).then((data) => setBlog(data));
  }, []);

  return (
    <section id="blog" className="py-[80px] bg-pink">
      <div className="container">
        <h2 className="font-inter relative text-white text-[24px] xl:text-[40px] lg:text-[40px] md:text-[40px] font-black after:content-[''] after:bg-yellow after:inline-block after:absolute after:w-[50px] xl:after:w-[80px] lg:after:w-[80px] md:after:w-[80px] after:h-[4px] after:left-0 after:bottom-[-2.5px]">
          Latest Posts
        </h2>
        <div className="mt-[40px] flex flex-wrap flex-col xl:flex-row lg:flex-row md:flex-row justify-between">
          {blog.map((item) => {
            return (
              <div
                key={item._id}
                className="xl:w-[30%] lg:w-[30%] md:w-[45%] mb-[40px]"
              >
                <div className="relative bg-white rounded-[10px] hover:-translate-y-4 duration-500">
                  <h6 className="absolute bg-white px-[16px] rounded-[10px] top-[8px] right-[8px] font-alegreya text-[13px] font-bold">
                    {item.category}
                  </h6>
                  <img
                    className="w-full object-cover h-[160px] rounded-[10px]"
                    src={urlFor(item.image)}
                    alt="Blog Image"
                  />
                  <p className="font-alegreya min-h-[90px] text-[18px] font-bold py-[16px] px-[24px]">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end pt-[30px]">
          <a
            href="#"
            className="bg-white font-alegreya font-bold rounded-[10px] py-[4px] px-[32px]"
          >
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
