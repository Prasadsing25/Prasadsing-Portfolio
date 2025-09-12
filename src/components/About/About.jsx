import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import Profile2 from "../../assets/profile.jpg";

const About = () => {
    return (
        <section id="about" className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                {/* left Side */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                        Prasadsing Solanki
                    </h2>
                    {/* Skills heading with typing effect */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white">
                            I am a
                        </span> &nbsp;
                        <Typewriter
                            words={["Full Stack Developer", "MERN Stack Developer", "Coder", "Cloud Enthusiast"]}
                            speed={100}
                            eraseSpeed={50}
                            typingDelay={500}
                            eraseDelay={2000}
                            cursorRenderer={(cursor) =>
                                <span className="text-[#8245ec]">{cursor}</span>} />
                    </h3>

                    {/* About me Para */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I am a passionate and dedicated full-stack developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js). I love creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end development, I enjoy tackling complex problems and turning ideas into reality through code. My goal is to continuously learn and grow as a developer while contributing to innovative projects.
                    </p>

                    {/* Resume btn */}
                    <a
                        href="https://drive.google.com/file/d/1n7ugOylHvi2lKHTnq_9XwcywT0ZFgC5u/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transitionn duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec '
                        }}
                    >
                        DOWNLOAD CV
                    </a>
                </div>


                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center md:justify-end ">
                    <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                    tiltMaxAngleX={70}
                    tiltMaxAngleY={20}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}>
                        <img
                            src={Profile2}
                            alt="Prasadsing Solanki"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" />
                    </Tilt>
                </div>
            </div>

        </section>
    );
}

export default About;