import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-semibold text-purple-500">
                    Prasadsing Solanki
                </h2>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
                    {[
                        {name: "About", id: "about"},
                        {name: "Skills", id: "skills"},
                        {name: "Certificate", id: "certificate"},
                        {name: "Projects", id: "project"},
                        {name: "Education", id: "education"},
                    ].map((item, index) => (
                        <button
                        key={index}
                        onClick={() => handleScroll(item.id)}
                        className="hover:text-purple-500 text-sm sm:text-base my-1">
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Social media icons */}
                <div className="flex flex-wrap justify-center space-x-4 mt-6">
                    {[
                        {icon: <FaLinkedin/>, link: "https://www.linkedin.com/in/prasadsing-solanki-0045ph275"},
                        {icon: <FaFacebook/>, link: ""},
                        {icon: <FaInstagram/>, link: "https://www.instagram.com/prasad_rajput1/"},
                        {icon: <FaTwitter/>, link: ""},
                    ].map((item, index) => (
                        <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110">
                            {item.icon}
                        </a>
                    ))}
                </div>

                {/* copyright text */}
                <p className="text-sm text-gray-400 mt-6">
                    &copy; {new Date().getFullYear()} Prasadsing Solanki. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;