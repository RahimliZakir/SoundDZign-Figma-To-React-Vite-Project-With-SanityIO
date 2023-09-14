import { useState, useEffect } from "react";

import { client, urlFor } from "../client";

// import {
//   TestimonialFirst,
//   TestimonialSecond,
//   TestimonialThird,
// } from "../assets/images";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => setTestimonials(data));
  }, []);

  return (
    <section id="testimonials" className="py-[80px] bg-darkBlack">
      <div className="container">
        <h2 className="font-inter relative text-white text-[24px] xl:text-[40px] lg:text-[40px] md:text-[40px] font-black after:content-[''] after:bg-red after:inline-block after:absolute after:w-[50px] xl:after:w-[80px] lg:after:w-[80px] md:after:w-[80px] after:h-[4px] after:left-0 after:bottom-[-2.5px]">
          What our students say?
        </h2>
        <div className="mt-[50px] flex flex-wrap items-center xl:items-start lg:items-start md:items-start justify-between flex-col xl:flex-row lg:flex-row">
          {testimonials.map((item, index) => {
            return (
              <div
                key={index}
                className="card flex flex-col md:flex-row items-center md:items-start xl:block lg:block w-full xl:w-[27.5%] lg:w-[27.5%] mb-[60px] xl:mb-0 lg:mb-0 md:mb-[60px]"
              >
                <img
                  className="w-[100px] h-[100px] object-cover rounded-[10px]"
                  src={urlFor(item.image)}
                  alt="Testimonial Image"
                />
                <div className="text-center xl:text-left lg:text-left md:text-left xl:ml-0 lg:ml-0 md:ml-[30px]">
                  <h6 className="text-white font-alegreya text-[20px] font-bold mt-[16px] mb-[10px]">
                    {item.userInfo}
                  </h6>
                  <p className="text-white font-alegreya">{item.review}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
