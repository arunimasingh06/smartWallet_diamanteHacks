const DiamSdk = require('diamnet-sdk');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// const registerUser = async (req, res) => {
//   try {
//     // Hash the user's password
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);

//     // Generate Diamante wallet
//     const pair = DiamSdk.Keypair.random();

//     // Create a new user
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPassword,
//       publicKey: pair.publicKey(),
//       privateKey: pair.secret(), // Secure this appropriately
//     });

//     // Save user to database
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error registering user' });
//   }
// };
const registerUser = async (req, res) => {
  try {
    // Hash the user's password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Generate Diamante wallet
    const pair = DiamSdk.Keypair.random();

    // Log the generated keys (for testing purposes)
    console.log('Public Key:', pair.publicKey());
    console.log('Private Key:', pair.secret());

    // Simulate successful registration without saving to database
    return res.status(201).json({ 
      message: 'User registered successfully!',
      publicKey: pair.publicKey(),
      privateKey: pair.secret() // Only for testing; remove in production
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};




const loginUser = async (req, res) => {
  try {
    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    
    // Check if user exists and if the password matches
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      // Successful login
      res.status(200).json({ message: 'Login successful!', userId: user._id, publicKey: user.publicKey });
    } else {
      // Invalid credentials
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
};

module.exports = { registerUser, loginUser };


