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
        <div className="container1">

            <section className="section11 " >

                <div className='personal-info1' >
                    {/* <div  >
                        
                        <img className='img-mail'  src="../../../public/man.a413a55f1b9964c1bfdf.png" alt="" />
                        <p >{personalInformation.email}</p>
                    </div> */}
                    <div className='info-P1' style={{ marginTop: "200px" }}>
                        <h2 style={{ color: "white", fontSize: "2.5rem" }}>{personalInformation.firstName} {personalInformation.lastName}</h2>
                        <h3 style={{ color: "whitesmoke" }}>{personalInformation.Designation}</h3>
                        <p style={{ color: "whitesmoke", fontSize: "1.2rem" }}> {personalInformation.about}</p>
                    </div>
                </div>

            </section>
            {/* <section className="section4">
                <h2 >Skills</h2>
                <div className='project'>
                    <Row gutter={16} >
                        {Object.keys(projects).map((key, index) => {
                            if (key.startsWith('skill')) {
                                const projectIndex = key.replace('skill', '');

                                return (

                                    <Card className='card1' title={projects[`skill${projectIndex}`]} >
                                    </Card>

                                );
                                return null;
                            }
                        })}
                    </Row>
                </div>
            </section> */}

            <section className="section12">
                <h2 >Projects</h2>
                <div className='project1' >
                    <Row gutter={16} >
                        {Object.keys(projects).map((key, index) => {
                            if (key.startsWith('projectTitle')) {
                                const projectIndex = key.replace('projectTitle', '');

                                return (
                                    <Col span={8} key={index} >
                                        <Card className='card1' style={{ width: "350px", margin: "10px 10px 10px 150px" }} title={projects[`projectTitle${projectIndex}`]} >

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

            <section className="section13">
                <h2>Experience</h2>
                <div>
                    {Object.keys(experience).map((key, index) => {
                        if (key.startsWith('experienceTitle')) {
                            const experienceIndex = key.replace('experienceTitle', '');
                            return (

                                <Timeline className="experience1">
                                    <div key={index} >
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
