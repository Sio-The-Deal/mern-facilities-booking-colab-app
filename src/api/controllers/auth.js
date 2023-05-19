import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {

// The salt is used to enhance the security of the password hashing process.
// Hash the password provided in the request body using the generated salt 
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

//     Create a new instance of the User model with the provided request body, spreading its properties, 
//     and replacing the password property with the hashed password.
// Save the new user to the database using newUser.save()

    const newUser = new User({
      ...req.body,
      password: hash,
    });
    // Send a response with a status of 200 and a message indicating that the user has been created.
    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
//   Find a user in the database based on the provided username in the request body using User.findOne().
// If no user is found, the function calls the next function with an error indicating that the user was not found.
// Compare the password provided in the request body with the hashed password stored in the user object using bcrypt.compare().
// If the passwords don't match, 
// the function calls the next function with an error indicating that the password or username is incorrect.
   try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // If the password is correct, a JSON Web Token (JWT) is generated using jwt.sign(). 
    // The token includes the user's ID and isAdmin status, signed with the JWT_SECRET stored in the environment variables.
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

  //   The function extracts the password and isAdmin properties from the user object using destructuring assignment and
  //   the ... spread operator to get the remaining properties into otherDetails.
  
  //  The function sets a cookie named "access_token" with the generated token, configured as HTTP-only to enhance security.
  //  Finally, the function sends a response with a status of 200, 
  //  including the otherDetails object in the response body and the isAdmin property.
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
