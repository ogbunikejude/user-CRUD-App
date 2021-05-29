const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
//Set up mongoose connection
const dbconnect = require("./database/connection");
dbconnect();

//User Router
const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message:
        "welcome to home page, kindly add /user on the url to navigate to user page",
    });
});
app.use("/user", userRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} `);
});
