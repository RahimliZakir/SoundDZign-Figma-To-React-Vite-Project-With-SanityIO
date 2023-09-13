import { useState } from "react";

import {
  Frequiences,
  UsingDaw,
  Vocals,
  Mixing,
  MixingConsole,
  Mastering,
  YellowBorder,
} from "../assets/images";

const About = () => {
  const [topicImage, setTopicImage] = useState(UsingDaw);

  return (
    <section id="about" className="bg-black py-[80px]">
      <div className="container">
        <h2 className="font-inter relative text-white text-[24px] xl:text-[40px] lg:text-[40px] md:text-[40px] font-black after:content-[''] after:bg-red after:inline-block after:absolute after:w-[50px] xl:after:w-[80px] lg:after:w-[80px] md:after:w-[80px] after:h-[4px] after:left-0 after:bottom-[-2.5px]">
          What will you learn?
        </h2>
        <div className="relative flex flex-wrap justify-center items-center mt-[40px] after:absolute after:inline-block after:w-[90px] after">
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2">
            <ul className="text-white font-alegreya text-[20px] ml-[50px] xl:ml-[25px] lg:ml-[25px] md:ml-[25px]">
              <li className="topics-li mb-[25px]">
                <a
                  onClick={() => setTopicImage(Frequiences)}
                  className="cursor-pointer"
                >
                  What are frequencies?
                </a>
              </li>
              <li className="topics-li mb-[25px]">
                <a
                  onClick={() => setTopicImage(UsingDaw)}
                  className="cursor-pointer"
                >
                  Using DAW
                </a>
              </li>
              <li className="topics-li mb-[25px]">
                <a
                  onClick={() => setTopicImage(Vocals)}
                  className="cursor-pointer"
                >
                  Vocals Processing
                </a>
              </li>
              <li className="topics-li mb-[25px]">
                <a
                  onClick={() => setTopicImage(Mixing)}
                  className="cursor-pointer"
                >
                  Mixing
                </a>
              </li>
              <li className="topics-li mb-[25px]">
                <a
                  onClick={() => setTopicImage(MixingConsole)}
                  className="cursor-pointer"
                >
                  Mixing Console
                </a>
              </li>
              <li className="topics-li">
                <a
                  onClick={() => setTopicImage(Mastering)}
                  className="cursor-pointer"
                >
                  Mastering
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden xl:block lg:block md:block w-1/2">
            <img
              className="xl:w-[560px] lg:w-[560px] md:w-[390px] h-[290px] object-cover"
              src={topicImage}
              alt="Topic Image"
            />
          </div>

          <img
            className="absolute right-[0] xl:right-[-25px] lg:right-[-25px] md:right-[-25px] bottom-[-25px]"
            src={YellowBorder}
            alt="Topic Image Border"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
