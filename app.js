
const express = require('express');
const dotenv=require('dotenv');

const app =express();
const cors = require('cors');


app.use(cors()); 

dotenv.config({path:'./config.env'});

const port= process.env.PORT || 8000;

require('./db/connection.js');

app.use(express.json());

 
app.use(require('./router/auth.js'));

app.listen(port,()=>{console.log('server in running on port',port)});































// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();

// require('./db/connection.js');

// app.use(cors());
// app.use(express.json());

// // const groupSchema = new mongoose.Schema({
// //   name: String,
// //   color: String,
// // });

// // const noteSchema = new mongoose.Schema({
// //   content: String,
// //   groupId: mongoose.Schema.Types.ObjectId,
// //   createdAt: { type: Date, default: Date.now },
// // });

// // const Group = mongoose.model('Group', groupSchema);
// // const Note = mongoose.model('Note', noteSchema);

// app.post('/groups', async (req, res) => {
//   const group = new Group(req.body);
//   await group.save();
//   res.status(201).send(group);
// });

// app.get('/groups', async (req, res) => {
//   const groups = await Group.find();
//   res.send(groups);
// });

// app.post('/notes', async (req, res) => {
//   const note = new Note(req.body);
//   await note.save();
//   res.status(201).send(note);
// });

// app.get('/notes/:groupId', async (req, res) => {
//   const notes = await Note.find({ groupId: req.params.groupId });
//   res.send(notes);
// });

// app.get('/',(req,res)=>{
//   res.send("hello user");
// })


// app.listen(5000, () => console.log('Server running on port 5000'));





