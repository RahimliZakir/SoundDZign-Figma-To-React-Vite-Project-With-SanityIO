import { HeaderBanner } from "../assets/images";

const Header = () => {
  return (
    <section
      id="header"
      style={{ "--header-banner": `url(${HeaderBanner})` }}
      className={`bg-[image:var(--header-banner)] h-screen w-[1280px] container`}
    >
      <div className="relative h-screen">
        <div className="w-[455px] h-[330px] absolute rounded-t-[20px] bg-black/50 backdrop-blur-[25px] border-white border-[4px] border-b-0 right-0 bottom-0"></div>
      </div>
    </section>
  );
};

export default Header;
