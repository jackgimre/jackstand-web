import Features from "./About";
import apple from "../assets/apple.png";
import googlePlay from "../assets/google play.png";

const Header = () => {
  return (
    <section class="pt-[220px] w-full h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-black via-zinc-900 to-zinc-800">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 mt-16">Build. Share. Inspire.</h1>
      <p class="text-lg md:text-xl text-zinc-400 max-w-xl">The garage in your pocket.</p>
      <p class="text-lg md:text-xl text-zinc-400 max-w-xl mb-8">Create and discover custom car builds made with real parts.</p>
      
      <div class="flex gap-4 mb-24">
        <a
            href="#"
            className="bg-white text-black px-3 py-3 rounded-xl text-sm font-semibold hover:scale-105 transition flex flex-row items-center space-x-2"
            >
            <img src={apple} alt="Apple Logo" className="h-10 pb-2" />
            <div className="flex flex-col justify-left">
                <p className="text-xs">Download on the</p>
                <p className="font-bold">App Store</p>
            </div>
        </a>

         <a
            href="#"
            className="bg-white text-black px-3 py-3 rounded-xl text-sm font-semibold hover:scale-105 transition flex flex-row items-center space-x-2"
            >
            <img src={googlePlay} alt="Google Play Logo" className="h-10 pb-2" />
            <div className="flex flex-col justify-left">
                <p className="text-xs">Get it on</p>
                <p className="font-bold">Google Play</p>
            </div>
        </a>
      </div>
      <a href="#about" className="flex py-4 px-6 bg-transparent border border-zinc-600 border-[2px] rounded-[32px] hover:scale-105 transition">
        <p className="text-sm font-semibold">Find out more</p>
      </a>
    </section>
  );
};

export default Header;
