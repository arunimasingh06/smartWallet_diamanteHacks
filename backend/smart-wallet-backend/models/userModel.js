const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  publicKey: { type: String, required: true }, // Public key from Diamante
  privateKey: { type: String, required: true } // Private key from Diamante (secure appropriately)
});

// Create and export the user model
module.exports = mongoose.model('User', userSchema);



