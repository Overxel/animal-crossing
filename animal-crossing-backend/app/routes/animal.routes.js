module.exports = (app) => {
    const animals = require('../controllers/animal.controller.js');

    // Create a new animal
    app.post('/animals', animals.create);

    // Retrieve all animals
    app.get('/animals', animals.findAll);

    // Retrieve a single animal with animalId
    app.get('/animals/:animalId', animals.findOne);

    // Update a animal with animalId
    app.put('/animals/:animalId', animals.update);

    // Delete a animal with animalId
    app.delete('/animals/:animalId', animals.delete);
}