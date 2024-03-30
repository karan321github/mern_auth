import bcrypt from "bcryptjs";
import User from "../models/user.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    next(error);
  }
};

// export const signup = (req, res) => {
//   console.log(req.body);
//   res.send('user created successfully');
// };
