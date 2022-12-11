import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about_container w-full lg:w-[1070px] m-auto'>
            <div className="text-center mb-10 w-1/2 m-auto">
                <h4 className="text-5xl font-bold mb-4">About Me</h4>
                <p>Here you will find more information about me and what I do.</p>
            </div>

            <div className="about mb-28">
                <div className="about_content">
                    <p className='mb-4'>Hello! My name is Fahim and I enjoy creating things that live on the internet. My interest in web development started back in 2020. I was inspired by an online video where a man was talking about how internet works, I felt it awesome and decided to learn web development.</p>

                    <p className='mb-4'>Fast-forward to today, and I've had the privilege of intern at an <strong className='text-warning'>agency, teaching students and working as a freelancer</strong>. As a web developer in a start-up company my main focus these days is building accessible, inclusive products and digital experiences at <strong className="text-warning">Xen Startup</strong> for a variety of clients.</p>

                    <p>I'm open to <strong className='text-warning'>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong className="text-warning">contact</strong> me.</p>
                    <div className='mt-8 text-center'>
                        <a href='#contact' className="btn btn-wide font-bold btn-warning btn-outline">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;