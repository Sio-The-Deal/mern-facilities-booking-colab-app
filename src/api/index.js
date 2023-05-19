import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import allcategoriesRoute from "./routes/allcategories.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();


// try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
//   } catch (error) {
//     handleError(error);
//   }

//connects to a MongoDB database using Mongoose, 
//logs a message to the console if the connection is successful, and 
//throws an error if the connection fails.
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())

//by default it is not possible to send json objects as it is from insomnia or postman to express server
//to allow this to happen, we use the following middleware 
app.use(cookieParser())
app.use(express.json());

//middlewares are important because they are able to reach a request and response
//before sending anything to users
//for example ,as soon as user makes an api request it is going to come here to check all middlewares
//it will see which route we are using and follow to the routes/categories.js and output the info

//note a return response is needed in the routes/...js, if return statement is not being processed ,
//there will be a small crash on the API platform - Insomnia

//other middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/allcategories", allcategoriesRoute);
app.use("/api/rooms", roomsRoute);


//this is error handler ,, if any error occurs in the routes/..js file

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500; //write specific error message,, if there is no status ,it is going to be error 500 
  const errorMessage = err.message || "Something went wrong!";//if there is no error message ,it is going to say something has gone wrong
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack, //we would send stack that gives more details about the error
  });
});

app.listen(3000, () => {
  connect();//everytime we connect to backend server we will call this function
  console.log("Connected to backend.");
});

// // deployment

// const path = require("path");
// __dirname = path.resolve();


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// }