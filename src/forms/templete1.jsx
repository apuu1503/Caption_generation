import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

function Templete1() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: ''
    });
    // const history = useHistory();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/submit-form', formData);
            console.log('Response:', response.data);

            // Storing the ID in sessionStorage with a key
            sessionStorage.setItem('formId', response.data.id);

            alert('Form data submitted successfully!');
            // Clear form fields after successful submission
            setFormData({ name: '', mobile: '' });

            // Redirect to the specified path with the form ID
            // history.push(`/templete1/${response.data.id}`);

        } catch (error) {
            console.error('Error submitting form data:', error);
            alert('An error occurred while submitting form data. Please try again.');
        }
    };
    // console.log(sessionStorage.getItem(formId))

    return (
        <div>
            <h2>Submit Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Templete1;
/*
img
first name
last name
designation
about ypurself
education : dropdown : pg doc  degree ssc hsc max 
projects only 3 last 3
experience : company 1 company 2 company 3  last 3 experience
skill set
contact info
*/

