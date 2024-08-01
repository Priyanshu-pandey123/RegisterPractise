const mongoose = require('mongoose');

const DB=process.env.DATABASE;
mongoose.connect(DB)
.then(()=>{
    console.log("mongo set up");
})
.catch((err)=>{
   console.log(err,"error111111");
});

