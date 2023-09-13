import { DawBlog, GuitarBlog, GroupBlog } from "../assets/images";

const Blog = () => {
  return (
    <section id="blog" className="py-[80px] bg-pink">
      <div className="container">
        <h2 className="font-inter relative text-white text-[40px] font-black after:content-[''] after:bg-yellow after:inline-block after:absolute after:w-[80px] after:h-[4px] after:left-0 after:bottom-[-2.5px]">
          Latest Posts
        </h2>
        <div className="mt-[40px] flex flex-wrap justify-between">
          <div className="w-[30%] mb-[40px]">
            <div className="relative bg-white rounded-[10px] hover:-translate-y-4 duration-500">
              <h6 className="absolute bg-white px-[16px] rounded-[10px] top-[8px] right-[8px] font-alegreya text-[13px] font-bold">
                DAW
              </h6>
              <img
                className="w-full object-cover h-[160px] rounded-[10px]"
                src={DawBlog}
                alt="Blog Image"
              />
              <p className="font-alegreya min-h-[90px] text-[18px] font-bold py-[16px] px-[24px]">
                How To Use Drum Machine in Logic Pro X
              </p>
            </div>
          </div>
          <div className="w-[30%] mb-[40px]">
            <div className="relative bg-white rounded-[10px] hover:-translate-y-4 duration-500">
              <h6 className="absolute bg-white px-[16px] rounded-[10px] top-[8px] right-[8px] font-alegreya text-[13px] font-bold">
                Mixing
              </h6>
              <img
                className="w-full object-cover h-[160px] rounded-[10px]"
                src={GuitarBlog}
                alt="Blog Image"
              />
              <p className="font-alegreya min-h-[90px] text-[18px] font-bold py-[16px] px-[24px]">
                How To Mix Guitars Effectively
              </p>
            </div>
          </div>
          <div className="w-[30%] mb-[40px]">
            <div className="relative bg-white rounded-[10px] hover:-translate-y-4 duration-500">
              <h6 className="absolute bg-white px-[16px] rounded-[10px] top-[8px] right-[8px] font-alegreya text-[13px] font-bold">
                Vox
              </h6>
              <img
                className="w-full object-cover h-[160px] rounded-[10px]"
                src={GroupBlog}
                alt="Blog Image"
              />
              <p className="font-alegreya min-h-[90px] text-[18px] font-bold py-[16px] px-[24px]">
                The Real Power of Harmonies in Music Production
              </p>
            </div>
          </div>
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
