import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(5039684.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
          zIndex: "auto",
        }}
      >
        <header className="text-gray-600 body-font max-w-screen-lg mx-auto">
          <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
            <Link
              to={"/"}
              className="flex title-font font-medium items-center text-yellow-600 mb-4 md:mb-0"
            >
              <span className="text-xl">TextUtils</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link
                to={"/"}
                className="mr-5 text-white hover:text-yellow-600 duration-200"
              >
                Home
              </Link>
              <Link
                to={"#about"}
                className="text-white hover:text-yellow-600 duration-200"
              >
                About
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
