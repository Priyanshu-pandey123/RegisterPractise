const mongoose = require('mongoose');
const bycrpt=require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  work: { type: String, required: true },
  password: { type: String, required: true }
});


userSchema.pre('save', async function(next) {
   
    if(this.isModified('password')){
        this.password=await bycrpt.hash(this.password,12);
    }
    next();

});


const User = mongoose.model('User', userSchema);

module.exports = User;



