import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Template1() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend using the form ID from the URL params
    const fetchFormData = async () => {
      const formId = window.location.pathname.split("/").pop(); 
      
      // Extract form ID from URL
      try {
        const response = await axios.get(`http://localhost:3000/fetch-form/${formId}`);
        setFormData(response.data); // Set form data in state
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchFormData(); // Call the fetchFormData function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  if (!formData) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }

  return (
    <div>
      <h1>Template 1</h1>
      {/* Render form data here */}
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
