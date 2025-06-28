import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='text-white bg-black w-full flex flex-col h-[10%] justify-center items-center px-8 text-[17px]'>
            <div className='flex flex-row gap-3 text-[22px] pt-2'>
                <a href='https://instagram.com/jackstandapp' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram}/></a>
                <a href='https://github.com/jackgimre/jackstand-web' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
            </div>
            <p className='pb-2'>Get the app. Start your build. © 2025 Jackstand</p>
        </div>
    );
}

export default Footer;