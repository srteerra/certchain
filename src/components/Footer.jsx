import file from ".././assets/icons/document.png";
import folder from ".././assets/icons/open-folder.png";

const Footer = () => {
    return (
        // Icons animated
        <div className="h-1/5 relative opacity-30">
            <img src={ file } alt="file" className="w-[10%] absolute -bottom-16 left-[10%]" />
            <img src={ file } alt="file" className="w-[10%] absolute bottom-2 left-[32%]" />
            <img src={ file } alt="file" className="w-[10%] absolute bottom-2 left-[62%] -scale-x-100" />
            <img src={ file } alt="file" className="w-[10%] absolute -bottom-16 left-[80%] -scale-x-100" />

            <img src={ file } alt="file" className="w-[50px] animate-bounce-slow absolute top-0 left-[25%]" />
            <img src={ file } alt="file" className="w-[50px] animate-bounce-slow absolute top-0 right-[24%] -scale-x-100" />
            <img src={ folder } alt="file" className="w-[50px] animate-bounce-slow absolute top-20 left-[45%]" />
            <img src={ folder } alt="file" className="w-[50px] animate-bounce-slow absolute top-20 left-[57%] -scale-x-100" />
        </div>
    );
}

export default Footer;