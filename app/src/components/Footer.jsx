import { FacebookIcon, TwitterIcon, InstagramIcon } from "../assets/images";

const Footer = () => {
  return (
    <footer className="py-[50px] bg-black">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <h4 className="font-inter text-white font-extrabold">
              Soun<span className="text-red">DZign</span>
            </h4>
            <div className="flex gap-[16px] mt-[24px] mb-[40px]">
              <a href="#">
                <img src={FacebookIcon} alt="Facebook Icon" />
              </a>
              <a href="#">
                <img src={TwitterIcon} alt="Twitter Icon" />
              </a>
              <a href="#">
                <img src={InstagramIcon} alt="Instagram Icon" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-alegreya text-pink text-[18px] font-bold">
              Quick Links
            </h4>
            <ul className="font-alegreya text-white">
              <li className="footer-li">
                <a href="#">Blog</a>
              </li>
              <li className="footer-li">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-alegreya text-pink text-[18px] font-bold">
              Contact Us
            </h4>
            <ul className="font-alegreya text-white">
              <li className="footer-li">
                <a href="#">contact@email.com</a>
              </li>
              <li className="footer-li">
                <a href="#">+1 999 9999 999</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p
            className="text-white font-alegreya"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            This website is designed by GTCoding Ⓒ 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
