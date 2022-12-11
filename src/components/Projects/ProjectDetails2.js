import React from 'react';
import meta1 from '../../assets/images/meta1.png'
import meta2 from '../../assets/images/meta2.png'
import meta3 from '../../assets/images/meta3.png'

const ProjectDetails2 = () => {
    return (
        <div className='product_details  w-full lg:w-[1070px] m-auto mb-24'>
            <div className="product-details_heading flex justify-between items-center">
                <div className="left">
                    <h2 className="title text-5xl font-bold text-warning">Meta Zone</h2>
                    <h4 className="subtitle text-3xl">Photographer Portfolio</h4>
                </div>
                <div className="project_btn-details">
                    <a target='_blank' rel='noreferrer' href="https://meta-zone.web.app/"><button>View Project</button></a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/DevAsFahim/meta-zone-client'><button>Code</button></a>
                </div>
            </div>

            <div className="project_image-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                <img src={meta1} alt="" />
                <img src={meta2} alt="" />
                <img src={meta3} alt="" />
            </div>

            <div className="features px-5 py-12">
                <h1 className="text-4xl font-bold mb-4">Features</h1>
                <ul className='list-disc ml-7'>
                    <li className='mb-4'>Meta Zone is a car reselling website, and has a user role as admin or seller or user.</li>
                    <li className='mb-4'>Admin can see all users and sellers and also can delete them from the database or verify
                        any seller.</li>
                    <li className='mb-4'>Sellers can add a car, delete his product or advertise.</li>
                    <li className='mb-4'>Technologies are: React, MongoDb, Express, Tailwind css, Firebase, Node, REST API etc.</li>
                    <li className='mb-4'>Blog section have blogs from database</li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectDetails2;