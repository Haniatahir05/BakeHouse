import User from "../Models/User.js";

// REGISTER USER
export const registerController = (req, res) => {
  const { fullName, email, password, phone, role } = req.body;

  const newUser = new User({
    fullName,
    email,
    password,
    phone,
    role
  });

  newUser.save()
    .then(() => res.status(201).send("User registered successfully"))
    .catch((error) => res.status(500).send("Error registering user: " + error));
};

// LOGIN USER
export const loginController = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email, password })
    .then((user) => {
      if (!user) {
        return res.status(404).send("Invalid email or password");
      }

      res.status(200).json(user);
    })
    .catch((error) => res.status(500).send("Error logging in: " + error));
};