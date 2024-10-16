const mongoose = require('mongoose');
const User = require('./models/userModel'); // Adjust path if necessary

// Replace with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://aryapathak:hXsqEZd4rp7k3BV5>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
  return User.deleteMany(); // Clear existing users
})
.then(() => {
  const users = [
    { name: "Alice Smith", email: "alice@example.com", publicKey: "publicKey1", privateKey: "privateKey1" },
    { name: "Bob Johnson", email: "bob@example.com", publicKey: "publicKey2", privateKey: "privateKey2" },
    { name: "Charlie Brown", email: "charlie@example.com", publicKey: "publicKey3", privateKey: "privateKey3" },
    { name: "Diana Prince", email: "diana@example.com", publicKey: "publicKey4", privateKey: "privateKey4" },
    { name: "Ethan Hunt", email: "ethan@example.com", publicKey: "publicKey5", privateKey: "privateKey5" },
    { name: "Fiona Gallagher", email: "fiona@example.com", publicKey: "publicKey6", privateKey: "privateKey6" },
    { name: "George Costanza", email: "george@example.com", publicKey: "publicKey7", privateKey: "privateKey7" },
    { name: "Hannah Baker", email: "hannah@example.com", publicKey: "publicKey8", privateKey: "privateKey8" },
    { name: "Ivy League", email: "ivy@example.com", publicKey: "publicKey9", privateKey: "privateKey9" },
    { name: "Jack Sparrow", email: "jack@example.com", publicKey: "publicKey10", privateKey: "privateKey10" },
    { name: "Katherine Pierce", email: "katherine@example.com", publicKey: "publicKey11", privateKey: "privateKey11" },
    { name: "Liam Neeson", email: "liam@example.com", publicKey: "publicKey12", privateKey: "privateKey12" },
    { name: "Monica Geller", email: "monica@example.com", publicKey: "publicKey13", privateKey: "privateKey13" },
    { name: "Nathan Drake", email: "nathan@example.com", publicKey: "publicKey14", privateKey: "privateKey14" },
    { name: "Olivia Pope", email: "olivia@example.com", publicKey: "publicKey15", privateKey: "privateKey15" },
    { name: "Peter Parker", email: "peter@example.com", publicKey: "publicKey16", privateKey: "privateKey16" },
    { name: "Quinn Fabray", email: "quinn@example.com", publicKey: "publicKey17", privateKey: "privateKey17" },
    { name: "Ross Geller", email: "ross@example.com", publicKey: "publicKey18", privateKey: "privateKey18" },
    { name: "Steve Rogers", email: "steve@example.com", publicKey: "publicKey19", privateKey: "privateKey19" },
    { name: "Tina Belcher", email: "tina@example.com", publicKey: "publicKey20", privateKey: "privateKey20" },
  ];
  
  return User.insertMany(users); // Insert the users
})
.then(() => {
  console.log('Users seeded successfully');
  mongoose.connection.close(); // Close the connection
})
.catch((error) => {
  console.error('Error seeding users:', error);
  mongoose.connection.close();
});
