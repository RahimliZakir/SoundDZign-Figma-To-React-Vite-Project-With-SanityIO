import { RedBorder, Student, VideoFile } from "../assets/images";

const Info = () => {
  return (
    <section id="info" className="bg-darkBlack py-[80px] container">
      <div className="relative flex">
        <img
          className="absolute left-0 top-[-30px]"
          src={RedBorder}
          alt="Info Image Border"
        />

        <div className="flex flex-col items-center justify-center w-1/2 text-white">
          <img src={Student} alt="Student Image" />
          <h4 className="font-inter text-[40px] font-black">23,000+</h4>
          <p className="font-alegreya text-[30px] font-bold">Students</p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 text-white">
          <img src={VideoFile} alt="Video File Image" />
          <h4 className="font-inter text-[40px] font-black">26Hrs</h4>
          <p className="font-alegreya text-[30px] font-bold">Video Content</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
