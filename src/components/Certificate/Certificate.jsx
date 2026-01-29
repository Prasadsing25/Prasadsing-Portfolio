//After getting Experience, I will replace certificate section with Experience section
import { Certificates } from "../../constants.js";

const Certificate = () => {


    return (
        <section
            id="certificate"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[7vw] font-sans bg-skills-gradient clip-path-custom2">

            {/* Section title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">
                    CERTIFICATE
                </h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    A Collection of my work credits that i have earn by learning new technology
                </p>
            </div>

            {/* Certificates Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

                {/* Certificates Entries */}
                {Certificates.map((certificate, index) => (
                    <div
                        key={certificate.id}
                        className={`flex flex-col sm:flex-row items-center mb-1 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                            }`}>

                        {/* Timeline Circle */}
                        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                            <img
                                src={certificate.img}
                                alt={certificate.name}
                                className="w-full h-full rounded-full object-cover" />
                        </div>

                        {/* Content Section  */}
                        <div className={`w-full sm:max-w-md p-1 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
                            ${index % 2 === 0 ? "sm:ml-0 " : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105 `}>

                            {/*  Flex container for image and text */}
                            <div className="flex items-center space-x-6">
                                {/* Certificate Logo */}
                                <div className="w-16 h-16 ml-5 bg-white rounded-md overflow-hidden">
                                    <img src={certificate.img} alt={certificate.name} className="w-full h-full object-cover" />
                                </div>

                                {/* Role, company name and date */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white">{certificate.name}</h3>
                                        {/* <h4>{certificate}</h4>skip for now */}
                                    </div>

                                    {/* date */}
                                    <p className="text-sm text-gray-500 mt-2">{certificate.date}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-400 ">{certificate.desc}</p>
                            <div className="mt-2">
                                <h5 className="font-medium text-white">Skills</h5>
                                <ul className="flex flex-wrap mt-2">
                                    {certificate.skills.map((skill, index) => (
                                        <li
                                            key={index}
                                            className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border-gray-400">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Certificate btn */}
                            <a
                                href={certificate.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-white py-3 px-4 rounded-full mt-5 text-md font-bold transitionn duration-300 transform hover:scale-105"
                                style={{
                                    background: 'linear-gradient(90deg, #8245ec, #453a50)',
                                    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec'
                                    // boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
                                }}
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certificate;