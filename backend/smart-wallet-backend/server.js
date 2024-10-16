const express = require("express");
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes'); // Import routes

const app = express();
const PORT = 3000;


app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
console.log('auth routes loaded')
app.use('/api/wallet', require('./routes/walletRoutes'));
app.use('/api/points', require('./routes/pointsRoutes'));
app.use('/api/transaction', require('./routes/transactionRoutes'));

console.log("App is listening");
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
