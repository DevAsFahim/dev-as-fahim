import React from 'react';
import auto from '../../assets/images/auto.png'
import meta from '../../assets/images/meta.png'
import academy from '../../assets/images/academy.png'
import './Projects.css'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id='works' className='project w-full lg:w-[1070px] m-auto'>
            <div className="text-center mb-10 w-1/2 m-auto">
                <h4 className="text-5xl font-bold mb-4">Some Things I've Built</h4>
                <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>
            <div className="project_cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="project_cart">
                    <img src={auto} alt="" />
                    <h3 className="text-3xl font-bold text-slate-100">Auto Plus</h3>
                    <p className="text-2xl">Car reselling website</p>
                    <div className="project_btn">
                        <a target='_blank' rel='noreferrer' href="https://auto-plus-fc1d8.web.app/"><button>View Project</button></a>
                        <Link to='/project/1'><button>View Details</button></Link>
                    </div>
                </div>
                <div className="project_cart">
                    <img src={meta} alt="" />
                    <h3 className="text-3xl font-bold text-slate-100">Meta Zone</h3>
                    <p className="text-2xl">Photographer Portfolio</p>
                    <div className="project_btn">
                        <a target='_blank' rel='noreferrer' href="https://meta-zone.web.app/"><button>View Project</button></a>
                        <Link to='/project/2'><button>View Details</button></Link>
                    </div>
                </div>
                <div className="project_cart">
                    <img src={academy} alt="" />
                    <h3 className="text-3xl font-bold text-slate-100">EAcademy</h3>
                    <p className="text-2xl">Online Academy</p>
                    <div className="project_btn">
                        <a target='_blank' rel='noreferrer' href="https://e-academy-e31d2.web.app/"><button>View Project</button></a>
                        <Link to='/project/3'><button>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;