import nwp1 from '../assets/nwp1.jpg';
import nwp2 from '../assets/nwp2.jpg';
import nwp3 from '../assets/nwp3.jpg';
import Card from './Card.jsx';

const title1 = 'Parts Shop';
const desc1 = 'Browse verified aftermarket and OEM parts. Build your dream car using real-world specs and components.';

const title2 = 'Social Media';
const desc2 = 'Share your builds, get feedback, and connect with other car enthusiasts in a custom-tailored garage feed.';

const title3 = 'Personal Planner';
const desc3 = 'Track your builds, set goals, and plan upgrades. Keep every detail organized in one place.';

const About = () => {
    return (
    <section id="about" class="pt-24 px-6 pb-20 bg-zinc-800 text-white w-full flex flex-col">
      <h1 className="pt-4 pb-8 sm:text-[48px] text-[32px] font-semibold pl-[15%]">What is <p className="text-white hover:text-yellow-300 inline-block hover:scale-105 transition">Jackstand<p className="text-white inline-block">?</p></p></h1>
      <div className="max-w-[70%] text-center flex flex-row items-center justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left text-zinc-200">
          <Card img={nwp1} title={title1} description={desc1}></Card>
          <Card img={nwp3} title={title2} description={desc2}></Card>
          <Card img={nwp2} title={title3} description={desc3}></Card>
        </div>
      </div>
      <p className='pl-[15%] pt-4'>Photos: <a href='https://instagram.com/natewafephotos' target='_blank' rel='noopener noreferrer' className='text-blue-400 underline'>Nathan Wafer</a></p>
    </section>
    );
}

export default About;