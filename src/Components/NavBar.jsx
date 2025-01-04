import { Link} from "react-router-dom";

function NavBar() {
  return (
    <nav className="h-16 bg-gray-400 bg-opacity-90 w-full flex items-center justify-between border-b-gray-500 border-b shadow-md shadow-gray-400 sticky">
      {/* Site Logo */}
      <div className="site-logo px-4 py-1 h-full flex items-center">
        <img className="h-full" src="logo512.png" alt="Site Logo" />
      </div>

      <div className="site-nav mr-16">
        <ul className="navbar text-gray-950 text-xl font-bold flex h-16 items-center justify-center">
          <li className="nav-item ">
            <Link  to="/">Home</Link>
          </li>
          <li className="nav-item  ">
            <Link  to="/downloader">Downloader</Link>
          </li>
          <li className=" nav-item   ">
            <Link to="/converter">Converter</Link>
          </li>
          <li className=" nav-item   ">
            <Link to="/about">About</Link>
          </li>
          <li className=" nav-item   ">
            <Link to="/faq">FAQs</Link>
          </li>
          <li className=" nav-item   ">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
