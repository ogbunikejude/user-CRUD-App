// Set Up mongoose Database connection
const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("database connection succesful");
      }
    }
  );
};
