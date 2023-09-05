const UserModel = require("../models/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET_KEY } = require("../utility/config");

// Create Signup Function

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists", statusCode:409 });
    }

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newSignup = await UserModel.create({
      name,
      email,
      password: passwordHash
    });

    const userpassword = newSignup.toObject()

    delete userpassword.password;

    res.status(201).json({ message: "User signup successfully", user: userpassword, statusCode:201 });
  }catch (error) {
    res.status(404).json({message: "An error occurred while Signup", statusCode: 404});
  }
};

//  Create Login Function

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email: email });

    if (!existingUser) {
      return res.status(409).json({ message: "Email not found!", statusCode:409 });
    }

    const checkPassword = bcrypt.compareSync(password, existingUser.password);
    if (!checkPassword) {
      return res.status(409).json({ message: "Password is wrong!", statusCode:409 });
    }

    const token = jwt.sign({ _id: existingUser._id, email: existingUser.email }, JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    const userpassword = existingUser.toObject()

    delete userpassword.password;

    res.status(200).json({ message: "User login successfully", token, user: userpassword, statusCode:200 });
  } catch (error) {
    res.status(404).json({message: "An error occurred while login", statusCode:404});
  }
};

// Create User Profile Function

exports.userProfile = async (req,res) => {
    try {
        const userId = req.user._id
        const existingUser = await UserModel.findOne({ _id: userId });

        if (!existingUser) {
          return res.status(409).json({ message: "Email not found!", statusCode:409 });
        }
        res.status(200).json({ message: "User profile access successfully", user: existingUser,statusCode:200 });
    } catch (error) {
        res.status(404).json({message: "An error occurred while acessing User profile", statusCode:404});
      }
}
