// components/Header.js

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md p-4 flex justify-between items-center fixed top-0 w-full">
      <div className="text-lg font-semibold">My Website</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a className="hover:text-blue-200">Home</a>
          </li>
          <li>
            <a className="hover:text-blue-200">About</a>
          </li>
          <li>
            <a className="hover:text-blue-200">Services</a>
          </li>
          <li>
            <a className="hover:text-blue-200">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
