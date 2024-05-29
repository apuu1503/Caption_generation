import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Card, Col, Row } from 'antd';
import { Timeline } from 'antd';
import { UserOutlined } from '@ant-design/icons';


import "./styles/template1.css";

const Template1 = () => {
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
        <div className="container">

            <section className="section1 " >

                <div className='personal-info' >
                    <div className='info-P'>
                        <h2>{personalInformation.firstName} {personalInformation.lastName}</h2>
                        <h3>{personalInformation.Designation}</h3>
                        <p>{personalInformation.about}</p>
                    </div>
                    <div className='img-mail' style={{ paddingRight: "20px" }}>
                        {/* <Avatar className='img' size={294} icon={<UserOutlined />} /> */}
                        <img src="../../../public/man.a413a55f1b9964c1bfdf.png" alt="" />
                        <p >{personalInformation.email}</p>
                    </div>

                </div>

            </section>
            <section className="section4">
                <h2 >Skills</h2>
                <div className='project'>
                    <Row gutter={16} >
                        {Object.keys(projects).map((key, index) => {
                            if (key.startsWith('skill')) {
                                const projectIndex = key.replace('skill', '');

                                return (
                                    <Col span={8} key={index}>
                                        <Card className='card' title={projects[`skill${projectIndex}`]} >
                                        </Card>
                                    </Col>
                                );
                                return null;
                            }
                        })}
                    </Row>
                </div>
            </section>

            <section className="section2">
                <h2 >Projects</h2>
                <div className='project'>
                    <Row gutter={16} >
                        {Object.keys(projects).map((key, index) => {
                            if (key.startsWith('projectTitle')) {
                                const projectIndex = key.replace('projectTitle', '');

                                return (
                                    <Col span={8} key={index}>
                                        <Card className='card' title={projects[`projectTitle${projectIndex}`]} >

                                            <p><strong>Technologies:</strong> {projects[`technologies${projectIndex}`]}</p>
                                            <p><strong>Description:</strong> {projects[`projectDescription${projectIndex}`]}</p>
                                        </Card>
                                    </Col>
                                );
                            }
                            return null;
                        })}
                    </Row>
                </div>
            </section>

            <section className="section3">
                <h2>Experience</h2>
                <div>
                    {Object.keys(experience).map((key, index) => {
                        if (key.startsWith('experienceTitle')) {
                            const experienceIndex = key.replace('experienceTitle', '');
                            return (

                                <Timeline>
                                    <div key={index} className="experience">
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
        </div >
    );
};

export default Template1;
