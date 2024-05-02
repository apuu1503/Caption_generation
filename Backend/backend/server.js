// Import required modules
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
// MongoDB connection string
const uri = "mongodb+srv://suryawanshihimanshu563:9zqZ2JWJoqswcyn6@cluster0.uv2l52a.mongodb.net/my_database?retryWrites=true&w=majority";

// Create a MongoClient
const client = new MongoClient(uri);

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with the origin of your frontend application
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to handle form submissions
app.post('/submit-form', async (req, res) => {
    try {
        // Extract form data from the request body
        const formData = req.body;

        // Generate a unique ID for the document
        const uniqueId = new Date().getTime().toString(); // Example: using current timestamp as a unique ID

        // Connect to the MongoDB database
        await client.connect();

        // Access the database and collection
        const database = client.db('form_data'); // Replace 'my_database' with your actual database name
        const collection = database.collection('Cluster0'); // Replace 'forms' with your actual collection name

        // Construct the document with the unique ID and form data
        const document = {
            _id: uniqueId, // Using the unique ID as the document ID
            formData, // Storing the entire form data
            // Add more fields or modify the structure as needed
        };

        // Insert the document into the collection
        await collection.insertOne(document);

        // Respond with a success message
        res.status(200).json({ message: 'Form data stored successfully', id: uniqueId });
    } catch (error) {
        // Handle errors
        console.error('Error storing form data:', error);
        res.status(500).json({ message: 'An error occurred while storing form data' });
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
