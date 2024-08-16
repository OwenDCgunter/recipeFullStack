require('dotenv').config({ path: './EV.env' });
console.log(process.env.FIREBASE_PROJECT_ID); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');  // Required for serving static files
const bodyParser = require('body-parser');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection
const mongoUri = 'mongodb+srv://owendcgunter:jwqd4aGahrPjVKCX@cluster0.jcb6n3m.mongodb.net/cooking-website?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'Frontend/cook')));

// API routes
app.use('/api/recipes', recipeRoutes); // Adjusted the base URL

// Serve the frontend for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend/cook')); 
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Global error handler:', err.stack || err);
    console.error('Full error object:', err);

    res.status(500).json({
        message: 'Something broke!',
        error: err.message,
        stack: err.stack    // Optionally include the stack trace
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
