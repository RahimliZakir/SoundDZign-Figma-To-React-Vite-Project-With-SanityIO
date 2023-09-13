const Nav = () => {
  return (
    <nav className="fixed z-[999] top-6 w-full">
      <div className="container">
        <div className="flex flex-wrap items-center px-10 h-[80px] bg-black/50 rounded-b-[10px] backdrop-blur-[20px]">
          <div className="xl:w-1/2 lg:w-1/2 md:w-1/4">
            <h6 className="font-inter text-white font-extrabold">
              Soun<span className="text-red">DZign</span>
            </h6>
          </div>
          <div className="xl:w-1/2 lg:w-1/2 md:w-3/4">
            <ul
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              className="flex justify-between text-white font-extrabold font-inter"
            >
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Course Details</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
