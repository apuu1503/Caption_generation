import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Card, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Header from './components/Header';
import "./styles/homePage.scss";
const Template1 = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/fetch-form/${id}`);
                setFormData(response.data);
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

    return (
        <div className="container">

            <section className="section" >
                <h1 >Personal Information</h1>
                <div>
                    <div >
                        <p style={{ fontSize: '20px' }}>{personalInformation.firstName} {personalInformation.lastName}</p>
                        <p style={{ fontSize: '50px', fontWeight: '500' }}>{personalInformation.designation}</p>
                        <p>{personalInformation.about}</p>
                    </div>
                    {/* <Avatar size={294} icon={<UserOutlined />} style={{ marginRight: '260px' }} /> */}
                </div>
                <p style={{ color: 'white', marginLeft: '1500px' }}>{personalInformation.email}</p>
            </section>

            <section className="section" style={{ marginLeft: '20px' }}>
                <h2 style={{ fontWeight: 700, fontSize: '30px', textAlign: 'center', }}>Projects</h2>
                <Row gutter={16}>
                    {Object.keys(projects).map((key, index) => {
                        if (key.startsWith('projectTitle')) {
                            const projectIndex = key.replace('projectTitle', '');
                            return (
                                <Col span={8} key={index}>
                                    <Card title={projects[`projectTitle${projectIndex}`]} style={{ width: '200px' }}>
                                        <p><strong>Technologies:</strong> {projects[`technologies${projectIndex}`]}</p>
                                        <p><strong>Description:</strong> {projects[`projectDescription${projectIndex}`]}</p>
                                    </Card>
                                </Col>
                            );
                        }
                        return null;
                    })}
                </Row>
            </section>

            <section className="section">
                <h2>Experience</h2>
                {Object.keys(experience).map((key, index) => {
                    if (key.startsWith('experienceTitle')) {
                        const experienceIndex = key.replace('experienceTitle', '');
                        return (
                            <div key={index} className="experience">
                                <h3>{experience[`experienceTitle${experienceIndex}`]}</h3>
                                <p><strong>Description:</strong> {experience[`experienceDesc${experienceIndex}`]}</p>
                                <p><strong>Start Date:</strong> {experience[`experienceStartDate${experienceIndex}`]}</p>
                                <p><strong>End Date:</strong> {experience[`experienceEndDate${experienceIndex}`]}</p>
                            </div>
                        );
                    }
                    return null;
                })}
            </section>
        </div >
    );
};

export default Template1;
