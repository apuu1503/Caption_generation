import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import axios from 'axios';

const Templete2 = () => {
    // Use useParams hook to extract the ID from the URL
    const { id } = useParams();

    useEffect(() => {
        // Fetch data by ID
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/fetch-form/${id}`);
                const formData = response.data.formData;
                console.log(formData);
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        };

        fetchData();
    }, [id]); // Include id in the dependency array so useEffect runs when id changes

    return (
        <div>
            <h1>Templete1</h1>
        </div>
    );
};

export default Templete2;
