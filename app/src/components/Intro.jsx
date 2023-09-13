import { HeaderBanner } from "../assets/images";

const Intro = () => {
  return (
    <section
      id="header"
      style={{ "--header-banner": `url(${HeaderBanner})` }}
      className={`bg-[image:var(--header-banner)] bg-top bg-cover xl:h-screen lg:h-screen md:h-[980px]`}
    >
      <div className="container">
        <div className="relative xl:h-screen lg:h-screen md:h-[980px]">
          <div className="xl:w-[455px] lg:w-[455px] md:w-[360px] xl:h-[330px] lg:h-[330px] md:h-[330px] absolute rounded-t-[20px] bg-black/50 backdrop-blur-[25px] border-white border-[4px] border-b-0 right-0 bottom-0 text-white py-[50px] px-[40px]">
            <p className="relative font-inter font-extrabold after:content-[''] after:inline-block after:bg-red after:w-[60px] after:h-[4px] after:absolute after:bottom-[-5px] after:left-0">
              Sound Design Masterclass
            </p>
            <h1 className="font-alegreya font-bold text-[40px] my-[20px]">
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
