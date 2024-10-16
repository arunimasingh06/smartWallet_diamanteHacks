const express = require("express")
const app = express();
const PORT =  3000;
const connectDB =  require('./config/database')


app.use(express.json());


//routes
app.use('/api/auth' , require('./routes/authRoutes'))
app.use('/api/wallet' , require('./routes/walletRoutes'))
app.use('/apo/points' , require('./routes/pointsRoutes'));
app.use('/api/transaction' , require('./routes/transactionRoutes'))


console.log("app is listening")
app.listen(PORT , console.log(`Server is listening on port ${PORT}`))