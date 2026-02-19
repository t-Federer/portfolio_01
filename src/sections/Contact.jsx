import { useRef, useState } from "react";
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
                <section id="contact" className="c-space my-20">
                        <div className="relative min-h-screen flex items-center justify-center flex-col">
                                {/* <img 
                                        src="src/assets/terminal.png" 
                                        alt="terminal background" 
                                        className="absolute inset-0 min-h-screen"
                                /> */}
                                <div className="contact-container">
                                        <h3 className="head-text">Let's get in touch</h3>
                                        <p className="text-lg text-white-600 mt-3">
                                                Wheter you're looking to build a new website, improve your existing one, or bring a unique project to life, I'm here to help.
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
                                                                placeholder="Hi, I'm interested in..."
                                                        />
                                                </label>
                                                <button 
                                                        className="field-btn"
                                                        type="submit"
                                                        disabled={loading}        
                                                >
                                                        {loading ? "Sending..." : "Send message"}
                                                        <img 
                                                                src="src/assets/arrow-up.png"
                                                                alt="arrow-up"
                                                                className="field-btn_arrow"
                                                        />
                                                </button>
                                        </form>
                                </div>
                        </div>
                </section>
        )
}

export default Contact