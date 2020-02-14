const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data'); // Import of the data from './data.json'

const MONGODB_URI = 'mongodb://localhost/recipeApp';

// Connection to the database "recipeApp"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to the database: "${x.connections[0].name}"`);
    // Run your code here, after you have insured that the connection was made
    return Recipe.create({
      title: 'Omelet',
      level: 'Easy Peasy',
      ingredients: ['eggs', 'onion', 'cheese', 'parsely'],
      cuisine: 'Raquel Specialities',
      dishType: 'Breakfast',
      duration: 15,
      creator: 'Raquel'
    });
  })
  .then(recipe => {
    console.log(recipe.title);
    return Recipe.insertMany(data);
  })
  .then(recipes => {
    console.log(recipes);
  })
  .catch(error => {
    console.log(error);
  });
