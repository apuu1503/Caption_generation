import React, { useState } from 'react';
import axios from 'axios';
import { Tabs } from 'antd';
import PersonalInformationForm from './PersonalInformationForm';
import ProjectsAndSkillsForm from './ProjectsAndSkillsForm';
import ExperienceForm from './ExperienceForm';

const { TabPane } = Tabs;

function Form() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        personalInformation: {},
        projects: {}, // Initialize as an empty array
        experience: {},
    });

    const handleChange = (e, section) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [name]: value,
            },
        }));
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async () => {
        try {
            // Format projects with unique IDs
            // Send formatted data to the backend
            const response = await axios.post('http://localhost:3000/submit-form', {
                personalInformation: formData.personalInformation,
                projects: formData.projects,
                experience: formData.experience,
            });

            console.log('Form data submitted:', response.data);
            localStorage.setItem('formDataId', response.data.id);
            setFormData({
                personalInformation: {},
                projects: [], // Reset projects to an empty array
                experience: {},
            });
            window.location.href = `/choosetemplate/${response.data.id}`;
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <form>
            <Tabs
                activeKey={currentStep.toString()}
                onChange={(key) => setCurrentStep(parseInt(key))}
                tabBarStyle={{ padding: '20px', margin: '0 auto', maxWidth: '800px' }}
            >
                <TabPane tab="Personal Information" key="1">
                    <PersonalInformationForm
                        formData={formData.personalInformation}
                        handleChange={(e) => handleChange(e, 'personalInformation')}
                    />
                </TabPane>
                <TabPane tab="Projects & Skills" key="2">
                    <ProjectsAndSkillsForm
                        formData={formData.projects}
                        handleChange={(e) => handleChange(e, 'projects')}
                    />
                </TabPane>
                <TabPane tab="Experience" key="3">
                    <ExperienceForm
                        formData={formData.experience}
                        handleChange={(e) => handleChange(e, 'experience')}
                    />
                </TabPane>
            </Tabs>
            <div className="mt-6 flex items-center justify-between">
                {currentStep > 1 && (
                    <button type="button" onClick={handlePrevStep} className="rounded-md bg-indigo-600 px-8 py-2 mb-12 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                        Previous
                    </button>
                )}
                {currentStep < 3 && (
                    <button type="button" onClick={handleNextStep} className="rounded-md bg-indigo-600 px-8 py-2 mb-12 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500" style={{ backgroundColor: "#ff4271" }}>
                        Next
                    </button>
                )}
                {currentStep === 3 && (
                    <button type="button" onClick={handleSubmit} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500" style={{ backgroundColor: "#ff4271" }}>
                        Submit
                    </button>
                )}
            </div>
        </form>
    );
}

export default Form;
