
const mongoose = require('mongoose');

// Define the Person Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  // Name is required
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: [String],  
    required: true
  }
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;

