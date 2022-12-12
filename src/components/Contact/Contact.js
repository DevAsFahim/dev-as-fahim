import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rizabos', 'template_uxqy6ar', form.current, 'QAfc7MdAkJVpzI-N1')
            .then((result) => {
                console.log(result.text);
                toast.success("Thank you! I will contact you ASAP")
            }, (error) => {
                console.log(error.text);
                toast.error("problem to send email")
            });
        e.target.reset();
    };

    return (
        <div id='contact' className='contact w-3/5 m-auto my-24'>
            <div className="text-center mb-10">
                <h4 className="text-5xl font-bold mb-4">Contact Me</h4>
                <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            </div>
            <form className='py-16 px-10 form-container' ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Your Name' name="user_name" className='input w-full mb-6 py-8' />
                <input type="email" placeholder='Your Email' name="user_email" className='input w-full mb-6 py-8' />
                <textarea className='textarea w-full mb-6 h-44' placeholder='Enter Your Message' name="message" ></textarea>
                <div className='text-right'>
                    <input type="submit" value="Submit" className='btn btn-warning btn-lg btn-wide' />
                </div>
            </form>
        </div>
    );
};

export default Contact;