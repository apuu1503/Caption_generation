import React from 'react';

const ExperienceForm = ({ formData, handleChange }) => {
    return (
        <div className="space-y-12 ml-[20%] mr-[20%]" style={{ backgroundColor: '#fce6eb', margin: '50px', padding: '30px', borderRadius: "20px" }}>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900"> Past 3 Experience</h2>
                <div className="mt-10">
                    <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">

                    </label>
                    <div className="mt-2">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Experience1</h2>
                        <div>
                            <label htmlFor="Experience1">Title</label>
                            <input
                                type="text"
                                id="Experience1"
                                name="ExperienceTiltle1"
                                value={formData.experience_tiltle1}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                            />

                            <label htmlFor="Experiencedesc1"> Description</label>
                            <textarea
                                type="text"
                                id="Experiencedesc1"
                                name="Experiencedesc1"
                                rows={2}
                                value={formData.experience_Description1}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                            />
                            {/* Add other fields for project 3 here */}
                        </div>

                    </div>
                    <div className="mt-2">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Experience2</h2>
                        <div>
                            <label htmlFor="Experience2">Title</label>
                            <input
                                type="text"
                                id="Experience2"
                                name="ExperienceTiltle2"
                                value={formData.experience_tiltle2}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                            />

                            <label htmlFor="Experiencedesc2"> Description</label>
                            <textarea
                                type="text"
                                id="Experiencedesc2"
                                name="Experiencedesc2"
                                rows={2}
                                value={formData.experience_Description2}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                            />
                            {/* Add other fields for project 3 here */}
                        </div>

                    </div>
                    <div className="mt-2">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Experience3</h2>
                        <div>
                            <label htmlFor="Experience3">Title</label>
                            <input
                                type="text"
                                id="Experience3"
                                name="ExperienceTiltle3"
                                value={formData.experience_tiltle3}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                            />

                            <label htmlFor="Experiencedesc3"> Description</label>
                            <textarea
                                type="text"
                                id="Experiencedesc3"
                                name="Experiencedesc3"
                                rows={2}
                                value={formData.experience_Description3}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                            />
                            {/* Add other fields for project 3 here */}
                        </div>

                    </div>
                    {/* <div className="mt-2">

                        <textarea
                            id="experience"
                            name="experience"
                            rows={3}
                            value={formData.experience}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ExperienceForm;
