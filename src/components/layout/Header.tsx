import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <header className="text-gray-600 body-font max-w-screen-lg mx-auto">
        <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
          <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl">TextUtils</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={'/'} className="mr-5 hover:text-pink-900">Home</Link>
            <Link to={'/about'} className="hover:text-pink-900">About</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header