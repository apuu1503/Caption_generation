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
            <section className="section15" >

                <div className='about13' >

                    <div className='aboutinfo1'>
                        <h1>About</h1>
                        <h2>Name: {personalInformation.firstName} {personalInformation.lastName}</h2>
                        <h3>Designation: {personalInformation.Designation}</h3>
                        <Row gutter={15} >
                            <h3 className='skillhead'>Skills: </h3>
                            {Object.keys(projects).map((key, index) => {
                                if (key.startsWith('skill')) {
                                    const projectIndex = key.replace('skill', '');

                                    return (
                                        <div className='skill1'>

                                            <h2 className='skills'>{projects[`skill${projectIndex}`]} |</h2>

                                        </div>


                                    );
                                    return null;
                                }
                            })}
                        </Row>
                        <p>About: {personalInformation.about}</p>
                        <p>MAil ID: {personalInformation.email}</p>
                        <p>Contact: {personalInformation.contact}</p>
                        <p>Address: {personalInformation.city}</p>

                    </div>
                    <div className='img-mail1' >
                        {/* <Avatar className='img' size={294} icon={<UserOutlined />} /> */}
                        <img src="../../../public/boy1.jpg" alt="" />

                    </div>

                </div>


            </section>
            <div className='projexskill1'>
                <div>
                    <section className="section12">
                        <h2 >Projects</h2>
                        <div className='project1' >
                            <Row  >
                                {Object.keys(projects).map((key, index) => {
                                    if (key.startsWith('projectTitle')) {
                                        const projectIndex = key.replace('projectTitle', '');
                                        return (
                                            <Row key={index} >
                                                <Card className='card1' style={{ width: "700px" }} title={projects[`projectTitle${projectIndex}`]} >
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

            </div>

        </div >
    );
};

export default Template1;
