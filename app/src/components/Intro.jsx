import { HeaderBanner } from "../assets/images";

const Intro = () => {
  return (
    <section
      id="intro"
      style={{ "--header-banner": `url(${HeaderBanner})` }}
      className={`bg-[image:var(--header-banner)] bg-top bg-cover h-[815px] xl:h-screen lg:h-screen md:h-[980px] sm:h-[815px]`}
    >
      <div className="container">
        <div className="flex items-end justify-center xl:justify-end lg:justify-end md:justify-end h-[815px] xl:h-screen lg:h-screen md:h-[980px]">
          <div className="w-[310px] xl:w-[455px] lg:w-[455px] md:w-[360px] rounded-t-[20px] bg-black/50 backdrop-blur-[25px] border-white border-[4px] border-b-0 text-white py-[50px] px-[40px]">
            <p className="relative font-inter font-extrabold after:content-[''] after:inline-block after:bg-red after:w-[60px] after:h-[4px] after:absolute after:bottom-[-5px] after:left-0">
              Sound Design Masterclass
            </p>
            <h1 className="font-alegreya font-bold text-[32px] xl:text-[40px] lg:text-[40px] md:text-[40px] mt-[25px] xl:mt-[35px] lg:mt-[35px] md:mt-[35px] mb-[25px] xl:mb-[15px] lg:mb-[15px] md:mb-[15px]">
              Learn the Art of Sound Design
            </h1>
            <button className="font-inter font-bold bg-red rounded-[10px] py-[10px] px-[32px]">
              Demo Lesson
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
