const express = require("express");
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/auth', authRoutes); // Ensure this line is correct

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));