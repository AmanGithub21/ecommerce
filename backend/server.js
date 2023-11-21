require("dotenv").config();
const app = require("./app");

const connectDB = require("./config/database");

// config
// dotenv.config({ path: "backend/config/config.env" });
// connecting to database;
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server working on http://localhost:${process.env.PORT}`);
});
