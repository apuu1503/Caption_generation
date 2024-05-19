import React, { useState } from 'react';
import axios from 'axios';
import PersonalInformationForm from './PersonalInformationForm';
import ProjectsAndSkillsForm from './ProjectsAndSkillsForm';
import ExperienceForm from './ExperienceForm';

function Form() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Your form data
        // firstName: '',
        // lastName: '',
        // email: '',
        // country: '',
        // streetAddress: '',
        // city: '',
        // region: '',
        // postalCode: '',
        // about: '',
        // image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData); // Log the updated form data
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/submit-form', formData);
            console.log(response)
            sessionStorage.setItem('formId', response.data.id);
            // alert('Form data submitted successfully!');
            setFormData({});
            window.location.href = `/template1/${response.data.id}`; // Redirect to '/template' after successful form submission
        } catch (error) {
            console.error('Error submitting form data:', error);
            alert('An error occurred while submitting form data. Please try again.');
        }
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
                <PersonalInformationForm
                    formData={formData}
                    handleChange={handleChange}
                // style={{ "background-color": "black" }}
                />
            )}
            {currentStep == 2 && (
                <ProjectsAndSkillsForm
                    formData={formData}
                    handleChange={handleChange}
                />
            )}
            {currentStep === 3 && (
                <ExperienceForm
                    formData={formData}
                    handleChange={handleChange}
                />
            )}
            <div className="mt-6 flex items-center justify-between">
                {currentStep > 1 && (
                    <button type="button" onClick={handlePrevStep} className="rounded-md bg-indigo-600 px-8 py-2 mb-12 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"  >
                        Previous
                    </button>
                )}
                {currentStep < 3 && (
                    <button type="button" onClick={handleNextStep} className="rounded-md bg-indigo-600 px-8 py-2 mb-12 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500" style={{ backgroundColor: "#ff4271" }}>
                        Next
                    </button>
                )}
                {currentStep === 3 && (
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500" style={{ backgroundColor: "#ff4271" }}>
                        Submit
                    </button>
                )}
            </div>
        </form>
    );
}

export default Form;
