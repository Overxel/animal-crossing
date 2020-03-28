const Animal = require('../models/animal.model.js');
const Weather = require('../enums/weather.enum.js');

// Create and Save a new animal
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "animal name can not be empty"
        });
    }

    // Create a animal
    const animal = new Animal({
        name: req.body.name || "Untitled animal", 
        price: req.body.price,
        type: req.body.type,
        habitat: req.body.habitat,
        schedule: req.body.schedule,
        weather: req.body.weather || Weather.ALWAYS,
        img: req.body.img
    });

    // Save animal in the database
    animal.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the animal."
        });
    });
};

// Retrieve and return all animals from the database.
exports.findAll = (req, res) => {
    Animal.find()
    .then(animals => {
        res.send(animals);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving animals."
        });
    });
};

// Find a single animal with a animalId
exports.findOne = (req, res) => {
    Animal.findById(req.params.animalId)
    .then(animal => {
        if(!animal) {
            return res.status(404).send({
                message: "animal not found with id " + req.params.animalId
            });            
        }
        res.send(animal);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "animal not found with id " + req.params.animalId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving animal with id " + req.params.animalId
        });
    });
};

// Update a animal identified by the animalId in the request
exports.update = (req, res) => {

    // Find animal and update it with the request body
    Animal.findByIdAndUpdate(req.params.animalId, {
        name: req.body.name || "Untitled animal", 
        price: req.body.price,
        type: req.body.type,
        habitat: req.body.habitat,
        schedule: req.body.schedule,
        weather: req.body.weather || Weather.ALWAYS,
        img: req.body.img
    }, {new: true})
    .then(animal => {
        if(!animal) {
            return res.status(404).send({
                message: "animal not found with id " + req.params.animalId
            });
        }
        res.send(animal);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "animal not found with id " + req.params.animalId
            });                
        }
        return res.status(500).send({
            message: "Error updating animal with id " + req.params.animalId
        });
    });
};

// Delete a animal with the specified animalId in the request
exports.delete = (req, res) => {
    Animal.findByIdAndRemove(req.params.animalId)
    .then(animal => {
        if(!animal) {
            return res.status(404).send({
                message: "animal not found with id " + req.params.animalId
            });
        }
        res.send({message: "animal deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "animal not found with id " + req.params.animalId
            });                
        }
        return res.status(500).send({
            message: "Could not delete animal with id " + req.params.animalId
        });
    });
};
