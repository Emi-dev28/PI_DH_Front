import logo from "/img/logo/logo-editor.svg";

export const Footer = () => {
  return (
    <footer className="w-full py-8 px-2">
      <div className="py-6 flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img src={logo} alt="Logo DH Technology" className="w-60" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>About Us</li>
          <li>License</li>
          <li>Contribute</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="flex justify-between border-t-2 border-red-600 mt-2 pt-2">
        <span>© 2023 DH Technology All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
