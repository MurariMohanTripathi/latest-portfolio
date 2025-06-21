const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Terms & Privacy */}
      <div className="text-white-500 flex gap-2 text-sm sm:text-base">
        <p className="hover:underline cursor-pointer">Terms & Conditions</p>
        <p>|</p>
        <p className="hover:underline cursor-pointer">Privacy Policy</p>
      </div>

      {/* Social Media Icons with Links */}
      <div className="flex gap-4">
        <a
          href="https://github.com/murarimohantripathi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon hover:scale-110 transition-transform"
        >
          <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/MurariMohanTri2"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon hover:scale-110 transition-transform"
        >
          <img src="/assets/twitter.svg" alt="Twitter" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/murarimohantripathi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon hover:scale-110 transition-transform"
        >
          <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-white-500 text-sm sm:text-base">
        © {new Date().getFullYear()} Murari Tripathi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
