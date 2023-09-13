import {
  TestimonialFirst,
  TestimonialSecond,
  TestimonialThird,
} from "../assets/images";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-[80px] bg-darkBlack">
      <div className="container">
        <h2 className="font-inter relative text-white text-[40px] font-black after:content-[''] after:bg-red after:inline-block after:absolute after:w-[80px] after:h-[4px] after:left-0 after:bottom-[-2.5px]">
          What our students say?
        </h2>
        <div className="mt-[50px] flex flex-wrap justify-between xl:flex-row lg:flex-row md:flex-col">
          <div className="card w-[27.5%] xl:mb-0 lg:mb-0 md:mb-[60px]">
            <img
              className="w-[100px] h-[100px] object-cover rounded-[10px]"
              src={TestimonialFirst}
              alt="Testimonial Image"
            />
            <h6 className="text-white font-alegreya text-[20px] font-bold mt-[16px] mb-[10px]">
              Peter Adams
            </h6>
            <p className="text-white font-alegreya">
              This is a great course. I got to learn a lot.
            </p>
          </div>
          <div className="card xl:mb-0 lg:mb-0 md:mb-[60px]">
            <img
              className="w-[100px] h-[100px] object-cover rounded-[10px]"
              src={TestimonialSecond}
              alt="Testimonial Image"
            />
            <h6 className="text-white font-alegreya text-[20px] font-bold mt-[16px] mb-[10px]">
              Robert Fox
            </h6>
            <p className="text-white font-alegreya">
              I got to learn a lot about Music Production with this course.
              Thanks :)
            </p>
          </div>
          <div className="w-[27.5%] xl:mb-0 lg:mb-0 md:mb-[60px]">
            <img
              className="w-[100px] h-[100px] object-cover rounded-[10px]"
              src={TestimonialThird}
              alt="Testimonial Image"
            />
            <h6 className="text-white font-alegreya text-[20px] font-bold mt-[16px] mb-[10px]">
              Emily Smith
            </h6>
            <p className="text-white font-alegreya">Awesome! Great job!!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
