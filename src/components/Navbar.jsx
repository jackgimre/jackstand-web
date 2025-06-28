import jackstandLogo from '../assets/jackstand_transparent.png';

const Navbar = () => {
  return (
    <nav className="w-full bg-black bg-opacity-50 backdrop-blur-md transition-all duration-300 text-white p-4 fixed top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a
            href="https://jackstand.app"
            className="flex flex-row items-center space-x-2 text-xl text-white hover:scale-105 transition-all duration-300"
            >
            <img src={jackstandLogo} alt="Jackstand Logo" className="h-16" />
            <div className="hidden sm:block text-[24px] text-yellow-300">Jackstand</div>
        </a>
        <ul className="flex sm:space-x-4 text-xl space-x-8">
          <li><a href="https://jackgimre.com" className="text-gray-300 hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="text-gray-300 hover:text-yellow-300">About</a></li>
          <li><a href="#" className="text-gray-300 hover:text-yellow-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;