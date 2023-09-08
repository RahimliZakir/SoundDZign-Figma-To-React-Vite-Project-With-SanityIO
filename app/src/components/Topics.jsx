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

const Topics = () => {
  const [topicImage, setTopicImage] = useState(UsingDaw);

  return (
    <section id="topics" className="bg-black container py-[80px]">
      <h2 className="font-inter relative text-white text-[40px] font-black after:content-[''] after:bg-red after:inline-block after:absolute after:w-[80px] after:h-[4px] after:left-0 after:bottom-[-2.5px]">
        What will you learn?
      </h2>
      <div className="relative flex flex-wrap justify-between items-center mt-[40px] after:absolute after:inline-block after:w-[90px] after">
        <div className="w-1/2">
          <ul className="text-white font-alegreya text-[20px] ml-[25px]">
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
        <div className="w-1/2">
          <img className="object-cover" src={topicImage} alt="Topic Image" />
        </div>

        <img
          className="absolute right-[-25px] bottom-0"
          src={YellowBorder}
          alt="Topic Image Border"
        />
      </div>
    </section>
  );
};

export default Topics;
