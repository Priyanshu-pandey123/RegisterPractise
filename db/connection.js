const mongoose = require('mongoose');

const DB=process.env.DATABASE;
//const DB="mongodb://localhost:27017/PrinceUsers";
mongoose.connect(DB)
.then(()=>{
    console.log("mongo set up");
})
.catch((err)=>{
   console.log(err,"error111111");
});

// useNewUrlParser:true, 
// useCreateIndex:true,
// useUnifiedTopology:true,
// useFindAndModify:false
