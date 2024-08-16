require('dotenv').config({ path: './EV.env' });
console.log(process.env.FIREBASE_PROJECT_ID); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const port = process.env.PORT || 5000;

const mongoUri = 'mongodb+srv://owendcgunter:jwqd4aGahrPjVKCX@cluster0.jcb6n3m.mongodb.net/cooking-website?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.use('/api/recipes', recipeRoutes); // Adjusted the base URL

// Error handling middleware
app.use((err, req, res, next) => {
    // Log the error stack and full error object for detailed inspection
    console.error('Global error handler:', err.stack || err);
    console.error('Full error object:', err);

    // Send a response with the error message (more detailed for debugging)
    res.status(500).json({
        message: 'Something broke!',
        error: err.message, // Include the error message
        stack: err.stack    // Optionally include the stack trace
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
