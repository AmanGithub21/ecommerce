const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`DB not connected: ${err}`);
    });
};
