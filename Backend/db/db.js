const mongoose = require('mongoose')

function connectToDb(){
    mongoose
      .connect(process.env.DB_CONNECT)
      .then(() => console.log("Databse Connected Successfuly 🚀💪"))
      .catch((err) => console.log(err));
    
}

module.exports = connectToDb