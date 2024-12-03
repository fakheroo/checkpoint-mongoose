// server.js
require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/person');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Save a new person
const savePerson = async () => {
  const newPerson = new Person({
    name: 'omar barhoumi',
    age: 21,
    favoriteFoods: ['ma9loub', 'crêpes']
  });

  try {
    const savedPerson = await newPerson.save(); // Use async/await
    console.log('Person saved:', savedPerson);
  } catch (err) {
    console.error('Error saving person:', err);
  }
};

// Delete person by ID
const deletePersonById = async (id) => {
  try {
    // Ensure the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid ID');
      return;
    }

    const deletedPerson = await Person.findByIdAndDelete(id); // Use findByIdAndDelete
    console.log('Deleted person:', deletedPerson);
  } catch (err) {
    console.error('Error deleting person:', err);
  }
};

// Delete people by name
const deletePeopleByName = async (name) => {
  try {
    const result = await Person.deleteMany({ name }); // Use deleteMany
    console.log('Number of people removed:', result.deletedCount);
  } catch (err) {
    console.error('Error removing people:', err);
  }
};

// Find a person by ID
const searchById = async (id) => {
  try {
    // Ensure the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid ID');
      return;
    }

    const person = await Person.findById(id);
    console.log('Person by ID:', person);
  } catch (err) {
    console.error('Error finding person by ID:', err);
  }
};

// Call functions
//savePerson();
//deletePersonById('60d7f764b45cf014f2d7b4e2'); 
//deletePeopleByName('omar barhoumi');
searchById('67472e9b6bf19f169d582dc9'); 
