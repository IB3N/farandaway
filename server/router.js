'use strict';

const express = require('express');
const router = express.Router();
const { getUsers, createUser, createTrip, getTrips, createOption, getTrip, addVote, getUser, userLogin } =  require('./controllers/user');

//USERS
router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:userId', getUser);
router.get('/login/:emailAddress', userLogin);

//Trips
router.post('/trips/:userId', createTrip);
router.get('/trips', getTrips); //get all trips
router.get('/trips/:tripId', getTrip); //get specific trip according to tripId

//Options
router.post('/options', createOption);

//Vote
router.put('/options/:optionId', addVote)


module.exports = router;