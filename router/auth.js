const express = require('express');
const mongoose = require('mongoose');
const Group = require('../model/groupSchema');
const Note = require('../model/noteSchema');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the user registration API');
});

router.post('/groups', async (req, res) => {
  const group = new Group(req.body);
  await group.save();
  res.status(201).send(group);
});



router.get('/groups', async (req, res) => {
  const groups = await Group.find();
  res.send(groups);
});



router.post('/notes', async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.status(201).send(note);
});

router.get('/notes/:groupId', async (req, res) => {
  const notes = await Note.find({ groupId: req.params.groupId });
  res.send(notes);
});


module.exports = router;




 