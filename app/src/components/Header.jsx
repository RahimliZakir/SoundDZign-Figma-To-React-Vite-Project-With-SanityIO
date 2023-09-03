import { HeaderBanner } from "../assets/images";

const Header = () => {
  return (
    <section
      id="header"
      style={{ "--header-banner": `url(${HeaderBanner})` }}
      className={`bg-[image:var(--header-banner)]`}
    >
      <div className="container"></div>
    </section>
  );
};

export default Header;
