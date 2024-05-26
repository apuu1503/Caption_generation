// Import required modules
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

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
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to handle form submissions

app.post('/submit-form', async (req, res) => {
    try {
        const formData = req.body;

        await client.connect();

        const database = client.db('form_data');
        const collection = database.collection('Cluster0');

        const result = await collection.insertOne(formData);

        res.status(200).json({ message: 'Form data stored successfully', id: result.insertedId });
    } catch (error) {
        console.error('Error storing form data:', error);
        res.status(500).json({ message: 'An error occurred while storing form data' });
    } finally {
        await client.close();
    }
});


// Define a route to fetch data by ID
app.get('/fetch-form/:id', async (req, res) => {
    try {
        // Extract the ID parameter from the request URL
        const id = req.params.id;

        // Connect to the MongoDB database
        await client.connect();

        // Access the database and collection
        const database = client.db('form_data');
        const collection = database.collection('Cluster0');

        // Find the document by ID
        const document = await collection.findOne({ _id: new ObjectId(id) });

        // Respond with the document if found
        if (document) {
            res.status(200).json(document);
        } else {
            res.status(404).json({ message: 'Form data not found' });
        }
    } catch (error) {
        // Handle errors
        console.error('Error fetching form data:', error);
        res.status(500).json({ message: 'An error occurred while fetching form data' });
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
