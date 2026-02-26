import { useRef, useState } from "react";
import arrowUp from '../assets/arrow-up.png';
import emailjs from "@emailjs/browser";

const Contact = () => {
        const formRef = useRef();

        const [loading, setLoading] = useState(false)
        const [form, setForm] = useState({
                name:"",
                email: "",
                message: ""
        })

        const handleChange = ({ target: {name, value} }) => {
                setForm({...form, [name]: value})
        }
        const handleSubmit = async (e) => {
                e.preventDefault();
                setLoading(true);

                try {
                         emailjs.send(
                        "service_ne6wcwi", 
                        "template_ccqqqt9", 
                        {
                                from_name: form.name,
                                to_name: "Federico",
                                from_email: form.email,
                                to_email: "talaricofederico@gmail.com",
                                message: form.message
                        }, 
                        "xJ3_T4SE9uB-AEFEK"
                        )
                        setLoading(false);
                        alert("Your message has been sent!")
                        setForm({
                                name: "",
                                email: "",
                                message: ""
                        });
                } catch (error) {
                        console.log(error);
                        alert("Something went wrong!")
                }
        }

        return (
                <section id="contact" className="c-space my-20 scroll-mt-25 sm2:scroll-mt-0 xl2:scroll-mt-0">
                                <div className="contact-container mx-auto">
                                        <h3 className="head-text">Let{"\u2019"}s get in touch</h3>
                                        <p className="grid-subtext mt-3">
                                                Whether you{"\u2019"}re looking to build a new website or bring a unique creative project to life, I{"\u2019"}m here to help.
                                        </p>
                                        <p className="grid-subtext mt-2">
                                                Reach out via the form below, or connect with me on{" "}
                                                <a 
                                                        href="https://www.linkedin.com/in/talaricofederico" 
                                                        target="_blank" 
                                                        rel="noreferrer"
                                                        className="group/link inline-flex items-center gap-1 underline hover:text-white transition-colors duration-300"
                                                >
                                                        LinkedIn
                                                        <img 
                                                                src={arrowUp} 
                                                                alt="arrow" 
                                                                className="w-2.5 h-2.5"
                                                        />
                                                </a>
                                        </p>
                                        <form  
                                                ref={formRef}
                                                onSubmit={handleSubmit}
                                                className="mt-12 flex flex-col space-y-7"
                                        >
                                                <label className="space-y-3">
                                                        <span className="field-label">Full Name</span>
                                                        <input 
                                                                type="text"
                                                                name="name"
                                                                value={form.name}
                                                                onChange={handleChange}
                                                                required
                                                                className="field-input"
                                                                placeholder="Mario Johnson"
                                                        />
                                                </label>
                                                <label className="space-y-3">
                                                        <span className="field-label">Email</span>
                                                        <input 
                                                                type="email"
                                                                name="email"
                                                                value={form.email}
                                                                onChange={handleChange}
                                                                required
                                                                className="field-input"
                                                                placeholder="marioJohnson@email.com"
                                                        />
                                                </label>
                                                <label className="space-y-3">
                                                        <span className="field-label">Your message</span>
                                                        <textarea 
                                                                name="message"
                                                                value={form.message}
                                                                onChange={handleChange}
                                                                required
                                                                rows={5}
                                                                className="field-input"
                                                                style={{ resize: "none" }}
                                                                placeholder="Hi, I'm interested in..."
                                                        />
                                                </label>
                                                <button 
                                                        className="field-btn cursor-pointer disabled:cursor-not-allowed relative overflow-hidden"
                                                        type="submit"
                                                        disabled={loading}        
                                                >
                                                        <span className="relative z-10 flex items-center gap-3">
                                                                {loading ? "Sending..." : "Send message"}
                                                                <img 
                                                                        src={arrowUp}
                                                                        alt="arrow-up"
                                                                        className="field-btn_arrow"
                                                                />
                                                        </span>
                                                </button>
                                        </form>
                                </div>
                </section>
        )
}

export default Contact
