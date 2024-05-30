import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Card, Col, Row } from 'antd';
import { Timeline } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import "./styles/template3.css";
const Template3 = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/fetch-form/${id}`);
                setFormData(response.data);
                // console.log(formData)
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!formData) {
        return <div>Loading...</div>;
    }

    const { personalInformation, projects, experience } = formData;
    console.log(personalInformation)
    console.log(projects)
    console.log(experience)

    return (
        <div className="container3">

            <section className="section31" >

                <div className='personal-info3' >
                    <div className='info-P3'>
                        <h2>I am {personalInformation.firstName} {personalInformation.lastName}</h2>
                        <h3>{personalInformation.Designation}</h3>
                        <p>{personalInformation.about}</p>
                    </div>
                    <div className='img-mail3' >
                        {/* <Avatar className='img' size={294} icon={<UserOutlined />} /> */}
                        <img src="../../../public/screenshot.png" alt="" />
                        <p >{personalInformation.email}</p>
                    </div>

                </div>

            </section>
            <section className="section34">
                <h2 >Skills</h2>
                <div className='skill3'>
                    <Row gutter={16} >
                        {Object.keys(projects).map((key, index) => {
                            if (key.startsWith('skill')) {
                                const projectIndex = key.replace('skill', '');

                                return (
                                    <Col span={8} key={index}>
                                        <h2 className='skills3'>{projects[`skill${projectIndex}`]}
                                        </h2>
                                    </Col>
                                );
                                return null;
                            }
                        })}
                    </Row>
                </div>
            </section>
            <div className='projectsandskill3'>
                <img className='projimg3' src="../../../public/service.jpg" alt="" />
                <section className="section32">
                    <h2 >My Recent work</h2>
                    <div className='project3'>
                        <Row gutter={16} >
                            {Object.keys(projects).map((key, index) => {
                                if (key.startsWith('projectTitle')) {
                                    const projectIndex = key.replace('projectTitle', '');

                                    return (
                                        <Row key={index}>
                                            <Card
                                                className='card3'
                                                title={projects[`projectTitle${projectIndex}`]}

                                            >
                                                <p><strong>Technologies:</strong> {projects[`technologies${projectIndex}`]}</p>
                                                <p><strong>Description:</strong> {projects[`projectDescription${projectIndex}`]}</p>
                                            </Card>
                                        </Row>
                                    );
                                }
                                return null;
                            })}
                        </Row>
                    </div>
                </section>



            </div>


            <div className='experience3'>

                <section className="section33">

                    <h2>Experience</h2>
                    <div>
                        {Object.keys(experience).map((key, index) => {
                            if (key.startsWith('experienceTitle')) {
                                const experienceIndex = key.replace('experienceTitle', '');
                                return (

                                    <Timeline>
                                        <div key={index} className="experience3">
                                            <h3>{experience[`experienceTitle${experienceIndex}`]}</h3>
                                            <p><strong>Description:</strong> {experience[`experienceDesc${experienceIndex}`]}</p>
                                            <p><strong>Start Date:</strong> {experience[`experienceStartDate${experienceIndex}`]}</p>
                                            <p><strong>End Date:</strong> {experience[`experienceEndDate${experienceIndex}`]}</p>
                                        </div>
                                    </Timeline>

                                );
                            }
                            return null;
                        })}
                    </div>
                </section>
                <img src="../../../public/coding.png" alt="" />
            </div >
            <section className="section35" >

                <div className='about3' >
                    <h1>About</h1>
                    <div >
                        <h2>Name: {personalInformation.firstName} {personalInformation.lastName}</h2>
                        <h3>Designation: {personalInformation.Designation}</h3>
                        {/* <p>{personalInformation.about}</p> */}
                        <p>MAil ID: {personalInformation.email}</p>
                        <p>Contact: {personalInformation.contact}</p>
                        <p>Address: {personalInformation.city}</p>
                    </div>
                    <div className='img-mail3' >
                        {/* <Avatar className='img' size={294} icon={<UserOutlined />} /> */}
                        {/* <img src="../../../public/screenshot.png" alt="" /> */}

                    </div>

                </div>

            </section>
        </div>
    );
};

export default Template3;
