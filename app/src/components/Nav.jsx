const Nav = () => {
  return (
    <nav className="fixed flex items-center p-8 z-[999] top-6 left-[10%] right-[10%] h-[80px] bg-black/50 rounded-bl-[10px] rounded-br-[10px] backdrop-blur-[20px]">
      <div className="w-1/2">
        <h6 className="font-inter text-white font-extrabold">
          Soun<span className="text-red">DZign</span>
        </h6>
      </div>
      <div className="right-nav w-1/2">
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
    </nav>
  );
};

export default Nav;
