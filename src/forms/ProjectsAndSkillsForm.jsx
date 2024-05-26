import React, { useState } from 'react';
const ProjectsAndSkillsForm = ({ formData = {}, handleChange }) => {
    // State for managing projects
    const [projects, setProjects] = useState(formData.projects || []);

    // Function to handle project input change
    const handleExperienceChange = (e, index, field) => {
        const updatedProjects = [...projects];
        updatedProjects[index][field] = e.target.value;
        setProjects(updatedProjects);
        handleChange(e);
    };

    // Function to add a new project
    const addProject = () => {
        setProjects([...projects, { title: '', technologies: '', description: '', isOpen: true }]);
    };

    // Function to toggle project details
    const toggleProject = (index) => {
        const updatedProjects = [...projects];
        updatedProjects[index].isOpen = !updatedProjects[index].isOpen;
        setProjects(updatedProjects);
    };

    // State for managing skills
    const [skills, setSkills] = useState(formData.skills || []);

    // Function to handle project input change


    // Function to handle skill input change
    const handleSkillChange = (e, index) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = e.target.value; // Update the skill at the specified index
        setSkills(updatedSkills);
        handleChange(e); // Trigger parent handleChange to update formData
    };

    // Function to add a new project

    // Function to add a new skill
    const addSkill = () => {
        setSkills([...skills, '']);
    };

    // Function to toggle project details


    return (
        <div className="space-y-12 ml-[20%] mr-[20%]" style={{ backgroundColor: '#fce6eb', margin: '50px', padding: '30px', borderRadius: "20px" }}>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Projects and Skills</h2>
                {/* Rendering projects */}
                <div>
                    {/* Rendering projects */}
                    {projects.map((project, index) => (
                        <div key={index}>
                            <h2>Project {index + 1}</h2>
                            <button onClick={() => toggleProject(index)}>
                                {project.isOpen ? 'Hide Details' : 'Show Details'}
                            </button>
                            {project.isOpen && (
                                <div>
                                    <label htmlFor={`projectTitle${index}`}>Title</label>
                                    <input
                                        type="text"
                                        id={`projectTitle${index}`}
                                        name={`projectTitle${index}`}
                                        value={project.projectTitle}
                                        onChange={(e) => handleExperienceChange(e, index, 'projectTitle')}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <label htmlFor={`technologies${index}`}>Technologies Used</label>
                                    <input
                                        type="text"
                                        id={`technologies${index}`}
                                        name={`technologies${index}`}
                                        value={project.technologies}
                                        onChange={(e) => handleExperienceChange(e, index, 'technologies')}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <label htmlFor={`projectDescription${index}`}>Project Description</label>
                                    <textarea
                                        type="text"
                                        id={`projectDescription${index}`}
                                        name={`projectDescription${index}`}
                                        value={project.description}

                                        // value={project.technologies}
                                        onChange={(e) => handleExperienceChange(e, index, 'description')}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    // id={`projectDescription${index}`}
                                    // onChange={(e) => handleProjectChange(e, index, 'description')}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                    {/* Button to add a new project */}
                    {/* <button onClick={addProject}>Add Project</button> */}
                </div>
                {/* Button to add a new project */}
                <div className="mt-6">
                    <button type="button" onClick={addProject}>Add Project</button>
                </div>
                {/* Rendering skills */}
                <div className="mt-10">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Skills</h2>
                    {/* Rendering individual skill items */}
                    {skills.map((skill, index) => (
                        <div key={index} className="mt-2">
                            <input
                                type="text"
                                placeholder={`Skill ${index + 1}`}
                                name={`skill${index + 1}`}
                                value={skill}
                                onChange={(e) => handleSkillChange(e, index)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    ))}
                    {/* Conditional rendering of skill input */}
                    <div className="mt-2">
                        <button type="button" onClick={addSkill}>Add Skill</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectsAndSkillsForm;