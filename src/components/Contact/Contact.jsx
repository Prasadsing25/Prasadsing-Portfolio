import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_dvdjpqt", //EmailJs service ID
            "template_0o81fw9", //EmailJs template ID
            form.current, 
            "w3a7v4p03U7A0kGLl" //EmailJs public key
        )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset(); //Reset form fields after sending
                    toast.success("Message sent successfully! ✅", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark"
                    });
                },
                (error) => {
                    console.error("Error Sending Message", error);
                    toast.error("Failed to send message. Please try again. ❌", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark"
                    });
                }
            );
    }


    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[17vw] lg:px-[20vw]">
            <ToastContainer />

            {/* Section title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">
                    CONTACT
                </h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    I'd love to hear from you-reach out for any opportunities or questions!
                </p>
            </div>

            {/* Contact Form */}
            <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white text-center">Connect with me <span className="ml-1">🚀</span></h3>

                <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
                    <input type="email" name="user_email" placeholder="Your Email" required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
                    <input type="text" name="name" placeholder="Your Name" required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
                    <input type="text" name="subject" placeholder="Subject" required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
                    <textarea name="message" placeholder="message" rows={4}
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500">
                    </textarea>

                    {/* Send Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition">
                        Send
                    </button>
                </form>
            </div>

        </section>
    )
}

export default Contact;