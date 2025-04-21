import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => setShow(!show);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false); // auto close menu saat scroll
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  let menuActive = show ? "left-0" : "-left-full";
  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  return (
    <div className={`navbar fixed w-full transition-all z-50 ${scrollActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-2xl text-xl font-bold">Portfolio.🧷</h1>
          </div>

          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-10 bg-sky-400 font-bold text-gray transition-all z-40`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-2-line text-3xl md:hidden block"></i>
              <a href="#home" className="font-medium opacity-75">{t("Home")}</a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-line text-3xl md:hidden block"></i>
              <a href="#about" className="font-medium opacity-75">{t("about")}</a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-settings-line text-3xl md:hidden block"></i>
              <a href="#contact" className="font-medium opacity-75">{t("contact")}</a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-image-line text-3xl md:hidden block"></i>
              <a href="#projects" className="font-medium opacity-75">{t("project")}</a>
            </li>
          </ul>

          <div className="sosial flex items-center gap-2">
            <a href="#" className="bg-sky-400 px-5 py-2 rounded-full">{t("Media")}</a>

            {/* Tombol Bahasa */}
            <button
              onClick={() => changeLanguage("id")}
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 text-sm"
            >
              ID
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 text-sm"
            >
              EN
            </button>

            {/* Menu Burger */}
            <i
              className="ri-menu-line text-3xl md:hidden block cursor-pointer"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
