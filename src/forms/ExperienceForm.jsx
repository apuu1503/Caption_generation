import React, { useState } from 'react';

const ExperienceForm = ({ formData = {}, handleChange }) => {
    // State for managing experiences
    const [experiences, setExperiences] = useState(formData.experiences || []);

    // Function to handle experience input change
    const handleExperienceChange = (e, index, field) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index][field] = e.target.value;
        setExperiences(updatedExperiences);
        handleChange(e);
    };

    // Function to add a new experience
    const addExperience = () => {
        setExperiences([...experiences, { title: '', description: '', startDate: '', endDate: '' }]);
    };

    return (
        <div className="space-y-12 ml-[20%] mr-[20%]" style={{ backgroundColor: '#fce6eb', margin: '50px', padding: '30px', borderRadius: "20px" }}>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Past 3 Experiences</h2>
                {/* Rendering experiences */}
                <div className="mt-10">
                    {experiences.map((experience, index) => (
                        <div key={index} className="mt-6">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Experience {index + 1}</h2>
                            <>
                                <label htmlFor={`experienceTitle${index}`}>Title</label>
                                <input
                                    type="text"
                                    id={`experienceTitle${index}`}
                                    name={`experienceTitle${index}`}
                                    value={experience.title}
                                    onChange={(e) => handleExperienceChange(e, index, 'title')}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <label htmlFor={`experienceDesc${index}`}>Description</label>
                                <textarea
                                    type="text"
                                    id={`experienceDesc${index}`}
                                    name={`experienceDesc${index}`}
                                    rows={2}
                                    value={experience.description}
                                    onChange={(e) => handleExperienceChange(e, index, 'description')}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {/* <label htmlFor={`experienceStartDate${index}`}>Start Date</label> */}
                                <div className="flex space-x-4">
                                    <div>
                                        <label htmlFor={`experienceStartDate${index}`}>Start Date</label>
                                        <input
                                            type="date"
                                            id={`experienceStartDate${index}`}
                                            name={`experienceStartDate${index}`}
                                            value={experience.startDate}
                                            onChange={(e) => handleExperienceChange(e, index, 'startDate')}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`experienceEndDate${index}`}>End Date</label>
                                        <input
                                            type="date"
                                            id={`experienceEndDate${index}`}
                                            name={`experienceEndDate${index}`}
                                            value={experience.endDate}
                                            onChange={(e) => handleExperienceChange(e, index, 'endDate')}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                            </>
                        </div>
                    ))}
                    {/* Button to add a new experience */}
                    <div className="mt-6">
                        <button type="button" onClick={addExperience}>Add Experience</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceForm;
