import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex space-x-0.5 md:space-x-10 py-6 px-3 justify-center items-center">
      <div className="md:hidden text-xs text-gray whitespace-nowrap">
        <p>© 2022 Exx Network</p>
      </div>

      <div className="text-xs text-dark md:text-gray whitespace-nowrap pl-1 md:pl-0">
        <Link to={"/faq"}>FAQ's</Link>
      </div>

      <div className="hidden md:flex text-xs text-dark md:text-gray capitalize whitespace-nowrap">
        <Link to={"/https://www/exx.com"}>exx website</Link>
      </div>

      <div className="hidden md:flex text-xs text-dark md:text-gray capitalize whitespace-nowrap">
        <Link to={"/terms-&-condition"}>terms & condition</Link>
      </div>

      <div className="hidden md:flex text-xs text-dark md:text-gray capitalize whitespace-nowrap">
        <Link to={"/help"}>help</Link>
      </div>

      <div className="md:hidden text-xs text-dark md:text-gray flex space-x-1 whitespace-nowrap">
        <hr className="lg:hidden border-gray rotate-90 w-3 mt-[0.7rem]" />
        <Link to={"/privacy-policy"} className="capitalize">
          privacy policy
        </Link>
      </div>

      <div className="md:hidden text-xs text-dark md:text-gray flex space-x-1">
        <hr className="lg:hidden border-gray rotate-90 w-3 mt-[0.7rem]" />
        <Link to={"/support"} className="capitalize">
          support
        </Link>
      </div>
    </div>
  );
};

export default Footer;
