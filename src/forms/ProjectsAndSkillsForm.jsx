import React, { useState } from 'react';

const ProjectsAndSkillsForm = ({ formData, handleChange }) => {
    const [showProjectForm1, setShowProjectForm1] = useState(false);
    const [showProjectForm2, setShowProjectForm2] = useState(false);
    const [showProjectForm3, setShowProjectForm3] = useState(false);
    const [showSkillInput, setShowSkillInput] = useState(false); // State for showing skill input box
    const [skills, setSkills] = useState(formData.skills || '');
    const toggleProjectForm1 = () => {
        setShowProjectForm1(!showProjectForm1);
        // setShowProjectForm2(false);
        // setShowProjectForm3(false);
    };

    const toggleProjectForm2 = () => {
        setShowProjectForm2(!showProjectForm2);
        // setShowProjectForm1(false);
        // setShowProjectForm3(false);
    };

    const toggleProjectForm3 = () => {
        setShowProjectForm3(!showProjectForm3);
        // setShowProjectForm1(false);
        // setShowProjectForm2(false);
    };
    const handleSkillChange = (e) => {
        setSkills(e.target.value);
        handleChange(e);
    };

    const addSkill = () => {
        var newSkill;

        if (newSkill) {
            setSkills((prevSkills) => prevSkills + (prevSkills ? ', ' : '') + newSkill);
        }
        return (
            <input
                type="text"
                id="TechnologiesUsed1"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
            />
        )
        // You can add logic to prevent adding empty skills

    };

    const saveSkill = () => {
        setShowSkillInput(false);
        // You can add validation or other logic before saving
    };

    return (
        <div className="space-y-12 ml-[20%] mr-[20%]" style={{ backgroundColor: '#fce6eb', margin: '50px', padding: '30px', borderRadius: "20px" }}>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Projects and Skills</h2>
                <div className="mt-10">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Project1</h2>
                    <div>
                        <label htmlFor="projectTitle1">Title</label>
                        <input
                            type="text"
                            id="projectTitle1"
                            name="projectTitle1"
                            value={formData.projectTitle1}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                        <label htmlFor="TechnologiesUsed1">Technologies Used</label>
                        <input
                            type="text"
                            id="TechnologiesUsed1"
                            name="TechnologiesUsed1"
                            value={formData.TechnologiesUsed1}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                        <label htmlFor="ProjectDescription1">Project Description</label>
                        <textarea
                            type="text"
                            id="ProjectDescription1"
                            name="ProjectDescription1"
                            rows={2}
                            value={formData.ProjectDescription1}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />

                        {/* Add other fields for project 1 here */}
                    </div>

                </div>
                <div className="mt-10">

                    <h2 className="text-base font-semibold leading-7 text-gray-900">Project2</h2>
                    <div>
                        <label htmlFor="projectTitle2">Title</label>
                        <input
                            type="text"
                            id="projectTitle2"
                            name="projectTitle2"
                            value={formData.projectTitle2}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                        <label htmlFor="TechnologiesUsed2">Technologies Used</label>
                        <input
                            type="text"
                            id="TechnologiesUsed2"
                            name="TechnologiesUsed2"
                            value={formData.TechnologiesUsed2}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                        <label htmlFor="ProjectDescription2">Project Description</label>
                        <textarea
                            type="text"
                            id="ProjectDescription2"
                            name="ProjectDescription2"
                            rows={2}
                            value={formData.ProjectDescription2}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                        {/* Add other fields for project 2 here */}
                    </div>

                </div>
                <div className="mt-10">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Project3</h2>
                    <div>
                        <label htmlFor="projectTitle3">Title</label>
                        <input
                            type="text"
                            id="projectTitle3"
                            name="projectTitle3"
                            value={formData.projectTitle3}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                        <label htmlFor="TechnologiesUsed3">Technologies Used</label>
                        <input
                            type="text"
                            id="TechnologiesUsed3"
                            name="TechnologiesUsed3"
                            value={formData.TechnologiesUsed3}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                        <label htmlFor="ProjectDescription3">Project Description</label>
                        <textarea
                            type="text"
                            id="ProjectDescription3"
                            name="ProjectDescription3"
                            rows={2}
                            value={formData.ProjectDescription3}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                        {/* Add other fields for project 3 here */}
                    </div>

                </div>
                <div className="mt-6">

                    <div className="mt-2">
                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Skills</h2>
                            <input
                                type="text"
                                placeholder='  Add skill1'
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <input
                                type="text"
                                placeholder='  Add skill2'
                                className="block mt-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <input
                                type="text"
                                placeholder='  Add skill3'
                                className="block mt-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <input
                                type="text"
                                placeholder='  Add skill4'
                                className="block mt-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <input
                                type="text"
                                placeholder='  Add skill5'
                                className="block mt-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsAndSkillsForm;
